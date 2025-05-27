const { gql } = require("graphql-tag");

const CommentType = gql`
  type Comment {
    id: ID!
    message: String!
    user: User!
    show: Show!
    createdAt: String!
    updatedAt: String!
  }
`;

module.exports = CommentType;
