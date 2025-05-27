const { gql } = require("graphql-tag");

const InteractionType = gql`
  type Interaction {
    id: ID!
    type: String!
    user: User!
    show: Show!
    createdAt: String!
    updatedAt: String!
  }
`;

module.exports = InteractionType;
