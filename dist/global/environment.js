"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FOLDER = exports.SEED = exports.CADUCIDAD_TOKEN = exports.DBURL = exports.SERVER_PORT = void 0;
exports.SERVER_PORT = 3100;
exports.DBURL = 'mongodb://localhost:27017/servaf';
exports.CADUCIDAD_TOKEN = Number(process.env.CADUCIDAD_TOKEN) || 60 * 60 * 24 * 30;
exports.SEED = 'este-es-el-seed-desarrollo';
exports.FOLDER = 'C:\\Program Files\\MongoDB\\Server\\4.2\\bin';
//========================
//entorno
//========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
