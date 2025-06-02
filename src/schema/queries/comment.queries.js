const { gql } = require("graphql-tag");

const CommentQueries = gql`
  extend type Query {
    showComments(showID: String!): [Comment]
    userComments(userID: String!): [Comment]
    comments: [Comment]
    getComment(commentID: String!): Comment
    getCommentsByShow(showID: String!): [Comment]
    getCommentsByUser(userID: String!): [Comment]
  }
`;

module.exports = CommentQueries;
