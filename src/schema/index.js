const { mergeTypeDefs } = require("@graphql-tools/merge");
const { makeExecutableSchema } = require("@graphql-tools/schema");

// Import resolvers
const resolvers = require("./resolvers");

// Import typeDefs
const CommonType = require("./types/Common");
const allTypes = require("./types");
const allQueries = require("./queries");
const allMutations = require("./mutations");

// Combine typeDefs
const typeDefs = mergeTypeDefs([
  CommonType,
  allTypes,
  allQueries,
  allMutations,
]);

// Create schema
const schema = makeExecutableSchema({ typeDefs, resolvers });

module.exports = schema;
