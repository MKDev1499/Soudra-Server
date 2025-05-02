const {
  addShow,
  listShows,
  addEpisodes,
} = require("../../../controllers/show.controllers");

const ShowResolvers = {
  Query: {
    shows: listShows,
  },
  Mutation: {
    addShow: (_, { showData }) => addShow(showData),
    addEpisodesToShow: (_, { data }) => addEpisodes(data),
  },
};

module.exports = ShowResolvers;
