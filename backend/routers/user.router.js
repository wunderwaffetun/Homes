import { Router } from "express";
import userController from "../controllers/user.controller.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const userRouter = new Router();

userRouter.get("/api/get-users", authMiddleware, userController.getUsers);
userRouter.get("/api/get-user/:id", authMiddleware, userController.getUser);

// userRouter.post('/api/get-users', userController.getUser)

// userRouter.post('/login', controller.login)
// userRouter.get('/users', roleMiddleware(["ADMIN"]), userController.getUsers)

export { userRouter };
