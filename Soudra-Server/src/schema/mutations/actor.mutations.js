const { gql } = require("graphql-tag");

const ActorMutations = gql`
  input ActorInput {
    nameAr: String
    nameEn: String
    img: String
    plot: String
  }

  extend type Mutation {
    addActor(actorData: ActorInput!): Actor
    addActorByTMDB(actorID: String!): Actor
  }
`;

module.exports = ActorMutations;
