import mongoose, { Schema } from "mongoose";

const waterSchema = new Schema(
  {
    date: String,
    info: {
      name: String,
      amount: Number,
      bowl: String,
    },
  },
  { timestamps: true }
);

const Water = mongoose.models.Water || mongoose.model("Water", waterSchema);

export default Water;
