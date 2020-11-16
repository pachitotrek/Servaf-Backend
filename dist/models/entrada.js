"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const entrada = new mongoose_1.Schema({
    orden: Number,
    medidores: [{
            type: mongoose_1.Schema.Types.ObjectId, ref: 'medidor'
        }],
    status: { type: String, default: "OPEN" },
    creado: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'usuario'
    },
    cliente: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'cliente'
    },
    fecha: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});
exports.default = mongoose_1.model('entrada', entrada);
