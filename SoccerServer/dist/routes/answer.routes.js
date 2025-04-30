import express from "express";
import { addAnswer, updateAnswer, addAnswerType, updateAnswerType, listAnswerTypes, listAnswers, } from "../controllers/answer.controller";
const answerRouter = express.Router();
// Add an answer
answerRouter.post("/answers", (req, res) => {
    // Call the addAnswer controller function
    addAnswer(req, res);
});
// Update an answer
answerRouter.put("/answers/:id", (req, res) => {
    // Call the updateAnswer controller function
    updateAnswer(req, res);
});
// Add an answer type
answerRouter.post("/answer-types", (req, res) => {
    // Call the addAnswerType controller function
    addAnswerType(req, res);
});
// Update an answer type
answerRouter.put("/answer-types/:id", (req, res) => {
    // Call the updateAnswerType controller function
    updateAnswerType(req, res);
});
// List answers
answerRouter.get("/answers", (req, res) => {
    // Call the listAnswers controller function
    listAnswers(req, res);
});
// List answer types
answerRouter.get("/answer-types", (req, res) => {
    // Call the listAnswerTypes controller function
    listAnswerTypes(req, res);
});
export default answerRouter;
