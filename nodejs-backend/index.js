import express from "express";
import cluster from "node:cluster";
import { availableParallelism } from "node:os";
import process from "node:process";
import { datafetch } from "./utils/getData.js";
import ConnectToDB from "./mongodb/connectDB.js";
import { UserData } from "./models/userTrigger.js";

export const app = express();
ConnectToDB();
const numCPUs = availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  setInterval(datafetch, 60 * 1000);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const PORT = 8000;

  app.post("/triggermail", async (req, res) => {
    try {
      const { email, symbol, price } = req.data;
      const newUser = new UserData({
        email: email,
      });

      newUser.coins.push({ name: symbol, price: price });

      await newUser
        .save()
        .then((user) => {
          console.log("User saved:", user);
        })
        .catch((error) => {
          console.error("Error saving user:", error);
        });
      return res.status(200).json({ message: "Successfully set" });
    } catch (error) {
      return res.status(500).json({ message: "Server Error" });
    }
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}
