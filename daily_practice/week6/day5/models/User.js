
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
    trim: true
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"]
  },

  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [18, "Age must be at least 18"],
    max: [70, "Age cannot exceed 70"]
  },

  role: {
    type: String,
    enum: ["Admin", "Customer", "Seller"],
    default: "Customer"
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: function (value) {
        return value.length >= 6;
      },
      message: "Password must be at least 6 characters long"
    }
  },

  mobile: {
    type: String,
    validate: {
      validator: function (value) {
        return /^[0-9]{10}$/.test(value);
      },
      message: "Mobile number must be 10 digits"
    }
  }
});

module.exports = mongoose.model("User", userSchema);
