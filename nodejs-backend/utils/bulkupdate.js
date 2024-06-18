import kafka from "kafka-node";
import { User } from "../models/userTrigger.js";

const Consumer = kafka.Consumer;
const consumer = new Consumer(
  client,
  [{ topic: "user-stop-loss", partition: 0 }],
  { autoCommit: true }
);

consumer.on("message", async (message) => {
  const users = JSON.parse(message.value);
  await User.insertMany(users, { ordered: false }).catch(console.error);
});
