"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const create_1 = require("../../controllers/user/create");
const login_1 = require("../../controllers/user/login");
const validCpf_1 = require("../../middlewares/validCpf");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post("/register", validCpf_1.verifyExistAccountCpf, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, create_1.CreateUserControler)(request, response);
}));
userRoutes.get("/login/:password/:cpf", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    return (0, login_1.LoginUserControler)(request, response);
}));
