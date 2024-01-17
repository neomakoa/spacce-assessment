import mongoose from "../../middleware/connection.js";

const Questionnaire = new mongoose.Schema({
  question: { type: String },
  answer: { type: String },
  options: [{ type: String }],
});

export default mongoose.model("Questionnaire", Questionnaire);
