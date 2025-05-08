const { listAllEpisodes } = require("../../../controllers/episode.controllers");

const EpisodeResolvers = {
  Query: {
    episodes: listAllEpisodes,
  },
  Mutation: {},
};

module.exports = EpisodeResolvers;
