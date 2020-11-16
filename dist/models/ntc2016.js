"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const norma_dos = new mongoose_1.Schema({
    diametro: Number,
    relacion: Number,
    valores: [
        {
            prueba: String,
            caudal: Number
        }
    ]
}, {
    versionKey: false
});
exports.default = mongoose_1.model('norma_dos', norma_dos);
