"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const banco = new mongoose_1.Schema({
    numero: Number,
    identificacion: String,
    tipo: String,
    automatico: String,
    lineas: Number,
    medidores: Number,
    descripcion: String,
    status: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false
});
exports.default = mongoose_1.model('banco', banco);
