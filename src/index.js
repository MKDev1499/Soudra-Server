require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const connectDB = require("./utils/db");
const { verifyToken } = require("./utils/encryption");
const cors = require("cors");

const app = express();
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP((req) => {
    // Extract the token from the Authorization header
    const token = req.headers.authorization || null;
    // Decode or validate token (optional)
    let user = null;
    if (token) {
      try {
        user = verifyToken(token); // Decode token
      } catch (error) {
        console.error("Invalid token:", error.message);
      }
    }

    return {
      schema,
      context: { user }, // Pass the decoded user or token to the context
      graphiql: true,
      introspection: true,
    };
  })
);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`GraphQL server running at http://localhost:${PORT}/graphql`);
});
