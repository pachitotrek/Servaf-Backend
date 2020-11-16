"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientes_1 = __importDefault(require("../models/clientes"));
class ClientesController {
    static crearCliente(req, res) {
        console.log("Hola");
        let { nombre, identificacion, numero, direccion, telefono, role, email, ciudad } = req.body;
        let cliente = new clientes_1.default({
            nombre,
            identificacion,
            numero,
            direccion,
            telefono,
            role,
            email,
            ciudad
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
    static editarCliente(req, res) {
        let { _id, nombre, identificacion, numero, direccion, telefono, email, ciudad } = req.body;
        clientes_1.default.updateOne({ _id: _id }, {
            $set: {
                nombre,
                identificacion,
                numero,
                direccion,
                telefono,
                email,
                ciudad
            }
        }, (err, datadb) => {
            if (err)
                return res.status(500).json({
                    ok: false,
                    message: " Error al actualizar el producto."
                });
            if (!datadb)
                return res.status(404).json({
                    ok: false,
                    message: "No se pudo actualizar"
                });
            return res.status(200).json({
                ok: true,
                datadb
            });
        });
    }
    static getClientes(req, res) {
        clientes_1.default.find((error, clientes) => {
            if (error) {
                res.status(500).json({
                    ok: false,
                    error
                });
            }
            if (!clientes) {
                res.status(400).json({
                    ok: false,
                    message: "No se encuentra usuario"
                });
            }
            if (clientes) {
                return res.status(200).json({
                    ok: true,
                    clientes
                });
            }
        });
    }
}
exports.default = ClientesController;
