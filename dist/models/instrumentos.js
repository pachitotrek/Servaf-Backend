"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const instrumento = new mongoose_1.Schema({
    patron: String,
    codigo: String,
    serial: String,
    certificado: String,
    fuente: String,
    fecha_calibracion: String,
    instrumento: String,
    escalas: Number,
    propiedad_uno: String,
    tipo_uno: String,
    unidad_uno: String,
    limite_inferior_uno: Number,
    limite_superior_uno: Number,
    division_escala_uno: Number,
    descripcion_uno: String,
    propiedad_dos: String,
    tipo_dos: String,
    unidad_dos: String,
    limite_inferior_dos: Number,
    limite_superior_dos: Number,
    division_escala_dos: Number,
    descripcion_dos: String,
    status: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false
});
exports.default = mongoose_1.model('instrumento', instrumento);
