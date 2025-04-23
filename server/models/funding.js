import mongoose from "mongoose";

const fundingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    amount: { type: String, required: true },
    eligibility: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Assuming a User model exists
  },
  { timestamps: true }
);

const Funding = mongoose.model("Funding", fundingSchema);
export default Funding;
