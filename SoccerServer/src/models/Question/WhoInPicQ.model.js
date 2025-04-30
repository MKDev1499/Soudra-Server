import mongoose from "mongoose";
import ModelNames from "../ModelNames.js";

const whoInPicQSchema = new mongoose.Schema(
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
    correctAnswers: [
      {
        type: mongoose.Types.ObjectId,
        ref: ModelNames.Answer,
      },
    ],
    section: {
      type: mongoose.Types.ObjectId,
      ref: ModelNames.Section,
    },
  },
  {
    timestamps: true,
  }
);

const WhoInPicQ = mongoose.model(ModelNames.WhoInPicQ, whoInPicQSchema);

export default WhoInPicQ;
