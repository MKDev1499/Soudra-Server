const admin = require("firebase-admin");
const serviceAccount = require("./private.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://soccer-rush-8938d-default-rtdb.firebaseio.com/", // Replace <YOUR_PROJECT_ID> with your actual project ID
});

module.exports = admin.database();
