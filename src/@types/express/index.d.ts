/* eslint-disable @typescript-eslint/naming-convention */
declare namespace Express {
  export interface Request {
    returnCpf: string | string[] | undefined;
    returnUser: {
      cpf: string;
      name: string;
      password: string;
      account_value: number;
      id: string;
    };
  }
}
