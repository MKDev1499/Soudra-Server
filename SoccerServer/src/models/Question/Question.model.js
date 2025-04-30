import mongoose from "mongoose";
import ModelNames from "../ModelNames.js";

const Schema = mongoose.Schema;

const questionSchema = new Schema(
  {
    labelEn: {
      type: String,
      required: true,
    },
    labelAr: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(ModelNames.Question, questionSchema);
