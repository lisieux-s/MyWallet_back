import express from "express";
import { signUp, signIn } from "../controllers/authController";

const router = express.Router();
router.post('/', signIn);
router.post('/sign-up', signUp);

export default authRouter;