import express from "express";
import {
  handleGoogle,
  handleSignin,
  handleSignup,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", handleSignup);
router.post("/signin", handleSignin);
router.post("/google", handleGoogle);
export default router;
