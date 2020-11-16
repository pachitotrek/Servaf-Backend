"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const norma_uno = new mongoose_1.Schema({
    diametro: Number,
    clase: String,
    valores: [
        {
            prueba: String,
            caudal: Number
        }
    ]
}, {
    versionKey: false
});
exports.default = mongoose_1.model('norma_uno', norma_uno);
