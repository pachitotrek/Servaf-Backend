"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_1 = require("../global/environment");
const server_1 = __importDefault(require("../classes/server"));
class TokenController {
    static verificar(token, idcliente) {
        const server = server_1.default.Instance;
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, environment_1.SEED, (error, decode) => {
                if (error) {
                    server.io.in(idcliente).emit('desconectar');
                    resolve(false);
                }
                if (decode) {
                    let usuario = decode;
                    resolve(usuario);
                }
            });
        });
    }
}
exports.default = TokenController;
