import { Router } from "express";
import userController from "../controllers/user.controller.js";

const userRouter = new Router()

// userRouter.post('/api/get-users', userController.getUser)

// userRouter.post('/login', controller.login)
// userRouter.get('/users', roleMiddleware(["ADMIN"]), userController.getUsers)

export { userRouter }