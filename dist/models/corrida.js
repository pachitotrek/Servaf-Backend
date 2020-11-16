"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const corrida = new mongoose_1.Schema({
    orden: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'trabajo'
    },
    tipo: String,
    repeticion: Number,
    temp: Number,
    humedad: Number,
    caudal: Number,
    pentrada: Number,
    psalida: Number,
    tempagua: Number,
    temprvm: Number,
    volumenrvm: Number,
    time: Number,
    status: { type: String, default: "OPEN" },
    fecha: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});
exports.default = mongoose_1.model('corrida', corrida);
