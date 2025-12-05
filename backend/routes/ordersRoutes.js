import { Router } from "express";
import { addNewOrder } from "../controllers/ordersController.js"
const router = Router();

router.post("/newOrder", addNewOrder);

export default router;