const mongoose = require("mongoose");
const ModelNames = require("../ModelNames.js");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    userName: String,
    email: {
      type: String,
      unique: true,
    },
    img: String,
    password: String,
    socialID: String,
  },
  {
    timestamps: true,
  }
);

userSchema.virtual("id").get(function () {
  return this._id.toString();
});

// Ensure virtual fields are included when converting documents to JSON
userSchema.set("toJSON", {
  virtuals: true,
});

const User = mongoose.model(ModelNames.User, userSchema);
module.exports = User;
