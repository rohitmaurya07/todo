// index.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import todoRoute from "./routes/todoRoutes.js";
import authRoute from "./routes/authRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// ✅ Routes
app.use("/api/todos", todoRoute);
app.use("/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello ji 👋 Server is working fine on Vercel!");
});

// ❌ Don't use app.listen on Vercel
export default app;
