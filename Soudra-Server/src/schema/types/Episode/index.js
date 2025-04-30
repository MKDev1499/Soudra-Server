const { gql } = require("graphql-tag");

const EpisodeType = gql`
  type Episode {
    id: ID!
    nameEn: String!
    nameAr: String!
    url: String!
  }
`;

module.exports = EpisodeType;
