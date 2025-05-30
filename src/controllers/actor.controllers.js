const { default: axios } = require("axios");
const ActorModel = require("../models/Actor/actor.model");
const ShowModel = require("../models/Show/show.model");

// ========================================= GET ======================================================

async function listAllActors() {
  const actors = await ActorModel.find({});
  return actors;
}

async function getActorShows(actorID) {
  const shows = await ShowModel.find({ actors: actorID })
    .populate("staring episodes")
    .sort({ createdAt: -1 });
  return shows;
}

// ========================================= POST ======================================================

async function addActor(actorData) {
  const { nameEn, nameAr, img, plot } = actorData ?? {};
  const newActor = new ActorModel({
    nameEn,
    img,
    nameAr,
    plot,
  });
  return newActor.save();
}

async function addActorByTMDB(actorID) {
  const url = `https://api.themoviedb.org/3/person/${actorID}?language=ar`;
  const { data } = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${process.env.TMDB}`,
    },
  });

  const imgPath = "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/";
  const { biography, gender, name, profile_path } = data ?? {};
  const actorData = {
    nameEn: name,
    nameAr: name,
    plot: biography,
    img: gender === 2 ? imgPath + profile_path : null,
  };
  const actor = new ActorModel(actorData);
  return actor.save();
}

module.exports = {
  listAllActors,
  addActor,
  addActorByTMDB,
  getActorShows,
};
