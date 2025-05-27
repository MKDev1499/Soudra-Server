const { gql } = require("graphql-tag");

const InteractionQueries = gql`
  type ShowInteractions {
    likes: [Interaction]
    dislikes: [Interaction]
  }

  extend type Query {
    getShowInteractions(showID: String!): ShowInteractions
    getUserIntreactions(userID: String!): [Interaction]
    getAllInteractions: [Interaction]
  }
`;

module.exports = InteractionQueries;
