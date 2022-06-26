import mongoose, { Schema } from "mongoose";

const UserBankAccount: Schema = new Schema(
  {
    name: { type: String, required: true },
    cpf: { type: String, required: true },
    password: { type: String, required: true },
    account_value: { type: Number },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("UserBankAccount", UserBankAccount);
