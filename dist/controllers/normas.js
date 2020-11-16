"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const normas_1 = __importDefault(require("../models/normas"));
const others_1 = __importDefault(require("../models/others"));
class NormasController {
    static getAll(req, res) {
        normas_1.default.find().exec((error, data) => {
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
    static crearother(req, res) {
        let { titulo } = req.body;
        let cliente = new others_1.default({
            titulo
        });
        cliente.save((err, datadb) => {
            if (err) {
                console.log(err);
            }
            if (!datadb) {
                return res.status(401).json({
                    ok: false,
                    message: "Error "
                });
            }
            return res.status(200).json({
                ok: true
            });
        });
    }
    static getAllOthers(req, res) {
        others_1.default.find().exec((error, data) => {
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
exports.default = NormasController;
