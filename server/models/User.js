import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    imageUrl: {
      type: String,
      default:
        "https://res.cloudinary.com/dkwxc1anx/image/upload/v1742282816/default_profile_picture_birsvl.jpg",
    },
    bio: {
      type: String,
      default: "Hi I'm the most passionate founder you'll ever meet",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
