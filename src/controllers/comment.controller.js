const Comment = require("../models/Comment/comment.model");

const getAllComments = async () => {
  const comments = await Comment.find()
    .populate("user", "userName img")
    .populate("show", "nameEn nameAr img");
  return comments;
};

const getUserComments = async (userID) => {
  const comments = await Comment.find({ user: userID })
    .populate("user", "userName img")
    .populate("show", "nameEn nameAr img");
  return comments;
};
const getShowCommentsByID = async (showID) => {
  const comments = await Comment.find({ show: showID })
    .populate("user", "userName img")
    .populate("show", "nameEn nameAr img");
  return comments;
};

const addComment = async (commentData) => {
  const { message, userID, showID } = commentData ?? {};
  const newComment = new Comment({
    message,
    user: userID,
    show: showID,
  });
  return await newComment.save();
};

const deleteComment = async (commentID) => {
  return Comment.findByIdAndDelete(commentID);
};
const updateComment = async (commentID, message) => {
  return Comment.findByIdAndUpdate(commentID, { message }, { new: true })
    .populate("user", "userName img")
    .populate("show", "nameEn nameAr img");
};

module.exports = {
  addComment,
  deleteComment,
  updateComment,
  getUserComments,
  getShowCommentsByID,
  getAllComments,
};
