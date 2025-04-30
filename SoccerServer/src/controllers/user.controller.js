import User from "../models/User/User.model.js";
import jwt from "jsonwebtoken";

// User registration
export const registerUser = async (req, res) => {
  try {
    // Code to handle user registration
    const newUser = new User(req.body);
    await newUser.save();
    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// User login
export const loginUser = async (req, res) => {
  try {
    // Code to handle user login
    // ...
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { ...user?._doc, userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.status(201).json({ message: "Login Success", token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update user data
export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    // Code to handle updating user data
    // ...
    res.status(200).json({ message: "User data updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    // Code to handle deleting user
    // ...
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// List users
export const listUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
