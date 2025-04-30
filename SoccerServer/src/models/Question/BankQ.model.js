import mongoose from "mongoose";
import ModelNames from "../ModelNames.js";

const bankQSchema = new mongoose.Schema(
  {
    labelEn: {
      type: String,
      required: true,
    },
    labelAr: {
      type: String,
      required: true,
    },
    correctAnswer: {
      type: mongoose.Types.ObjectId,
      ref: ModelNames.Answer,
    },
    section: {
      type: mongoose.Types.ObjectId,
      ref: ModelNames.Section,
    },
  },
  {
    timestamps: true,
  }
);

const BankQ = mongoose.model(ModelNames.BankQ, bankQSchema);

export default BankQ;
