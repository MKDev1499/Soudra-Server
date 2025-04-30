import express from "express";
import {
  listQuestionTypes,
  addQuestionType,
  updateQuestionType,
  addWhoInPicQ,
  listWhoInPicQs,
  addBankQ,
} from "../controllers/question.contoller.js";

const questionRouter = express.Router();

// Add an question
questionRouter.post("/", (req, res) => {
  // Call the addAnswer controller function
  addAnswer(req, res);
});
// List answers
questionRouter.get("/", (req, res) => {
  // Call the listAnswers controller function
  listAnswers(req, res);
});

// Update an question
questionRouter.put("/:id", (req, res) => {
  // Call the updateAnswer controller function
  updateAnswer(req, res);
});

// Add an question type
questionRouter.post("/types", (req, res) => {
  // Call the addQuestionType controller function
  addQuestionType(req, res);
});

// Update an question type
questionRouter.put("/types/:id", (req, res) => {
  // Call the updateQuestionType controller function
  updateQuestionType(req, res);
});

// List question types
questionRouter.get("/types", (req, res) => {
  // Call the listQuestionTypes controller function
  listQuestionTypes(req, res);
});

// Add a who-in-pic question
questionRouter.post("/whoInPic", (req, res) => {
  addWhoInPicQ(req, res);
});

questionRouter.post("/bank", (req, res) => {
  addBankQ(req, res);
});

// List who-in-pic questions
questionRouter.get("/whoInPic", (req, res) => {
  listWhoInPicQs(req, res);
});

export default questionRouter;
