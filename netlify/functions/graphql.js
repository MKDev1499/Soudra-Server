// netlify/functions/graphql.js

// 1. Import necessary serverless wrapper
const serverlessExpress = require("aws-serverless-express");
const { createServer, proxy } = serverlessExpress;

// 2. Import your original server dependencies
// Adjust paths based on the new location of this file
// If this file is `netlify/functions/graphql.js` and your original files are in `src/`
// then you'll need to go up two directories (../../) to reach 'src'.
require("dotenv").config(); // Still good practice, but Netlify handles env vars from UI
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("../../src/schema"); // Adjusted path!
const connectDB = require("../../src/utils/db"); // Adjusted path!
const { verifyToken } = require("../../src/utils/encryption"); // Adjusted path!
const cors = require("cors");

// 3. Create your Express app instance
const app = express();

// 4. Connect to database (adapted for serverless)
// It's best practice to connect outside the handler for connection reuse
// but ensure the handler waits for connection before proxying.
// We'll call connectDB() inside the handler's promise chain.
let isConnected = false; // Flag to track connection status

async function ensureDbConnection() {
  if (isConnected) {
    console.log("Using cached database connection.");
    return;
  }
  try {
    await connectDB(); // Your original connectDB function
    isConnected = true;
    console.log("New database connection established.");
  } catch (error) {
    console.error("Failed to establish database connection:", error);
    isConnected = false; // Reset status on failure
    throw error; // Re-throw to prevent function from proceeding
  }
}

// 5. Apply CORS middleware
app.use(cors());

// 6. Set up your GraphQL endpoint with context logic
app.use(
  "/graphql", // This path is *relative to your Express app*, not the Netlify URL
  graphqlHTTP((req) => {
    // Extract the token from the Authorization header
    const token = req.headers.authorization || null;
    // Decode or validate token (optional)
    let user = null;
    if (token) {
      try {
        // Remove "Bearer " prefix if present
        const cleanToken = token.startsWith("Bearer ") ? token.slice(7) : token;
        user = verifyToken(cleanToken); // Decode token
      } catch (error) {
        console.error("Invalid token:", error.message);
        // Optionally set user to null or throw an auth error
      }
    }

    return {
      schema,
      context: { user }, // Pass the decoded user or token to the context
      graphiql: true, // Set to false in production for security
      introspection: true, // Set to false in production for security
    };
  })
);

// 7. Create the serverless Express app wrapper
const server = createServer(app);

// 8. The Netlify Function handler
exports.handler = async (event, context) => {
  // Essential: Prevent Lambda from hanging if you're using callbacks for async ops
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    // Ensure database connection is ready for each invocation
    await ensureDbConnection();

    // Proxy the event to your Express app
    return proxy(server, event, context);
  } catch (error) {
    console.error("GraphQL function error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
    };
  }
};
