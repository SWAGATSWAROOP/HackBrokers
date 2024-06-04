import mongoose from "mongoose";

const coinSchema = new mongoose.Schema(
  {
    symbol: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

export const CoinsData = new mongoose.model("CoinsData", coinSchema);
