const Episode = require("../models/Episode/episode.model");
const Show = require("../models/Show/show.model");

async function listShows() {
  const shows = await Show.find({})
    .sort({ createdAt: -1 })
    .populate("staring episodes actors");
  return shows;
}

async function getShowDetails(showID) {
  const show = await Show.findById(showID).populate("staring episodes actors");
  return show;
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

async function addActorToShow(data) {
  const { showID, actorID } = data ?? {};
  return await Show.findByIdAndUpdate(showID, {
    $addToSet: {
      actors: actorID,
    },
  }).populate("actors");
}

async function deleteShow(showID) {
  return await Show.findByIdAndDelete(showID);
}

module.exports = {
  addShow,
  listShows,
  addEpisodes,
  getShowDetails,
  addActorToShow,
  deleteShow,
};
