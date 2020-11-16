"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cliente = new mongoose_1.Schema({
    nombre: String,
    identificacion: String,
    numero: String,
    direccion: String,
    telefono: String,
    role: Number,
    email: String,
    ciudad: String,
    creado: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});
exports.default = mongoose_1.model('cliente', cliente);
