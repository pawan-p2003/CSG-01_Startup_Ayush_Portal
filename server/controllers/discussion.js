import Discussion from "../models/discussion.js";

export const getDiscussions = async (req, res) => {
  try {
    const discussions = await Discussion.find();
    res.json(discussions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
