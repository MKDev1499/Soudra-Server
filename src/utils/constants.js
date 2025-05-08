const translationServer = "http://localhost:4000/api/v1";
const ansTextTypeID = "66d1a3b63af67f00a369ee49";
const ansTeamTypeID = "675ad797eea991e2f7dc4b5d";
const ansPlayerTypeID = "66d1a750194c29b4bdcb03c0";
const quizlandMediaURL = "https://media.quizland.net/questions/cover";
const soccer365TeamMediaURL =
  "https://imagecache.365scores.com/image/upload/v3/Competitors";
const soccer365PlayerMediaURL =
  "https://imagecache.365scores.com/image/upload/v3/Athletes";
const sectionsIDs = {
  whoInPicQ: "66d25c5743c4e698c78f35a3",
  bankQ: "66d25d8943c4e698c78f35a5",
  guessPlayerQ: "66d25f4843c4e698c78f35a8",
};

const sectionsEnum = {
  whoInPicQ: "Who in the picture?",
  bankQ: "Bank",
  guessPlayerQ: "Guess the player",
  multipleChoiceQ: "Multiple Choice",
};

const ErrorCodes = {
  DuplocateKey: 11000,
};

const soccer365SquadURL =
  "https://webws.365scores.com/web/squads/?competitors=";

module.exports = {
  translationServer,
  ansTextTypeID,
  ansTeamTypeID,
  quizlandMediaURL,
  soccer365TeamMediaURL,
  sectionsIDs,
  ansPlayerTypeID,
  soccer365PlayerMediaURL,
  soccer365SquadURL,
  sectionsEnum,
  ErrorCodes,
};
