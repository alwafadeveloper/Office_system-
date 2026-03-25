import express from "express";
import { verifyJWT, verifyAdmin } from "../middlewares/authMiddleware.js";
import {
  getUserData,
  getAllUsers,
  deleteUser,
  updateUserRole,
} from "../controllers/userController.js";

const userRouter = express.Router();

// Route for a logged-in user to get their own data
userRouter.get("/user-data", verifyJWT, getUserData);

// --- Admin Routes ---
// These routes should only be accessible by an admin

// Get all users
userRouter.get("/", verifyJWT, verifyAdmin, getAllUsers);

// Delete a user by ID
userRouter.delete("/:id", verifyJWT, verifyAdmin, deleteUser);

// Update a user's role by ID
userRouter.put("/role/:id", verifyJWT, verifyAdmin, updateUserRole);

export default userRouter;
