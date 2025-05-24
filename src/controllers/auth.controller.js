const User = require("../models/Auth/User.model");
const jwt = require("jsonwebtoken");

const registerUser = async (userData) => {
  try {
    const { email } = userData ?? {};
    const body = {
      ...userData,
      email: email?.toLowerCase(),
    };
    const user = await new User(body).save();

    const token = jwt.sign(
      { ...user?._doc, id: user?._id },
      process.env.JWT_SECRET
    );

    return { token };
  } catch (error) {
    console.log("REG Err : ", error);
    throw new Error(
      JSON.stringify({
        message: error,
        code: error?.code,
      })
    );
  }
};

// User login
const loginUser = async (userData) => {
  try {
    // Code to handle user login
    // ...
    const { email, password } = userData ?? {};
    const enhEmail = email?.toLowerCase();
    const user = await User.findOne({ email: enhEmail, password }, "-password");
    if (!user) {
      throw new Error("Invalid email or password");
    } else {
      // Generate JWT token
      const token = jwt.sign({ ...user?._doc }, process.env.JWT_SECRET);
      return { token };
    }
  } catch (error) {
    throw new Error("Internal server error : " + error);
  }
};

const socialLogin = async (userData) => {
  const { email, id } = userData ?? {};
  try {
    const user = await User.findOne({
      email: email?.toLowerCase(),
      socialID: id,
    })
      .select("-password")
      .lean();
    if (user) {
      const token = jwt.sign({ ...user }, process.env.JWT_SECRET);
      return { token };
    } else {
      const token = await createSocialAccount(userData);
      return { token };
    }
  } catch (error) {
    throw new Error(
      JSON.stringify({
        message: "Internal server error",
        code: error?.code,
      })
    );
  }
};

const createSocialAccount = async (userData) => {
  const { name, email, id, photo } = userData ?? {};
  const body = {
    userName: name,
    email: email?.toLowerCase(),
    img: photo,
    socialID: id,
    socialProvider: "google",
  };
  const newUser = new User(body);
  const user = await newUser.save();
  await User.updateOne({ _id: user?._id }, { id: user?._id });
  const token = jwt.sign({ ...user?._doc }, process.env.JWT_SECRET);
  return token;
};

module.exports = {
  registerUser,
  loginUser,
  socialLogin,
};
