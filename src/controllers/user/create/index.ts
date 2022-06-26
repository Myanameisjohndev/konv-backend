import { hash } from "bcrypt";
import { Request, Response } from "express";

import CreateUser from "../../../models/user/UserBankAccount";

export interface IUser {
  cpf: string;
  name: string;
  password: string;
  account_value: number;
  createdAt: Date;
}

async function CreateUserControler(request: Request, response: Response) {
  const { cpf, name, password }: IUser = request.body;

  const protecpassword = await hash(password, 8);
  const user = {
    cpf,
    name,
    password: protecpassword,
    account_value: 0,
  };
  try {
    await CreateUser.create(user);
    const returnUser = {
      name: user.name,
      cpf: user.cpf,
      account_value: user.account_value,
    } as IUser;
    return response.send({ returnUser });
  } catch (err) {
    return response.status(500).send({ error: "Tente novamente mais tarde" });
  }
}

export { CreateUserControler };
