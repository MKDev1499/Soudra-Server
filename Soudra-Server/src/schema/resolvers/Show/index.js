const { addShow, listShows } = require("../../../controllers/show.controllers");

const ShowResolvers = {
  Query: {
    actors: listShows,
  },
  Mutation: {
    addShow: (_, { showData }) => addShow(showData),
  },
};

module.exports = ShowResolvers;
