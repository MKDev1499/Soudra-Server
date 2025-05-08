const { gql } = require("graphql-tag");

const ShowMutations = gql`
  input ShowInput {
    nameAr: String
    nameEn: String
    img: String
    descriptionEn: String
    descriptionAr: String
    releaseYear: String
    staring: ID
    actors: [ID]
    episodes: [ID]
  }

  input EpisodeInput {
    name: String
    url: String
  }

  input AddEpisodesInput {
    showID: String!
    episodes: [EpisodeInput]
  }

  extend type Mutation {
    addShow(showData: ShowInput!): Show
    addEpisodesToShow(data: AddEpisodesInput): Show
    addActorToShow(showID: String!, actorID: String!): Show
  }
`;

module.exports = ShowMutations;
