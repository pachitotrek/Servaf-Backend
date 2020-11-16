"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const norma = new mongoose_1.Schema({
    norma: String,
    caudal: [],
    precision: [],
    ppresion: [],
    rango: [],
    swa: [],
    swd: [],
    temp: []
}, {
    versionKey: false
});
exports.default = mongoose_1.model('norma', norma);
