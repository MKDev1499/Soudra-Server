const Interaction = require("../models/Interaction/Interaction.model");
const Show = require("../models/Show/show.model");
const { InteractionTypeName } = require("../utils/enums");

async function getShowInteractions(showID) {
  let likes = [];
  let dislikes = [];
  const interactions = await Interaction.find({ show: showID }).populate(
    "user",
    "userName img"
  );

  interactions.forEach((interaction) => {
    if (interaction.type === InteractionTypeName.Like) {
      likes.push(interaction);
    } else if (interaction.type === InteractionTypeName.Dislike) {
      dislikes.push(interaction);
    }
  });
  return {
    likes: likes,
    dislikes: dislikes || [],
  };
}

async function getShowInteractionsCounts(showID) {
  let likes = 0;
  let dislikes = 0;
  const interactions = await Interaction.find({ show: showID }).populate(
    "user",
    "userName img"
  );

  interactions.forEach((interaction) => {
    if (interaction.type === InteractionTypeName.Like) {
      likes++;
    } else if (interaction.type === InteractionTypeName.Dislike) {
      dislikes++;
    }
  });
  return {
    likes,
    dislikes,
  };
}

function getUserInteractions(userID) {
  return Interaction.find({ user: userID })
    .populate("user", "userName img")
    .populate("show", "nameEn nameAr img");
}
function getAllInteractions() {
  return Interaction.find()
    .populate("user", "userName img")
    .populate("show", "nameEn nameAr img");
}

// Mutation functions

async function addInteraction(interactionData) {
  const { userID, showID, type } = interactionData ?? {};

  const newInteraction = await Interaction.findOneAndUpdate(
    { user: userID, show: showID },
    { type },
    { upsert: true, new: true }
  );

  if (type === InteractionTypeName.Like) {
    Show.findByIdAndUpdate(showID, {
      $addToSet: { likes: userID },
    });
  } else if (type === InteractionTypeName.Dislike) {
    Show.findByIdAndUpdate(showID, {
      $addToSet: { dislikes: userID },
    });
  }

  return newInteraction;
}

async function deleteInteraction(interactionID) {
  return Interaction.findByIdAndDelete(interactionID);
}
async function updateInteraction(interactionID, type) {
  return Interaction.findByIdAndUpdate(interactionID, { type }, { new: true })
    .populate("user", "userName img")
    .populate("show", "nameEn nameAr img");
}

module.exports = {
  getShowInteractions,
  getUserInteractions,
  getAllInteractions,
  addInteraction,
  deleteInteraction,
  updateInteraction,
  getShowInteractionsCounts,
};
