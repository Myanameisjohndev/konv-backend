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
exports.verifyExistAccountCpf = void 0;
const UserBankAccount_1 = __importDefault(require("../../models/user/UserBankAccount"));
function verifyExistAccountCpf(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { cpf } = request.body;
        const size = cpf === null || cpf === void 0 ? void 0 : cpf.length;
        if (size) {
            if (size < 11 || size > 11) {
                return response.status(400).send({ error: "Informe um cpf válido" });
            }
        }
        const validMongoCpf = yield UserBankAccount_1.default.findOne({ cpf });
        if (validMongoCpf) {
            return response
                .status(400)
                .send({ error: "Já existe um usuário com este cpf" });
        }
        return next();
    });
}
exports.verifyExistAccountCpf = verifyExistAccountCpf;
