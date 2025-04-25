const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const authenticateJWT = require("../middlewares/authMiddleware");

// Public routes
router.post("/login", authController.userLogin);

// Admin routes (authentication required)
//add user
router.post("/user", userController.addUser);

// get all user
router.get("/users", authenticateJWT, userController.getAllUsers);

//get single user
router.get("/user/:id", authenticateJWT, userController.getSingleUser);

//update user
router.put("/user/:id", authenticateJWT, userController.updateUser);

//delete user
router.delete("/user/:id", authenticateJWT, userController.deleteUser);

// User password change
router.put("/change-password", authenticateJWT, authController.userChangePassword);

module.exports = router;
