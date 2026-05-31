import "dotenv/config";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import process from "node:process";
import { createPost, deletePost, getPosts, likePost } from "./posts-api.js";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/posts", async (_req, res, next) => {
  try {
    const posts = await getPosts();
    res.status(200).json({ posts });
  } catch (error) {
    next(error);
  }
});

app.post("/posts", async (req, res, next) => {
  try {
    const newPost = await createPost(req.body);
    res.status(201).json({ post: newPost });
  } catch (error) {
    next(error);
  }
});

app.delete("/posts/:id", async (req, res, next) => {
  try {
    const deletedPost = await deletePost(req.params.id);

    if (!deletedPost) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    next(error);
  }
});

app.patch("/posts/:id/like", async (req, res, next) => {
  try {
    const updatedPost = await likePost(req.params.id);

    if (!updatedPost) {
      res.status(404).json({ message: "Post not found" });
      return;
    }

    res.status(200).json({ post: updatedPost });
  } catch (error) {
    next(error);
  }
});

// Express only treats this as error middleware when it has four params.
app.use((error, _req, res, next) => {
  void next;
  console.error(error);
  res.status(500).json({ message: "Internal server error" });
});

async function startServer() {
  await mongoose.connect(process.env.MONGO_URI);
  app.listen(port, () => {
    console.log(`Posts API running at http://localhost:${port}`);
  });
}

startServer().catch((error) => {
  console.error("Failed to start server", error);
  process.exit(1);
});
