import { Request, Response, NextFunction } from "express";

import CreateUser from "../../models/user/UserBankAccount";

interface IUser {
  cpf: string;
  name: string;
  password: string;
  account_value: number;
  id: string;
}
async function searchUserExtract(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { cpf } = request.body;
  const { id } = request.params;

  if (!cpf) {
    return response.status(400).send({ error: "Informe um cpf" });
  }

  const validMongoCpf = (await CreateUser.findOne({ cpf })) as IUser;

  if (validMongoCpf.id !== id) {
    return response.status(400).send({ error: "Não autorizado" });
  }

  if (!validMongoCpf) {
    return response.status(400).send({ error: "Ususário não encontrado!" });
  }

  return next();
}

export { searchUserExtract };
