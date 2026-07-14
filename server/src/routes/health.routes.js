import { Router } from "express";
const router = Router();

// Health Check Endpoint
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

export default router;