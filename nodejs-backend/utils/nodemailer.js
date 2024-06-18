import { schedule } from "node-cron";
import { createTransport } from "nodemailer";
import { User } from "../models/userTrigger.js";

// Set up your email transporter
const transporter = createTransport({
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

schedule("* * * * *", async () => {
  const users = await User.find();
  for (const user of users) {
    for (const { coin, price } of user.stopLoss) {
      redisClient.get(coin, (err, currentPrice) => {
        if (err) console.error("Error fetching from Redis", err);
        else if (currentPrice < price) {
          sendEmail(user.email, coin, currentPrice);
        }
      });
    }
  }
});
