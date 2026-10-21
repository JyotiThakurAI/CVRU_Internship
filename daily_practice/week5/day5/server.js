require("dotenv").config();
const express= require("express");
const app = express();
const userRoutes = require("./routes/userRoutes")

// Body Parser
app.use(express.json());

// Simple custom logger
const logger = require("./utils/logger");
app.use(logger);

// Use routes
app.use("/api/users", userRoutes);

// Error Handling Middleware
const errorHandler= require("./middleware/errorHandler");
app.use(errorHandler)

// Get PORT from environment
const PORT = process.env.PORT || 3000;

app.listen( PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});