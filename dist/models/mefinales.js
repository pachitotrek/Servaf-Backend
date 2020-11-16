"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const final = new mongoose_1.Schema({
    corrida: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'corrida'
    },
    medidor: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'medidor_trabajo'
    },
    inicial: Number,
    final: Number,
    status: { type: String, default: "OPEN" },
    fecha: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});
exports.default = mongoose_1.model('final', final);
