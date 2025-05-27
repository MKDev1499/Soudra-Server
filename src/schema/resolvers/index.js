const ActorResolvers = require("./Actor");
const EpisodeResolvers = require("./Episode");
const ShowResolvers = require("./Show");
const SharedResolvers = require("./Shared");
const AuthResolvers = require("./Auth");
const CommentResolvers = require("./Comment");
const InteractionResolvers = require("./Interaction");

// Combine resolvers
const resolvers = {
  Query: {
    ...EpisodeResolvers.Query,
    ...ActorResolvers.Query,
    ...ShowResolvers.Query,
    ...SharedResolvers.Query,
    ...AuthResolvers.Query,
    ...CommentResolvers.Query,
    ...InteractionResolvers.Query,
  },
  Mutation: {
    ...EpisodeResolvers.Mutation,
    ...ActorResolvers.Mutation,
    ...ShowResolvers.Mutation,
    ...SharedResolvers.Mutation,
    ...AuthResolvers.Mutation,
    ...CommentResolvers.Mutation,
    ...InteractionResolvers.Mutation,
  },
};

module.exports = resolvers;
