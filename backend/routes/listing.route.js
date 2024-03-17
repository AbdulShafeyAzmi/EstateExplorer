import express from "express";
import {
  handleCreateListing,
  handleDeleteListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, handleCreateListing);
router.delete("/delete/:id", verifyToken, handleDeleteListing);

export default router;
