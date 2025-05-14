const { gql } = require("graphql-tag");

const EpisodeQueries = gql`
  type SearchResult {
    shows: [Show]
    actors: [Actor]
  }
  extend type Query {
    search(query: String!): SearchResult
  }
`;

module.exports = EpisodeQueries;
