import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postController.js";
const router = express.Router();

// Get all posts
router.get("/", getPosts);

// Get single post
router.get("/:id", getPosts);

// Create a new post
router.post("/", createPost);

// Update post
router.put("/:id", updatePost);

// Delete Post
router.delete("/:id", deletePost);

export default router;
