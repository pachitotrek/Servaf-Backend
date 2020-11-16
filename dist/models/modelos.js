"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const modelo = new mongoose_1.Schema({
    titulo: String
}, {
    versionKey: false
});
exports.default = mongoose_1.model('modelo', modelo);
