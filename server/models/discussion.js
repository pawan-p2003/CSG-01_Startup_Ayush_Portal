import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const Discussion = mongoose.model("Discussion", discussionSchema);

export default Discussion;
