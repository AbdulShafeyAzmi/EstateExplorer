import express from "express";
import { handleSignin, handleSignup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", handleSignup);
router.post("/signin", handleSignin);
export default router;
