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
    getShowComments: (_, { showID }) => getShowCommentsByID(showID),
    getUserComments: (_, { userID }) => getUserComments(userID),
    getAllComments: () => getAllComments(),
  },
  Mutation: {
    addComment: (_, { commentData }) => addComment(commentData),
    deleteComment: (_, { commentID }) => deleteComment(commentID),
    updateComment: (_, { commentID, message }) =>
      updateComment(commentID, message),
  },
};

module.exports = CommentResolver;
