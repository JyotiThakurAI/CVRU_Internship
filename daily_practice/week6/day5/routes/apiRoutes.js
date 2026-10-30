
const express = require("express");
const router = express.Router();

const {
  getUsers,
  createUser,
  createOrder,
  getOrders,
  
} = require("../controllers/apiController");

// get all users 
router.get("/users", getUsers);

// Create a user
router.post("/users", createUser);

// Create an order
router.post("/orders", createOrder);

// Get all orders with user details
router.get("/orders", getOrders);

module.exports = router;
