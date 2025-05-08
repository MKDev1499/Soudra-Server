const { mergeTypeDefs } = require("@graphql-tools/merge");
const EpisodeTypes = require("./Episode");
const ActorType = require("./Actor");
const ShowType = require("./Show");

const types = mergeTypeDefs([EpisodeTypes, ActorType, ShowType]);

module.exports = types;
