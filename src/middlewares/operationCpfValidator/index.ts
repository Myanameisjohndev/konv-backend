import { Request, Response, NextFunction } from "express";

import CreateUser from "../../models/user/UserBankAccount";

interface IUser {
  cpf: string;
  name: string;
  password: string;
  account_value: number;
  id: string;
}
async function operationCpfValidator(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { cpf } = request.params;

  const validMongoCpf = (await CreateUser.findOne({ cpf })) as IUser;

  if (!validMongoCpf) {
    return response.status(400).send({ error: "Usuário não encontrado" });
  }

  request.returnUser = validMongoCpf;
  return next();
}

export { operationCpfValidator };
