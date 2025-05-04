const express = require("express");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const connectDB = require("./config/db");
const User = require('./models/userModel');
const customerroutes = require("./routes/customerRoutes");

dotenv.config();

// Database connection
connectDB();

const app = express(); // Create Express app
const http = require('http').Server(app); // HTTP server with app

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api", userRoutes);
app.use("/api/customers", customerroutes);

const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
