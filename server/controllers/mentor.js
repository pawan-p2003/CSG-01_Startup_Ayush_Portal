import Mentor from "../models/mentor.js";

// Get all mentors
export const getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching mentors", error });
  }
};

// Get a specific mentor by ID
export const getMentorById = async (req, res) => {
  try {
    const { id } = req.params;
    const mentor = await Mentor.findById(id);

    if (!mentor) {
      return res.status(404).json({ message: "Mentor not found" });
    }

    res.status(200).json(mentor);
  } catch (error) {
    res.status(500).json({ message: "Error fetching mentor", error });
  }
};

// Search mentors by name or expertise
export const searchMentors = async (req, res) => {
  try {
    const { query } = req.query;

    const mentors = await Mentor.find({
      $or: [
        { name: { $regex: query, $options: "i" } },
        { expertise: { $regex: query, $options: "i" } },
      ],
    });

    res.status(200).json(mentors);
  } catch (error) {
    res.status(500).json({ message: "Error searching mentors", error });
  }
};
