const { mergeTypeDefs } = require("@graphql-tools/merge");
const ActorMutations = require("./actor.mutations");
const ShowMutations = require("./show.mutations");
const AuthMutations = require("./auth.mutations");
const CommentMutations = require("./comment.mutations");
const InteractionMutations = require("./interaction.mutation");

const mutations = mergeTypeDefs([
  ActorMutations,
  ShowMutations,
  AuthMutations,
  CommentMutations,
  InteractionMutations,
]);

module.exports = mutations;
