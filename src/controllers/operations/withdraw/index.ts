import { Request, Response } from "express";

import CreateUser from "../../../models/user/UserBankAccount";
import UserWithdrawAccount from "../../../models/withdraw/UserWithdrawAccount";
import { ValidNote } from "../../../utils/validNote";

const WithdrawController = async (request: Request, response: Response) => {
  const { returnUser } = request;
  const { value } = request.body;
  const { cpf } = request.params;

  if (Number(value) > returnUser.account_value) {
    return response
      .status(400)
      .send({ error: "Você não possui este valor em conta" });
  }

  await CreateUser.findOneAndUpdate(
    { cpf },
    {
      account_value: Number(returnUser.account_value) - Number(value),
    }
  ).then(async () => {
    await UserWithdrawAccount.create({ value, cpf })
      .then(() => {
        return response.status(200).send({
          message: "Saque feito com sucesso",
          Notes: ValidNote(Number(value)),
        });
      })
      .catch(() => {
        return response.status(400).send({ message: "Erro ao realizar saque" });
      });
  });
};

export { WithdrawController };
