import { model } from "mongoose";

import { HoldingsSchema } from "../schemas/holdingsSchema.js";

export const HoldingsModel = model("holdings", HoldingsSchema);