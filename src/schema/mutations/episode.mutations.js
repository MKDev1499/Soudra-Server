const { gql } = require("graphql-tag");

const CommentMutations = gql`
  input ListernerInput {
    episodeID: String
    userID: String
    showID: String
  }

  extend type Mutation {
    addListen(data: ListernerInput!): Episode
  }
`;

module.exports = CommentMutations;
