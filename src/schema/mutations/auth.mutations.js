const { gql } = require("graphql-tag");

const AuthMutations = gql`
  input UserInput {
    userName: String
    email: String
    img: String
    password: String
  }

  input LoginInput {
    email: String
    password: String
  }

  type UserToken {
    token: String
  }

  extend type Mutation {
    register(userData: UserInput!): UserToken
    login(userData: LoginInput!): UserToken
  }
`;

module.exports = AuthMutations;
