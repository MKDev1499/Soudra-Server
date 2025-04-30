const { gql } = require("graphql-tag");

const EpisodeQueries = gql`
  extend type Query {
    episodes: [Episode]
  }
`;

module.exports = EpisodeQueries;
