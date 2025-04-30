import mongoose from "mongoose";
import ModelNames from "../ModelNames.js";

const questionTypeSchema = new mongoose.Schema(
  {
    label: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const QuestionType = mongoose.model(
  ModelNames.QuestionType,
  questionTypeSchema
);

export default QuestionType;
