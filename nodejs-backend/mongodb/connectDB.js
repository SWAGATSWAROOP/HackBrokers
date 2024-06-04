import mongoose from "mongoose";

async function ConnectToDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/coin");
  } catch (error) {
    console.log("Error in connection to DB");
  }
}

export default ConnectToDB;
