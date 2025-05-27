const mongoose = require("mongoose");
const ModelNames = require("../ModelNames.js");

const Schema = mongoose.Schema;

const actorSchema = new Schema(
  {
    nameEn: String,
    nameAr: String,
    img: String,
    plot: String,
    favourites: [
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

actorSchema.virtual("id").get(function () {
  return this._id.toString();
});

// Ensure virtual fields are included when converting documents to JSON
actorSchema.set("toJSON", {
  virtuals: true,
});

const Actor = mongoose.model(ModelNames.Actor, actorSchema);
module.exports = Actor;
