const express = require("express");
const router = express.Router();

const {
    registerUser,
    login,
    getUsers,
    updatePassword,
    deleteUser
} = require("../controllers/authController");

// Authentication
router.post("/register", registerUser);
router.post("/login", login);

// CRUD Operations
router.get("/users", getUsers);
router.put("/users/:id", updatePassword);
router.delete("/users/:id", deleteUser);

module.exports = router;