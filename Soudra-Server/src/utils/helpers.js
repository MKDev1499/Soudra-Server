const axios = require("axios");
const { translationServer } = require("./constants.js");

async function translator(q, targetLang = "en") {
  const serverURL =
    targetLang === "ar"
      ? `${translationServer}/en/ar`
      : `${translationServer}/ar/en`;
  const query = q.replace(/\//g, "-");
  const transURL = `${serverURL}/${query}`;

  const { data } = await axios(transURL);
  const { translation } = data ?? {};
  return translation;
}

function shuffleArray(array) {
  const shuffled = [...array]; // Create a copy to keep the original array intact
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index between 0 and i
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
  }
  return shuffled;
}

module.exports = { translator, shuffleArray };
