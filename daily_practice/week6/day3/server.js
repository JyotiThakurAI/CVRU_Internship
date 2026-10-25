const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(express.json());

// Student API routes
app.use("/api/students", studentRoutes);

// Connect to MongoDB
mongoose
.connect(process.env.MONGO_URI)
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log(err));

// Test route
app.get("/", (req, res) => {
  res.send("Week 6 Day 3 - Student API is Running");
});


app.listen((5000), ()=>{
    console.log("server is running on PORT 5000");
});