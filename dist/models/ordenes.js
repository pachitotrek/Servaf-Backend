"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ordenes = new mongoose_1.Schema({
    orden: Number,
    fecha: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false
});
exports.default = mongoose_1.model('ordenes', ordenes);
