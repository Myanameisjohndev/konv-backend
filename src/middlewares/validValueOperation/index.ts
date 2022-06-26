import { Request, Response, NextFunction } from "express";

async function validValueOperation(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { value } = request.body;

  if (!value) {
    return response.status(400).send({ error: "Informe um valor" });
  }
  if (Number(value) <= 0) {
    return response.status(400).send({ error: "Informe um valor válido" });
  }

  return next();
}

export { validValueOperation };
