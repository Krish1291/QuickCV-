import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

// ✅ Allowed origins for local + deployed frontend
const allowedOrigins = [
  "http://localhost:5173", // Local dev (Vite)
  process.env.FRONTEND_URL, // Deployed frontend (from .env)
];

// ✅ CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn("❌ Blocked by CORS:", origin);
        callback(null, false); // don’t crash server
      }
    },
    credentials: true,
  })
);

// ✅ Routes
app.use("/api/auth", authRoutes);

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// ✅ Root route
app.get("/", (req, res) => {
  res.json({ message: "Backend running successfully 🚀" });
});

// ✅ Global error handler (better debug in local & Vercel logs)
app.use((err, req, res, next) => {
  console.error("🔥 Server Error:", err.message);
  res.status(500).json({ error: err.message });
});

// ✅ Server listen (only when not on Vercel serverless)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

export default app;
