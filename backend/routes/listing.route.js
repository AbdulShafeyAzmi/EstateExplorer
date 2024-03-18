import express from "express";
import {
  handleCreateListing,
  handleDeleteListing,
  handleGetListing,
  handleUpdateListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, handleCreateListing);
router.delete("/delete/:id", verifyToken, handleDeleteListing);
router.post("/update/:id", verifyToken, handleUpdateListing);
router.get("/get/:id", handleGetListing);
export default router;
