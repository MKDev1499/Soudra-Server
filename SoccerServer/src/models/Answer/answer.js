import mongoose from "mongoose";

const Schema = mongoose.Schema;

const answerSchema = new Schema(
  {
    labelAr: String,
    labelEn: String,
    img: String,
    type: {
      type: mongoose.Types.ObjectId,
      ref: "AnswerType",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Answer", answerSchema);
