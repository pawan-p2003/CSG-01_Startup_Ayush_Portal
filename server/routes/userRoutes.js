import express from "express";
import { changePassword, editProfile } from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

// Change Password Route
router.put("/change-password", authMiddleware, changePassword);

// Edit Profile Route (with Image Upload)
router.put(
  "/edit-profile",
  authMiddleware,
  upload.single("image"),
  editProfile
);

export default router;
