import express from "express";
import cors from "cors";

// Initialize Express app
const app = express();

// Essential Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", (await import("./routes/health.routes.js")).default); // Health check route

export default app;