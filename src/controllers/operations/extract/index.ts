import { Request, Response } from "express";

import Deposit from "../../../models/deposit/UserDepositAccount";
import Withdraw from "../../../models/withdraw/UserWithdrawAccount";

async function ExtractControler(request: Request, response: Response) {
  const { returnUser } = request;
  const { cpf } = request.params;
  const Withdraws = await Withdraw.find({ cpf });
  const Deposits = await Deposit.find({ cpf });
  return response.status(200).send({
    TotalDeposits: Deposits.length,
    TotalWithdraws: Withdraws.length,
    Saldo: returnUser.account_value,
    Deposits,
    Withdraws,
  });
}

export { ExtractControler };
