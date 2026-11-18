const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.use(express.json());

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
