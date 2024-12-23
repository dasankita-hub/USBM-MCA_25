const express = require("express");
require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const connection = require("./config/db");

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Establish MongoDB connection
connection();

// Routes for /users
app.use("/users", userRoutes);

// Root endpoint
app.get("/", (req, res) => {
  res.status(201).send({ msg: "It's working" });
});

// Set the port from environment variables or default to 8000
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
