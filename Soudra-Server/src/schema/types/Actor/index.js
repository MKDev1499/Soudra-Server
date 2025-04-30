const { gql } = require("graphql-tag");

const ActorType = gql`
  type Actor {
    id: ID!
    nameEn: String
    nameAr: String!
    img: String
    plot: String
  }
`;

module.exports = ActorType;
