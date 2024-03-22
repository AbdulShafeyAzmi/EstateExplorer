import express from "express";
import {
  handleCreateListing,
  handleDeleteListing,
  handleGetListing,
  handleGetListings,
  handleUpdateListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.post("/create", verifyToken, handleCreateListing);
router.delete("/delete/:id", verifyToken, handleDeleteListing);
router.post("/update/:id", verifyToken, handleUpdateListing);
router.get("/get/:id", handleGetListing);
router.get("/get", handleGetListings);
export default router;
