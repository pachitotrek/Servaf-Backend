"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const o_instrumentos = new mongoose_1.Schema({
    tipo: String,
    propiedad: String,
    uno: {
        unidad: [],
        clase: []
    },
    dos: {
        unidad: [],
        clase: []
    }
});
exports.default = mongoose_1.model('o_instrumentos', o_instrumentos);
