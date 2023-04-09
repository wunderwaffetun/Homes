import Router from "express";
import projectController from "../controller/projectController";
const router = new Router();

router.get("/project", projectController.getProject);
router.get("/project/:id", projectController.getOneProject);
router.post("/project", projectController.postProject);
router.put("/project/:id", projectController.putProject);
router.delete("/project/:id", projectController.deleteProject);
