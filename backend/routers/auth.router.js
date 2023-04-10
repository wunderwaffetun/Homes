import { Router } from "express";
import authController from "../controllers/auth.controller.js";

const authRouter = new Router()

authRouter.post('/api/login', authController.login)

export { authRouter }