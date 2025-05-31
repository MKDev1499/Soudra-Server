const {
  addInteraction,
  deleteInteraction,
  updateInteraction,
  getShowInteractions,
  getAllInteractions,
  getUserInteractions,
} = require("../../../controllers/interaction.controller");

const CommentResolver = {
  Query: {
    getShowInteractions: (_, { showID }) => getShowInteractions(showID),
    getUserIntreactions: (_, { userID }) => getUserInteractions(userID),
    getAllInteractions: () => getAllInteractions(),
  },
  Mutation: {
    addInteraction: (_, { interactionData }) => addInteraction(interactionData),
    deleteInteraction: (_, { interactionID }) =>
      deleteInteraction(interactionID),
    updateInteraction: (_, { interactionID, type }) =>
      updateInteraction(interactionID, type),
  },
};

module.exports = CommentResolver;
