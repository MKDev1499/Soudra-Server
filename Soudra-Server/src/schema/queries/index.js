const { mergeTypeDefs } = require("@graphql-tools/merge");
const EpisodeQueries = require("./episode.queries");
const ActorQueries = require("./actor.queries");

const queries = mergeTypeDefs([EpisodeQueries, ActorQueries]);

module.exports = queries;
