import { Schema } from "mongoose";
import mongoose from "mongoose";

const OngSchema = new Schema(
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
    address: {
      type: String,
      required: true,
    },
    telephone: {
      type: Number,
      required: true,
    },
    site: String,
  },
  { timestamps: true }
);

export default mongoose.model("Ong", OngSchema);
