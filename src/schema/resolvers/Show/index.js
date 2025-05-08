const {
  addShow,
  listShows,
  addEpisodes,
  getShowDetails,
  addActorToShow,
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
  },
};

module.exports = ShowResolvers;
