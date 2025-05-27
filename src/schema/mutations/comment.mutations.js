const { gql } = require("graphql-tag");

const CommentMutations = gql`
  input CommentInput {
    message: String
    userID: String
    showID: String
  }

  extend type Mutation {
    addComment(commentData: CommentInput!): Comment
    deleteComment(commentID: String!): Comment
    updateComment(commentID: String!, message: String!): Comment
  }
`;

module.exports = CommentMutations;
