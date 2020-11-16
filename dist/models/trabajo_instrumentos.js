"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const trabajo_instrumento = new mongoose_1.Schema({
    orden: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'trabajo'
    },
    caudal: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    temprvm: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    tempagua: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    volumenrvm: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    tiempo: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    presionentrada: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    tempambiente: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    humedad: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    presionsalida: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    }
}, {
    versionKey: false
});
exports.default = mongoose_1.model('trabajo_instrumento', trabajo_instrumento);
