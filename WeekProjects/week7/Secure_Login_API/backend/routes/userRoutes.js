
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { protect, authorize } = require("../middleware/authMiddleware");

// Protected profile
router.get("/profile", protect, userController.getProfile);

// Update profile
router.put("/profile", protect, userController.updateProfile);

// Admin-only route
router.get(
    "/admin/users",
    protect,
    authorize("admin"),
    userController.getAllUsers
);

module.exports = router;
