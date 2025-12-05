import { Router } from "express";
import { getAllPositions } from "../controllers/positionsControllers.js";

const router = Router();

router.get("/allPositions", getAllPositions);

export default router;