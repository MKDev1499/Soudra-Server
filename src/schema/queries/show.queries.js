const { gql } = require("graphql-tag");

const ShowQueries = gql`
  extend type Query {
    shows: [Show]
    show(showID: String!): Show
  }
`;

module.exports = ShowQueries;
