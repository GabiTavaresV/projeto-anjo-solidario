import { Schema } from "mongoose";
import mongoose from "mongoose";

const ItemSchema = new Schema(
  {
    id: {
      type: String,
      primaryKey: true,
      autoIncrement: true,
    },
    nameOng: {
      type: String,
      required: true,
    },
    item: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    donationSite: {
      type: String,
      required: true,
    },
    donationSchedule: {
      type: String,
      required: true,
    },
    pix: String,
  },
  { timestamps: true }
);

export default mongoose.model("Item", ItemSchema);
