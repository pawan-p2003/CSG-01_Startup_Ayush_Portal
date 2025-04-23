import Funding from "../models/funding.js";

// Get all funding opportunities
export const getAllFunding = async (req, res) => {
  try {
    const fundings = await Funding.find();
    res.status(200).json(fundings);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching funding opportunities", error });
  }
};

// Apply for a funding opportunity
export const applyForFunding = async (req, res) => {
  try {
    const { title, applicantId } = req.body;
    const funding = await Funding.findOne({ title });

    if (!funding) {
      return res.status(404).json({ message: "Funding opportunity not found" });
    }

    // Create new funding application
    const newApplication = new Funding({
      title: funding.title,
      amount: funding.amount,
      eligibility: funding.eligibility,
      applicant: applicantId,
      status: "Pending",
    });

    await newApplication.save();
    res
      .status(201)
      .json({ message: "Application submitted successfully", newApplication });
  } catch (error) {
    res.status(500).json({ message: "Error applying for funding", error });
  }
};

// Get funding applications by user
export const getUserFundingStatus = async (req, res) => {
  try {
    const { userId } = req.params;
    const applications = await Funding.find({ applicant: userId });

    if (!applications.length) {
      return res
        .status(404)
        .json({ message: "No funding applications found for this user" });
    }

    res.status(200).json(applications);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching application status", error });
  }
};
