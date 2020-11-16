"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const default_instrumento = new mongoose_1.Schema({
    rvm: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'departamento'
    },
    t_entrada_agua: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    tiempo: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    temp_ambiente: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    humedad: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    presion_entrada: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    presion_salida: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    caudal: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    temprvm: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    }
}, {
    versionKey: false
});
exports.default = mongoose_1.model('default_instrumento', default_instrumento);
