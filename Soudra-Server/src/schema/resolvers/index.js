const ActorResolvers = require("./Actor");
const EpisodeResolvers = require("./Episode");
const ShowResolvers = require("./Show");

// Combine resolvers
const resolvers = {
  Query: {
    ...EpisodeResolvers.Query,
    ...ActorResolvers.Query,
    ...ShowResolvers.Query,
  },
  Mutation: {
    ...EpisodeResolvers.Mutation,
    ...ActorResolvers.Mutation,
    ...ShowResolvers.Mutation,
  },
};

module.exports = resolvers;
