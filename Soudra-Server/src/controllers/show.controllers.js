const Show = require("../models/Show/show.model");

async function listShows() {
  const shows = await Show.find({}).populate("staring");
  return shows;
}

async function addShow(showData) {
  const { nameEn, nameAr, img, descriptionEn, descriptionAr, staring, actors } =
    showData ?? {};
  const newShow = new Show({
    nameEn,
    img,
    nameAr,
    descriptionEn,
    descriptionAr,
    staring,
    actors,
  });
  return newShow.save();
}

module.exports = {
  addShow,
  listShows,
};
