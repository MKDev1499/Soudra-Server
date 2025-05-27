const { gql } = require("graphql-tag");

const InteractionMutations = gql`
  input InteractionInput {
    userID: String
    showID: String
    type: String
  }

  extend type Mutation {
    addInteraction(interactionData: InteractionInput!): Interaction
    deleteInteraction(commentID: String!): Comment
    updateInteraction(commentID: String!, type: String!): Comment
  }
`;

module.exports = InteractionMutations;
