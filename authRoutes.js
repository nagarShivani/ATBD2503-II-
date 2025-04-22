const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const authenticateJWT = require("../middlewares/authMiddleware");

//@route  POST /api/auth/register
// @desc    register user
// Public route to register user
router.post("/register", authController.registerUser);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post("/login", authController.userLogin);

// @route   PUT /api/auth/change-password
// @desc    Change user password
// @access  Private
router.put("/change-password", authenticateJWT, authController.userChangePassword);

module.exports = router;
