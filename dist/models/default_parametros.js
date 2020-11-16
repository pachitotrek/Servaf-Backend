"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const default_parametro = new mongoose_1.Schema({
    repeticiones: Number,
    coef_rvm: Number,
    coef_agua: Number,
    compre_agua: Number,
    incertidumbre_rvm: Number,
    incertidumbre_agua: Number,
    incertidumbre_compre_agua: Number,
    codigos: String,
    excel: String,
    registro: String
}, {
    versionKey: false
});
exports.default = mongoose_1.model('default_parametro', default_parametro);
