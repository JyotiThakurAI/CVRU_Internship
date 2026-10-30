
const User = require("../models/User");
const Order = require("../models/Order");

//get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};


// Create a new user
const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json({
      message: "User created successfully",
      user
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

// Create an order linked to a user
const createOrder = async (req, res) => {
  try {
    const { productName, amount, user } = req.body;

    const existingUser = await User.findById(user);

    if (!existingUser) {
      return res.status(404).json({
        error: "User not found"
      });
    }

    const order = await Order.create({
      productName,
      amount,
      user
    });

    res.status(201).json({
      message: "Order created successfully",
      order
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};

// Get all orders with related user details
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email");

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = {
  createUser,
  createOrder,
  getOrders,
  getUsers
};
