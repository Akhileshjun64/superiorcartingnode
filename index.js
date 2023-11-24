// index.js
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./dbconnect");
const Item = require("./model");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// POST endpoint to add an item
app.post("/postitem", async (req, res) => {
  try {
    const { name, description } = req.body;

    // Create a new item
    const newItem = new Item({ name, description });

    // Save the item to the database
    await newItem.save();

    // Respond with the saved item
    res.json(newItem);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
