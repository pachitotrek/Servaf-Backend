"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const o_instrumentos_1 = __importDefault(require("../models/o_instrumentos"));
class OpcionesInstrumentosController {
    static getAll(req, res) {
        o_instrumentos_1.default.find().exec((error, data) => {
            if (error) {
                return res.status(500).json({
                    ok: false,
                    error
                });
            }
            if (!data) {
                return res.status(401).json({
                    ok: false,
                    message: "Error"
                });
            }
            if (data) {
                return res.status(201).json({
                    ok: true,
                    data
                });
            }
        });
    }
}
exports.default = OpcionesInstrumentosController;
