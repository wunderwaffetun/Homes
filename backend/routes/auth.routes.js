import { Router } from "express";
import { authCont } from "../controllers/authController.js";
// import { controller } from "../controllers/auth.controller.js";
// import { authJwt } from "../middleware/authJwt.js";

const authRouter = new Router()

authRouter.post('/api/login', authCont.login)
authRouter.get('/api/get-users', authCont.getUsers)
authRouter.get('/api/get-user', authCont.getUser)

// authRouter.post('/api/auth/signin', controller.signIn)
// authRouter.get('/api/auth/refresh', authJwt.updateTokens)
// authRouter.get('/api/auth/reset', authJwt.resetToken)

export { authRouter }