"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const cmc = new mongoose_1.Schema({
    instrumento: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
    },
    error: Number,
    creado: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});
exports.default = mongoose_1.model('cmc', cmc);
