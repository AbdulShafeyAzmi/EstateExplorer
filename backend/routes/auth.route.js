import express from "express";
import {
  handleGoogle,
  handleSignin,
  handleSignout,
  handleSignup,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", handleSignup);
router.post("/signin", handleSignin);
router.post("/google", handleGoogle);
router.get("/signout", handleSignout);
export default router;
