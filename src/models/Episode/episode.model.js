const mongoose = require("mongoose");
const ModelNames = require("../ModelNames.js");

const Schema = mongoose.Schema;

const episodeSchema = new Schema(
  {
    nameEn: String,
    nameAr: String,
    url: String,
    listeners: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: ModelNames.User,
      },
    ],
  },
  {
    timestamps: true,
  }
);

episodeSchema.virtual("id").get(function () {
  return this._id.toString();
});

// Ensure virtual fields are included when converting documents to JSON
episodeSchema.set("toJSON", {
  virtuals: true,
});

const Episode = mongoose.model(ModelNames.Episode, episodeSchema);
module.exports = Episode;
