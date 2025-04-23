import User from "../models/User.js";
import cloudinary from "../config/cloudinary.js";
import bcrypt from "bcryptjs";
//change password
export const changePassword = async (req, res) => {
  try {
    const newPassword = req.body;
    const user = await User.findById(req.user.id);

    if (!user) return res.status(404).json({ message: "User not found" });

    // Hash new password and save
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword.toString(), salt);
    await user.save();

    res.status(200).json({ message: "Password changed successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Edit Profile (Supports Image Upload)
export const editProfile = async (req, res) => {
  try {
    const { username, email, bio } = req.body;
    let imageUrl;

    // Upload image to Cloudinary if provided
    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload_stream(
        { folder: "profile_pictures" }, // Cloudinary folder
        async (error, result) => {
          if (error)
            return res
              .status(500)
              .json({ message: "Image upload failed", error });

          imageUrl = result.secure_url;

          // Update user profile
          const updatedFields = {};
          if (username) updatedFields.username = username;
          if (email) updatedFields.email = email;
          if (bio) updatedFields.bio = bio;
          if (imageUrl) updatedFields.imageUrl = imageUrl;

          const user = await User.findByIdAndUpdate(
            req.user.id,
            updatedFields,
            {
              new: true,
              runValidators: true,
            }
          );

          if (!user) return res.status(404).json({ message: "User not found" });

          res
            .status(200)
            .json({ message: "Profile updated successfully", user });
        }
      );

      uploadResult.end(req.file.buffer); // Pass file buffer to Cloudinary
    } else {
      // If no image, update profile without uploading
      const updatedFields = { username, email, bio };
      const user = await User.findByIdAndUpdate(req.user.id, updatedFields, {
        new: true,
        runValidators: true,
      });

      if (!user) return res.status(404).json({ message: "User not found" });

      res.status(200).json({ message: "Profile updated successfully", user });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
