import { Router } from "express";
import {getAllHolings} from "../controllers/holdingsControllers.js"

const router = Router();

router.get("/allHoldings", getAllHolings)

export default router;