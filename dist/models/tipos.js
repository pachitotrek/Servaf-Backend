"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const tipo = new mongoose_1.Schema({
    tipo: String,
    orden: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'trabajo'
    },
}, {
    versionKey: false
});
exports.default = mongoose_1.model('tipo', tipo);
