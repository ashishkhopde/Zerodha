import { OrderModel } from "../models/orderModel.js";

export const addNewOrder = async (req, res) => {
    const newOrder = new OrderModel({
        name: req.body.name,
        qty: req.body.qty,
        price: req.body.price,
        mode: req.body.mode
    })

    await newOrder.save();

    res.send("order Savesd");
} 