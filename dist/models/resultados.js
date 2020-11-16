"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const resultado = new mongoose_1.Schema({
    caudalQ1: Number,
    volumenProQ1: Number,
    volumenRealQ1: Number,
    errorQ1: Number,
    caudalQ2: Number,
    volumenProQ2: Number,
    volumenRealQ2: Number,
    errorQ2: Number,
    caudalQ3: Number,
    volumenProQ3: Number,
    volumenRealQ3: Number,
    errorQ3: Number,
    orden: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'trabajo'
    },
}, {
    versionKey: false
});
exports.default = mongoose_1.model('resultado', resultado);
