import express from "express";
import {
  getAllMentors,
  getMentorById,
  searchMentors,
} from "../controllers/mentor.js";

const router = express.Router();

// Route to get all mentors
router.get("/", getAllMentors);

// Route to get a mentor by ID
router.get("/:id", getMentorById);

// Route to search mentors by name or expertise
router.get("/search", searchMentors);

export default router;
