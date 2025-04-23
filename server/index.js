import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import fundingRoutes from "./routes/funding.js";
import mentorRoutes from "./routes/mentor.js";

const app = express();
dotenv.config();

//middlewares
app.use(express.json());

const PORT = process.env.PORT || 6000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to Database");
  } catch (e) {
    throw e;
  }
};

mongoose.connection.on("connected", () => {
  console.log("mongodb connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});

//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/funding", fundingRoutes);
app.use("/api/mentors", mentorRoutes);

app.listen(PORT, () => {
  connect();
  console.log("Server listening on PORT: ", PORT);
});
