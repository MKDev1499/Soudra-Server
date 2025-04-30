import mongoose from "mongoose";
const Schema = mongoose.Schema;
const answerTypeSchema = new Schema({
    label: String,
}, {
    timestamps: true,
});
export default mongoose.model("AnswerType", answerTypeSchema);
