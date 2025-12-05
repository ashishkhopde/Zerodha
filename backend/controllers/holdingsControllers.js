import { HoldingsModel } from "../models/holdingModel.js";

export const getAllHolings = async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
}