"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const medidor_trabajo = new mongoose_1.Schema({
    orden: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'trabajo'
    },
    fabricacion: String,
    marca: String,
    modelo: String,
    serie: String,
    lectura: String,
    incidencias: [],
    status: { type: String, default: "OPEN" },
    creado: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'user'
    },
    fecha: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});
exports.default = mongoose_1.model('medidor_trabajo', medidor_trabajo);
