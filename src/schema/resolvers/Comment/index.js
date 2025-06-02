const {
  addComment,
  deleteComment,
  updateComment,
  getShowCommentsByID,
  getAllComments,
  getUserComments,
} = require("../../../controllers/comment.controller");

const CommentResolver = {
  Query: {
    showComments: (_, { showID }) => getShowCommentsByID(showID),
    userComments: (_, { userID }) => getUserComments(userID),
    comments: () => getAllComments(),
  },
  Mutation: {
    addComment: (_, { commentData }) => addComment(commentData),
    deleteComment: (_, { commentID }) => deleteComment(commentID),
    updateComment: (_, { commentID, message }) =>
      updateComment(commentID, message),
  },
};

module.exports = CommentResolver;
