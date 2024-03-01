import express from "express";
import {
  handleDeleteUser,
  handleUpdateUser,
  test,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, handleUpdateUser);
router.delete("/delete/:id", verifyToken, handleDeleteUser);

export default router;
