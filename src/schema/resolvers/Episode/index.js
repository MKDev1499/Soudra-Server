const {
  listAllEpisodes,
  addListenersToEpisode,
} = require("../../../controllers/episode.controllers");

const EpisodeResolvers = {
  Query: {
    episodes: listAllEpisodes,
  },
  Mutation: {
    addListen: (_, { data }) => addListenersToEpisode(data),
  },
};

module.exports = EpisodeResolvers;
