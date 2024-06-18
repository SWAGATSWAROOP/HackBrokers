import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  stopLoss: [
    {
      coin: String,
      price: Number,
    },
  ],
});

export const User = model("User", userSchema);
