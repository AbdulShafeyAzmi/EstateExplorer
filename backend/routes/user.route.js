import express from "express";
import { handleUpdateUser, test } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, handleUpdateUser);

export default router;
