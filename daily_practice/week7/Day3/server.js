const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 minutes
    max: 200, // Limit each IP to 200 requests per windowMs
    message: "Too many requests from this IP, please try later."
});


app.use(express.json());

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"]
}));

app.use(helmet());

app.use(limiter);

// Custom Middleware
const logger = require("./middleware/logger");
app.use(logger);

// Routes
app.use("/api", require("./routes/authRoutes"));
app.use("/api", require("./routes/userRoutes"));

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB Connected"))
.catch((err) => console.error(err));

app.listen(process.env.PORT || 4000, () => console.log("Server running on port " + (process.env.PORT || 4000)));
