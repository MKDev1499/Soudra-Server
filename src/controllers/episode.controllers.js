const EpisodeModel = require("../models/Episode/episode.model");

// ========================================= GET ======================================================

async function listAllEpisodes() {
  const episodes = await EpisodeModel.find({});
  return episodes;
}

module.exports = {
  listAllEpisodes,
};
