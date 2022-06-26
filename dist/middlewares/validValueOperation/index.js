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
exports.validValueOperation = void 0;
function validValueOperation(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { value } = request.body;
        if (!value) {
            return response.status(400).send({ error: "Informe um valor" });
        }
        if (Number(value) <= 0) {
            return response.status(400).send({ error: "Informe um valor válido" });
        }
        return next();
    });
}
exports.validValueOperation = validValueOperation;
