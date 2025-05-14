const { mergeTypeDefs } = require("@graphql-tools/merge");
const EpisodeQueries = require("./episode.queries");
const ActorQueries = require("./actor.queries");
const ShowQueries = require("./show.queries");
const SharedQueries = require("./shared.queries");

const queries = mergeTypeDefs([
  EpisodeQueries,
  ActorQueries,
  ShowQueries,
  SharedQueries,
]);

module.exports = queries;
