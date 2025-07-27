import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(
      `${process.env.MONOGDB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected successfully: ${connection.connection.host}`
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
    throw error;
  }
};

export default connectDB;
