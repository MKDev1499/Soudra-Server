const {
  listAllActors,
  addActor,
  addActorByTMDB,
  getActorShows,
} = require("../../../controllers/actor.controllers");

const ActorResolvers = {
  Query: {
    actors: listAllActors,
    actorShows: (_, { actorID }) => getActorShows(actorID),
  },
  Mutation: {
    addActor: (_, { actorData }) => addActor(actorData),
    addActorByTMDB: (_, { actorID }) => addActorByTMDB(actorID),
  },
};

module.exports = ActorResolvers;
