const { gql } = require("graphql-tag");

const UserType = gql`
  type User {
    id: ID!
    userName: String
    email: String!
    img: String
    password: String
  }
`;

module.exports = UserType;
