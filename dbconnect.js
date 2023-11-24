// models/db.js
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    // await mongoose.connect(`${process.env.MONGODB_URI}/post`);
    await mongoose.connect(`${process.env.MONGODB_URI_CLOUD}/post`);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = connectDB;
