"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const calibracion = new mongoose_1.Schema({
    instrumento: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    proxima: Date,
    certificado: String,
    fecha_calibracion: Date,
    trazabilidad: String,
    error_indicacion: Number,
    error_indicacion_anterior: Number,
    incertidumbre: Number,
    division_escala: Number,
    correcion_escala: Number,
    incertidumbre_escala: Number,
    factor_cubrimiento: Number,
    parametro_referencia: Number,
    fecha: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});
exports.default = mongoose_1.model('calibracion', calibracion);
