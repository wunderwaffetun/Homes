import Router from "express";
import solveController from "../controller/solveController";
const router = new Router();

router.get("/solve", solveController.getSolve);
router.get("/solve/:id", solveController.getOneSolve);
router.post("/solve", solveController.postSolve);
router.put("/solve/:id", solveController.putSolve);
router.delete("/solve/:id", solveController.deleteSolve);
