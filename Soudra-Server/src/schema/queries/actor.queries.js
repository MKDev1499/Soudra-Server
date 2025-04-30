const { gql } = require("graphql-tag");

const ActorQueries = gql`
  extend type Query {
    actors: [Actor]
  }
`;

module.exports = ActorQueries;
