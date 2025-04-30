const mongoose = require("mongoose");
const ModelNames = require("../ModelNames.js");
const Actor = require("../Actor/actor.model.js");
const Episode = require("../Episode/episode.model.js");

const Schema = mongoose.Schema;

const showSchema = new Schema(
  {
    nameEn: String,
    nameAr: String,
    descriptionEn: String,
    descriptionAr: String,
    img: String,
    staring: {
      type: mongoose.Schema.ObjectId,
      ref: ModelNames.Actor,
    },
    actors: [
      {
        type: mongoose.Schema.ObjectId,
        ref: ModelNames.Actor,
      },
    ],
    episodes: [
      {
        type: mongoose.Schema.ObjectId,
        ref: ModelNames.Episode,
        default: [],
      },
    ],
    rate: {
      type: Number,
      default: 0,
    },
    noOfListens: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

showSchema.virtual("id").get(function () {
  return this._id.toString();
});

// Ensure virtual fields are included when converting documents to JSON
showSchema.set("toJSON", {
  virtuals: true,
});

const Show = mongoose.model(ModelNames.Show, showSchema);
module.exports = Show;
