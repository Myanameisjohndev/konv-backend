"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongo = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const conect = `${process.env.MONGO_CONNECTION}`;
const connectMongo = () => {
    mongoose_1.default
        .connect(conect)
        .then(() => {
        console.log("Succes, has ben connected into mongo");
    })
        .catch((err) => {
        //   console.log(err);
    });
};
exports.connectMongo = connectMongo;
