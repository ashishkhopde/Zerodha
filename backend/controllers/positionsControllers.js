import { PositionsModel } from "../models/positionModel.js";

export const getAllPositions = async (req, res) => {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
}