import { Request, Response, NextFunction } from "express";

import CreateUser from "../../models/user/UserBankAccount";

async function verifyExistAccountCpf(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { cpf } = request.body;
  const size = cpf?.length;

  if (size) {
    if (size < 11 || size > 11) {
      return response.status(400).send({ error: "Informe um cpf válido" });
    }
  }

  const validMongoCpf = await CreateUser.findOne({ cpf });

  if (validMongoCpf) {
    return response
      .status(400)
      .send({ error: "Já existe um usuário com este cpf" });
  }

  return next();
}

export { verifyExistAccountCpf };
