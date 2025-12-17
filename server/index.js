import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import express from "express";

const app = express();

const connectDB = async () => {
  try {
    console.log("MONGO_URI =", process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("failed to connect with mongo");
    console.error(error);
    process.exit(1);
  }
};

const startServer = async () => {
  await connectDB();
  app.listen(process.env.PORT || 8080, () => {
    console.log(`Server started on port ${process.env.PORT}`);
  });
};

startServer();
