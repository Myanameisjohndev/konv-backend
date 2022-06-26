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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserControler = void 0;
const bcrypt_1 = require("bcrypt");
const UserBankAccount_1 = __importDefault(require("../../../models/user/UserBankAccount"));
function CreateUserControler(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { cpf, name, password } = request.body;
        const protecpassword = yield (0, bcrypt_1.hash)(password, 8);
        const user = {
            cpf,
            name,
            password: protecpassword,
            account_value: 0,
        };
        try {
            yield UserBankAccount_1.default.create(user);
            const returnUser = {
                name: user.name,
                cpf: user.cpf,
                account_value: user.account_value,
            };
            return response.send({ returnUser });
        }
        catch (err) {
            return response.status(500).send({ error: "Tente novamente mais tarde" });
        }
    });
}
exports.CreateUserControler = CreateUserControler;
