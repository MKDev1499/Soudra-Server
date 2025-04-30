const { mergeTypeDefs } = require("@graphql-tools/merge");
const ActorMutations = require("./actor.mutations");
const ShowMutations = require("./show.mutations");

const mutations = mergeTypeDefs([ActorMutations, ShowMutations]);

module.exports = mutations;
