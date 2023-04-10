import Router from "express";
import authController from "../controller/authController";
const router = new Router();

router.post("/login", authController.getAuth);
