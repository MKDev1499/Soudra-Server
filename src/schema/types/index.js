const { mergeTypeDefs } = require("@graphql-tools/merge");
const EpisodeTypes = require("./Episode");
const ActorType = require("./Actor");
const ShowType = require("./Show");
const UserType = require("./User");

const types = mergeTypeDefs([EpisodeTypes, ActorType, ShowType, UserType]);

module.exports = types;
