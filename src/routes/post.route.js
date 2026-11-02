import { Router } from "express";
import {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
} from "../controllers/post.controller.js";

const router = Router();

router.route("/create").post(createPost);
router.route("/getPosts").get(getPosts);
router.route("/:id").get(getPostById).patch(updatePost).delete(deletePost);

export default router;
