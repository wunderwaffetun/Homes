import Router from "express";
import authController from "../controller/authController";
const router = new Router();

router.get("/login", authController.getAuth);
