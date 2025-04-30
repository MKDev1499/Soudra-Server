const { addShow, listShows } = require("../../../controllers/show.controllers");

const ShowResolvers = {
  Query: {
    shows: listShows,
  },
  Mutation: {
    addShow: (_, { showData }) => addShow(showData),
  },
};

module.exports = ShowResolvers;
