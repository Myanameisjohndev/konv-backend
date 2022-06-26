"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operationsRoutes = void 0;
const express_1 = require("express");
const deposit_1 = require("../../controllers/operations/deposit");
const extract_1 = require("../../controllers/operations/extract");
const withdraw_1 = require("../../controllers/operations/withdraw");
const operationCpfValidator_1 = require("../../middlewares/operationCpfValidator");
const validValueOperation_1 = require("../../middlewares/validValueOperation");
const operationsRoutes = (0, express_1.Router)();
exports.operationsRoutes = operationsRoutes;
operationsRoutes.post("/deposit/:cpf", operationCpfValidator_1.operationCpfValidator, validValueOperation_1.validValueOperation, (request, response) => {
    return (0, deposit_1.CreateDepositControler)(request, response);
});
operationsRoutes.post("/withdraw/:cpf", operationCpfValidator_1.operationCpfValidator, validValueOperation_1.validValueOperation, (request, response) => {
    return (0, withdraw_1.WithdrawController)(request, response);
});
operationsRoutes.get("/extract/:cpf", operationCpfValidator_1.operationCpfValidator, (request, response) => {
    return (0, extract_1.ExtractControler)(request, response);
});
