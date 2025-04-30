const { gql } = require("graphql-tag");

const ShowMutations = gql`
  input ShowInput {
    nameAr: String
    nameEn: String
    img: String
    descriptionEn: String
    descriptionAr: String
    staring: ID
    actors: [ID]
    episodes: [ID]
  }

  extend type Mutation {
    addShow(showData: ShowInput!): Show
  }
`;

module.exports = ShowMutations;
