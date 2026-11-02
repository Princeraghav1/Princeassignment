import express from "express";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";

const app = express();

// parse incoming JSON request bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

// routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

export default app;
