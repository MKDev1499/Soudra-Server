import express from "express";
import {
  deleteUser,
  loginUser,
  registerUser,
  updateUser,
  listUsers,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.post("/register", (req, res) => {
  registerUser(req, res);
});

userRouter.post("/login", (req, res) => {
  loginUser(req, res);
});

// Update a section
userRouter.put("/:id", (req, res) => {
  // Call the updateSection controller function
  updateUser(req, res);
});

// List sections
userRouter.get("/", (req, res) => {
  // Call the listSections controller function
  listUsers(req, res);
});

// Delete a section
userRouter.delete("/:id", (req, res) => {
  // Call the deleteSection controller function
  deleteUser(req, res);
});

export default userRouter;
