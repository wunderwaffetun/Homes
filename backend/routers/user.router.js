import { Router } from "express";
import userController from "../controllers/user.controller";

const userRouter = new Router()

userRouter.post('/api/get-users', userController.getUser)

export { userRouter }