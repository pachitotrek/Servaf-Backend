"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tutorial_1 = __importDefault(require("../models/tutorial"));
class TutorialesController {
    static crearTutorial(req, res) {
        let { titulo, descripcion, seccion, imagen } = req.body;
        let a = new tutorial_1.default({
            titulo, descripcion, seccion, imagen
        });
        a.save((err, data) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: 'Error desconocido',
                    err
                });
            }
            if (!data) {
                return res.status(401).json({
                    ok: false,
                    message: 'Error No se encuentra',
                    err
                });
            }
            if (data) {
                return res.status(200).json({
                    ok: true,
                    data
                });
            }
        });
    }
    static getTutoriales(req, res) {
        tutorial_1.default.find({}).exec((err, data) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: 'Error desconocido',
                    err
                });
            }
            if (!data) {
                return res.status(401).json({
                    ok: false,
                    message: 'Error No se encuentra',
                    err
                });
            }
            if (data) {
                return res.status(200).json({
                    ok: true,
                    data
                });
            }
        });
    }
}
exports.default = TutorialesController;
