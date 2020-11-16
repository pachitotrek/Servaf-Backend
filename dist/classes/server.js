"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const environment_1 = require("../global/environment");
const socket_io_1 = __importDefault(require("socket.io"));
const http_1 = __importDefault(require("http"));
const sk = __importStar(require("../sockets/socket"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.port = environment_1.SERVER_PORT;
        this.httpServer = new http_1.default.Server(this.app);
        this.io = socket_io_1.default(this.httpServer);
        this.escucharSockets();
    }
    static get Instance() {
        return this._instance || (this._instance = new this());
    }
    escucharSockets() {
        console.log('Escuchando conexiones - sockets');
        this.io.on('connection', cliente => {
            console.log('Cliente conectado');
            // Conectar cliente
            sk.conectarCliente(cliente);
            // Configurar usuario
            sk.configurandoUser(cliente, this.io);
            // Mensajes
            sk.mensaje(cliente, this.io);
            // Desconectar
            sk.desconectar(cliente);
            // sk.floculador(cliente,this.io);
            // sk.sedimentador(cliente,this.io);
            // sk.vertedero(cliente,this.io);
            // sk.interiores(cliente,this.io);
            // sk.exteriores(cliente,this.io);
            // sk.tanques(cliente,this.io);
            // sk.graphica(cliente,this.io);
            // sk.tanquesunit(cliente,this.io);
            // sk.interior(cliente,this.io);
            // sk.apoyo(cliente,this.io);
            // sk.filtroInterior(cliente,this.io);
        });
    }
    start(callback) {
        this.httpServer.listen(this.port, callback());
    }
}
exports.default = Server;
