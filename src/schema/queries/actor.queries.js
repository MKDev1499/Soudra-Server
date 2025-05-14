const { gql } = require("graphql-tag");

const ActorQueries = gql`
  extend type Query {
    actors: [Actor]
    actorShows(actorID: ID!): [Show]
  }
`;

module.exports = ActorQueries;
