import mongoose, { Schema } from "mongoose";

const DepositAccount: Schema = new Schema(
  {
    cpf: { type: String, required: true },
    value: { type: Number },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("DepositAccount", DepositAccount);
