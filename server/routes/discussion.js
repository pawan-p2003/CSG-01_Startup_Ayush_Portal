import express from "express";
import { getDiscussions } from "../controllers/discussion.js";

const router = express.Router();

router.get("/", getDiscussions);

export default router;
