const { gql } = require("graphql-tag");

const CommonType = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

module.exports = CommonType;
