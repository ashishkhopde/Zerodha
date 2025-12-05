import { model } from "mongoose";

import { OrdersSchema } from "../schemas/ordersSchema.js";

export const OrderModel = model("orders", OrdersSchema);