import express from "express";
import {
  addAnswer,
  updateAnswer,
  addAnswerType,
  updateAnswerType,
  listAnswerTypes,
  listAnswers,
} from "../controllers/answer.controller.js";

const answerRouter = express.Router();

// Add an answer
answerRouter.post("/", (req, res) => {
  // Call the addAnswer controller function
  addAnswer(req, res);
});
// List answers
answerRouter.get("/", (req, res) => {
  // Call the listAnswers controller function
  listAnswers(req, res);
});

// Update an answer
answerRouter.put("/:id", (req, res) => {
  // Call the updateAnswer controller function
  updateAnswer(req, res);
});

// Add an answer type
answerRouter.post("/types", (req, res) => {
  // Call the addAnswerType controller function
  addAnswerType(req, res);
});

// Update an answer type
answerRouter.put("/types/:id", (req, res) => {
  // Call the updateAnswerType controller function
  updateAnswerType(req, res);
});

// List answer types
answerRouter.get("/types", (req, res) => {
  // Call the listAnswerTypes controller function
  listAnswerTypes(req, res);
});

export default answerRouter;
