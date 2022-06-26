import { Router } from "express";

import { CreateUserControler } from "../../controllers/user/create";
import { LoginUserControler } from "../../controllers/user/login";
import { verifyExistAccountCpf } from "../../middlewares/validCpf";

const userRoutes = Router();

userRoutes.post(
  "/register",
  verifyExistAccountCpf,
  async (request, response) => {
    return CreateUserControler(request, response);
  }
);

userRoutes.get("/login/:password/:cpf", async (request, response) => {
  return LoginUserControler(request, response);
});

export { userRoutes };
