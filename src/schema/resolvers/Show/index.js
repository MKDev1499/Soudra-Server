const {
  addShow,
  listShows,
  addEpisodes,
  getShowDetails,
  addActorToShow,
  deleteShow,
} = require("../../../controllers/show.controllers");

const ShowResolvers = {
  Query: {
    shows: listShows,
    show: (_, { showID }) => getShowDetails(showID),
  },
  Mutation: {
    addShow: (_, { showData }) => addShow(showData),
    addEpisodesToShow: (_, { data }) => addEpisodes(data),
    addActorToShow: (_, { showID, actorID }) =>
      addActorToShow({ showID, actorID }),
    deleteShow: async (_, { showID }) => deleteShow(showID),
  },
};

module.exports = ShowResolvers;
