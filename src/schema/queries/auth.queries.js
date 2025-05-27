const { gql } = require("graphql-tag");

const UserQueries = gql`
  extend type Query {
    users: [User]
    user(id: ID!): User
  }
`;

module.exports = UserQueries;
