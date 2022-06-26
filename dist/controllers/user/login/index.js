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
exports.LoginUserControler = void 0;
const bcrypt_1 = require("bcrypt");
const UserBankAccount_1 = __importDefault(require("../../../models/user/UserBankAccount"));
function LoginUserControler(request, response) {
    return __awaiter(this, void 0, void 0, function* () {
        const { cpf, password } = request.params;
        try {
            const user = (yield UserBankAccount_1.default.findOne({ cpf }));
            const comparePassword = yield (0, bcrypt_1.compare)(password, user.password);
            if (!comparePassword) {
                return response
                    .status(500)
                    .send({ error: "Sua senha ou cpf estão incorretos" });
            }
            const date = user.createdAt;
            const formatedDate = `${date.getDate()}/${date.getDay()}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`;
            console.log(formatedDate);
            const returnUser = {
                name: user.name,
                cpf: user.cpf,
                account_value: user.account_value,
                created_at: formatedDate,
            };
            return response.send({ returnUser });
        }
        catch (err) {
            return response.status(500).send({ error: "Tente novamente mais tarde" });
        }
    });
}
exports.LoginUserControler = LoginUserControler;
