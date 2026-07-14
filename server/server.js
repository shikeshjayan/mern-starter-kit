import app from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";

// Load environment variables
dotenv.config();

// Connect to the database
await connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});