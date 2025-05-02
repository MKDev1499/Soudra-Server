const Episode = require("../models/Episode/episode.model");
const Show = require("../models/Show/show.model");

async function listShows() {
  const shows = await Show.find({}).populate("staring episodes");
  return shows;
}

async function addShow(showData) {
  const {
    nameEn,
    nameAr,
    img,
    descriptionEn,
    descriptionAr,
    staring,
    actors,
    releaseYear,
  } = showData ?? {};
  const newShow = new Show({
    nameEn,
    img,
    nameAr,
    descriptionEn,
    descriptionAr,
    staring,
    actors,
    releaseYear,
  });
  return newShow.save();
}

async function addEpisodes(data) {
  const { showID, episodes } = data ?? {};

  const newEpisodesData = episodes.map((e) => ({
    nameEn: e.name,
    nameAr: e.name,
    url: e.url,
  }));
  const newEpisodes = await Episode.insertMany(newEpisodesData);
  const episodesIDs = newEpisodes.map((e) => e._id);

  return await Show.findByIdAndUpdate(showID, {
    $addToSet: {
      episodes: episodesIDs,
    },
  });
}

module.exports = {
  addShow,
  listShows,
  addEpisodes,
};
