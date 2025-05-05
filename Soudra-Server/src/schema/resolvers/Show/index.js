const {
  addShow,
  listShows,
  addEpisodes,
  getShowDetails,
} = require("../../../controllers/show.controllers");

const ShowResolvers = {
  Query: {
    shows: listShows,
    show: (_, { showID }) => getShowDetails(showID),
  },
  Mutation: {
    addShow: (_, { showData }) => addShow(showData),
    addEpisodesToShow: (_, { data }) => addEpisodes(data),
  },
};

module.exports = ShowResolvers;
