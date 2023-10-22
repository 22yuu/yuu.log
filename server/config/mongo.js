// @ts-nocheck
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongodb = process.env.MONGODB_URI;
mongoose.set("strictQuery", true);

export async function conn() {
  try {
    await mongoose
      .connect(mongodb)
      .then(() => console.log("Connect to MongoDB..."))
      .catch();
  } catch (e) {
    console.error(e);
  }
}
