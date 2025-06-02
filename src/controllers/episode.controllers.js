const EpisodeModel = require("../models/Episode/episode.model");
const ShowModel = require("../models/Show/show.model");

// ========================================= GET ======================================================

async function listAllEpisodes() {
  const episodes = await EpisodeModel.find({});
  return episodes;
}

// ========================================= POST ======================================================

async function addListenersToEpisode(data) {
  const { showID, episodeID, userID } = data ?? {};

  // Validate essential inputs
  if (!episodeID || !userID) {
    throw new Error("episodeID and userID are required.");
  }
  // Consider if showID is also mandatory, or if incrementing listen count is optional.
  // For this solution, if showID is missing, the listen count won't be incremented.

  let episode;
  let isNewListen = false;

  // Step 1: Attempt to find the episode and add the listener IF the listener isn't already present.
  // We use a conditional update with `findOneAndUpdate`.
  // The query part `{ _id: episodeID, listeners: { $ne: userID } }` is key:
  // It tries to find an episode that matches episodeID AND where userID is NOT in the listeners array.
  const updatedEpisodeWithNewListener = await EpisodeModel.findOneAndUpdate(
    { _id: episodeID, listeners: { $ne: userID } }, // Condition: Episode exists AND user is NOT a listener
    { $addToSet: { listeners: userID } }, // Action: Add userID to the listeners array
    { new: true } // Options: Return the modified document
  );

  if (updatedEpisodeWithNewListener) {
    // If this block is executed, it means:
    // 1. The episode was found.
    // 2. The userID was NOT in the listeners array before this operation.
    // 3. The userID has now been successfully added.
    // This constitutes a "new listen".
    episode = updatedEpisodeWithNewListener;
    isNewListen = true;
  } else {
    // If `updatedEpisodeWithNewListener` is null, it means either:
    // a) The episode with `episodeID` was not found.
    // b) The episode was found, but `userID` was ALREADY in its `listeners` array (so the `$ne` condition failed).
    // We still need to fetch the episode to return it (if it exists) or throw if not found.
    episode = await EpisodeModel.findById(episodeID);
    if (!episode) {
      throw new Error("Episode not found");
    }
    // If episode exists here, it means the listener was already present. isNewListen remains false.
  }

  // Step 2: If it was a new listen and showID is provided, increment the show's listen count.
  if (isNewListen && showID) {
    try {
      await ShowModel.findByIdAndUpdate(
        showID,
        { $inc: { noOfListens: 1 } },
        { new: true } // `new: true` returns the updated document, though its value isn't directly used here.
      );
    } catch (err) {
      console.error(
        `Error incrementing noOfListens for show ${showID} after new listen on episode ${episodeID}:`,
        err
      );
      // Decide on error handling strategy:
      // - Log and continue (current approach): The episode listener was added, but show count failed.
      // - Rethrow the error: If updating the show count is critical.
      // - Implement compensation logic / transactions if atomicity is required.
    }
  } else if (isNewListen && !showID) {
    console.warn(
      `New listen detected for episode ${episodeID}, but showID was not provided. Cannot increment listen count.`
    );
  }

  // Step 3: Return the episode document.
  // If the episode wasn't found in the first place (and not caught by the second EpisodeModel.findById),
  // `episode` would be null here, but the `!episode` check above handles it.
  return episode;
}

module.exports = {
  listAllEpisodes,
  addListenersToEpisode,
};
