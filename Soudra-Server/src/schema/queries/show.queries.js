const { gql } = require("graphql-tag");

const ShowQueries = gql`
  extend type Query {
    shows: [Show]
  }
`;

module.exports = ShowQueries;
