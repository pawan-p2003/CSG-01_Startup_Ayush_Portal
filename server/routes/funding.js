import express from "express";
import {
  getAllFunding,
  applyForFunding,
  getUserFundingStatus,
} from "../controllers/funding.js";

const router = express.Router();

// Route to get all available funding opportunities
router.get("/", getAllFunding);

// Route to apply for a funding opportunity
router.post("/apply", applyForFunding);

// Route to get user-specific funding application status
router.get("/status/:userId", getUserFundingStatus);

export default router;
