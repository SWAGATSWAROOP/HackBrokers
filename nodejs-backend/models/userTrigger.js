import mongoose from "mongoose";

// Define the schema for a coin
const coinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

// Define the main schema for user data
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  coins: [coinSchema], // Embedding the coin schema as an array
});

// Create the model for the user schema
export const UserData = mongoose.model("UserData", userSchema);
