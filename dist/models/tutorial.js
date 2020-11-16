"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tutorial = new mongoose_1.Schema({
    titulo: String,
    descripcion: String,
    seccion: String,
    imagen: String,
    creado: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});
exports.default = mongoose_1.model('tutorial', tutorial);
