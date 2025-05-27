const { gql } = require("graphql-tag");

const CommentQueries = gql`
  extend type Query {
    getShowComments(showID: String!): [Comment]
    getUserComments(userID: String!): [Comment]
    getAllComments: [Comment]
    getComment(commentID: String!): Comment
    getCommentsByShow(showID: String!): [Comment]
    getCommentsByUser(userID: String!): [Comment]
  }
`;

module.exports = CommentQueries;
