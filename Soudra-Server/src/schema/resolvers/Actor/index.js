const {
  listAllActors,
  addActor,
  addActorByTMDB,
} = require("../../../controllers/actor.controllers");

const ActorResolvers = {
  Query: {
    actors: listAllActors,
  },
  Mutation: {
    addActor: (_, { actorData }) => addActor(actorData),
    addActorByTMDB: (_, { actorID }) => addActorByTMDB(actorID),
  },
};

module.exports = ActorResolvers;
