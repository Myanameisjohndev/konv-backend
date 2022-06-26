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
exports.WithdrawController = void 0;
const UserBankAccount_1 = __importDefault(require("../../../models/user/UserBankAccount"));
const UserWithdrawAccount_1 = __importDefault(require("../../../models/withdraw/UserWithdrawAccount"));
const validNote_1 = require("../../../utils/validNote");
const WithdrawController = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { returnUser } = request;
    const { value } = request.body;
    const { cpf } = request.params;
    if (Number(value) > returnUser.account_value) {
        return response
            .status(400)
            .send({ error: "Você não possui este valor em conta" });
    }
    yield UserBankAccount_1.default.findOneAndUpdate({ cpf }, {
        account_value: Number(returnUser.account_value) - Number(value),
    }).then(() => __awaiter(void 0, void 0, void 0, function* () {
        yield UserWithdrawAccount_1.default.create({ value, cpf })
            .then(() => {
            return response.status(200).send({
                message: "Saque feito com sucesso",
                Notes: (0, validNote_1.ValidNote)(Number(value)),
            });
        })
            .catch(() => {
            return response.status(400).send({ message: "Erro ao realizar saque" });
        });
    }));
});
exports.WithdrawController = WithdrawController;
