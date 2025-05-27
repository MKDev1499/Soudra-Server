const mongoose = require("mongoose");
const ModelNames = require("../ModelNames.js");
const { InteractionTypeName } = require("../../utils/enums.js");

const Schema = mongoose.Schema;

const interactionSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: ModelNames.User,
    },
    show: {
      type: mongoose.Schema.Types.ObjectId,
      ref: ModelNames.Show,
    },
    type: {
      type: String,
      enum: [InteractionTypeName.Like, InteractionTypeName.Dislike],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

interactionSchema.virtual("id").get(function () {
  return this._id.toString();
});

// Ensure virtual fields are included when converting documents to JSON
interactionSchema.set("toJSON", {
  virtuals: true,
});

const Interaction = mongoose.model(ModelNames.Interaction, interactionSchema);
module.exports = Interaction;
