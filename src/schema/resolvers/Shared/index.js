const { generalSearch } = require("../../../controllers/shared.controller");

const SharedResolver = {
  Query: {
    search: (_, { query }) => generalSearch(query),
  },
  Mutation: {},
};

module.exports = SharedResolver;
