import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./app.js";

dotenv.config({ path: "./.env" });

const startServer = async () => {
  try {
    await connectDB();

    app.on("error", (error) => {
      console.error("Server error:", error);
      throw error;
    });

    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};

startServer();
