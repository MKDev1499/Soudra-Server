const ActorModel = require("../models/Actor/actor.model");
const ShowModel = require("../models/Show/show.model");

async function generalSearch(query) {
  const searchQuery = {
    $or: [
      { nameEn: { $regex: query, $options: "i" } },
      { nameAr: { $regex: query, $options: "i" } },
    ],
  };

  const shows = await ShowModel.find(searchQuery)
    .populate("staring episodes")
    .sort({ createdAt: -1 });

  const actors = await ActorModel.find(searchQuery).sort({ createdAt: -1 });

  return {
    shows,
    actors,
  };
}

module.exports = {
  generalSearch,
};
