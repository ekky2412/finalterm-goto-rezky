import express from "express";

import { addComment, getComments } from "../controllers/rest/comments.js";
import { getProducts } from "../controllers/rest/products.js";
import { getVideoThumbnail } from "../controllers/rest/videos.js";
const router = express.Router();

router.get("/videos/thumbnail", getVideoThumbnail);
router.get("/products/:id", getProducts);
router.get("/comments/:id", getComments);
router.post("/comments/:id", addComment);

export default router;
