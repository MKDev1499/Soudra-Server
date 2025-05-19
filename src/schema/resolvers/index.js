const ActorResolvers = require("./Actor");
const EpisodeResolvers = require("./Episode");
const ShowResolvers = require("./Show");
const SharedResolvers = require("./Shared");
const AuthResolvers = require("./Auth");

// Combine resolvers
const resolvers = {
  Query: {
    ...EpisodeResolvers.Query,
    ...ActorResolvers.Query,
    ...ShowResolvers.Query,
    ...SharedResolvers.Query,
    ...AuthResolvers.Query,
  },
  Mutation: {
    ...EpisodeResolvers.Mutation,
    ...ActorResolvers.Mutation,
    ...ShowResolvers.Mutation,
    ...SharedResolvers.Mutation,
    ...AuthResolvers.Mutation,
  },
};

module.exports = resolvers;
