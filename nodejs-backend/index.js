import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import mongoose from "mongoose";
import Redis from "ioredis";
import cron from "node-cron";
import nodemailer from "nodemailer";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// MongoDB Setup
mongoose.connect("mongodb://localhost:27017/crypto");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  stopLoss: [
    {
      coin: String,
      price: Number,
    },
  ],
});

const User = mongoose.model("User", userSchema);

// Redis Setup with ioredis
const redisClient = new Redis();
const redisSubscriber = new Redis();

redisClient.on("error", (err) => {
  console.error("Error connecting to Redis", err);
});

const getCoinPrice = async (coin) => {
  try {
    const price = await redisClient.get(coin);
    return parseFloat(price);
  } catch (err) {
    console.error("Error getting coin price from Redis", err);
  }
};

// Email Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.MAIL_PASSWORD,
  },
});

const sendEmail = (email, coin, price) => {
  const mailOptions = {
    from: process.env.MAIL,
    to: email,
    subject: "Price Alert",
    text: `The price of ${coin} has dropped below your stop loss price. Current price: ${price}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.error("Error sending email", error);
    else console.log("Email sent:", info.response);
  });
};

// Cron Job to Check Prices
cron.schedule("* * * * *", async () => {
  const users = await User.find();
  for (const user of users) {
    for (const { coin, price } of user.stopLoss) {
      const currentPrice = await getCoinPrice(coin);
      if (currentPrice < price) {
        sendEmail(user.email, coin, currentPrice);
      }
    }
  }
});

// Redis Pub/Sub for Bulk Insertions
redisSubscriber.subscribe("user-stop-loss", (err, count) => {
  if (err) {
    console.error("Failed to subscribe: ", err);
  } else {
    console.log(`Subscribed to ${count} channel(s).`);
  }
});

redisSubscriber.on("message", async (channel, message) => {
  if (channel === "user-stop-loss") {
    const users = JSON.parse(message);
    await User.insertMany(users, { ordered: false }).catch(console.error);
  }
});

// API Endpoints
app.post("/user", async (req, res) => {
  const { email, stopLoss } = req.body;

  const user = new User({ email, stopLoss });
  try {
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/user/bulk", (req, res) => {
  const { users } = req.body;
  redisClient.publish("user-stop-loss", JSON.stringify(users));
  res.status(202).send({ message: "Users sent for processing" });
});

// Data Fetch Function
export const datafetch = async () => {
  try {
    const res = await fetch("https://api.livecoinwatch.com/coins/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "344fa7d6-b410-4a2b-93da-e44129ace034",
      },
      body: JSON.stringify({
        currency: "USD",
        sort: "rank",
        order: "ascending",
        offset: 0,
        limit: 100,
        meta: false,
      }),
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    const pipeline = redisClient.pipeline();
    data.forEach(({ name, rate }) => {
      pipeline.hset("coins", name, rate);
    });

    try {
      await pipeline.exec();
      console.log("Coins set successfully");
    } catch (error) {
      console.error("Error setting coins:", error);
    }

    console.log("Successfully Updated Data");
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
  // Fetch and store coin data initially
  datafetch();
  // Set an interval to fetch and store coin data periodically
  setInterval(datafetch, 60 * 1000); // every hour
});
