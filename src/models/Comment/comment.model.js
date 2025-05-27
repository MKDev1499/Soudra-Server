const mongoose = require("mongoose");
const ModelNames = require("../ModelNames.js");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    message: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: ModelNames.User,
    },
    show: {
      type: mongoose.Schema.Types.ObjectId,
      ref: ModelNames.Show,
    },
  },
  {
    timestamps: true,
  }
);

commentSchema.virtual("id").get(function () {
  return this._id.toString();
});

// Ensure virtual fields are included when converting documents to JSON
commentSchema.set("toJSON", {
  virtuals: true,
});

const Comment = mongoose.model(ModelNames.Comment, commentSchema);
module.exports = Comment;
