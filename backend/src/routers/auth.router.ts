import { errorHandler } from "./../utils/errorHandler.ts";
import express, { type Response } from "express";
import AuthController from "../controllers/auth.controller.ts";

const authRouter = express.Router();

authRouter.post("/register", errorHandler(AuthController.register));
authRouter.post("/login", errorHandler(AuthController.login));
authRouter.get("/logout", errorHandler(AuthController.logout));

export default authRouter;
