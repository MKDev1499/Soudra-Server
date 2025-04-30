import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

import answerRoutes from "./routes/answer.routes.js"; // Ensure the file extension is correct
import questionRoutes from "./routes/questions.routes.js"; // Ensure the file extension is correct
import sectionRoutes from "./routes/sections.routes.js"; // Ensure the file extension is correct
import userRouter from "./routes/user.routes.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
dotenv.config();

mongoose.connect(process?.env?.DBConnect);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});
app.use("/answers", answerRoutes);
app.use("/questions", questionRoutes);
app.use("/sections", sectionRoutes);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
