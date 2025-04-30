import mongoose from "mongoose";
import ModelNames from "../ModelNames.js";

const Schema = mongoose.Schema;

const sectionSchema = new Schema(
  {
    labelEn: {
      type: String,
      required: true,
    },
    labelAr: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
    },
    whoInPicQ: [
      {
        type: mongoose.Types.ObjectId,
        ref: ModelNames.WhoInPicQ,
      },
    ],
    bankQ: [
      {
        type: mongoose.Types.ObjectId,
        ref: ModelNames.BankQ,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(ModelNames.Section, sectionSchema);
