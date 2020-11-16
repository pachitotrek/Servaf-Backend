"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_1 = require("../global/environment");
const user_1 = __importDefault(require("../models/user"));
class UserController {
    static login(req, res) {
        let { username, pass } = req.body;
        user_1.default.findOne({ "username": username }).exec((err, usuarioDB) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    ok: false,
                    message: "Error",
                    err
                });
            }
            if (!usuarioDB) {
                return res.status(401).json({
                    ok: false,
                    message: "No se encuentra el usuario"
                });
            }
            if (!bcrypt_1.default.compareSync(pass, usuarioDB.pass)) {
                return res.status(400).json({
                    ok: false,
                    message: "Error contraseña incorrectas"
                });
            }
            let token = jsonwebtoken_1.default.sign({
                id: usuarioDB.id,
                username: usuarioDB.username,
                nombre: usuarioDB.nombre,
                apellido: usuarioDB.apellido
            }, environment_1.SEED, { expiresIn: environment_1.CADUCIDAD_TOKEN });
            usuarioDB.pass = ":D";
            return res.status(200).json({
                ok: true,
                usuarioDB,
                token
            });
        });
    }
    static generarToken(usuarioDB, res) {
        let token = jsonwebtoken_1.default.sign({
            id: usuarioDB._id,
            username: usuarioDB.username,
            nombre: usuarioDB.nombre,
            apellido: usuarioDB.apellido
        }, environment_1.SEED, { expiresIn: environment_1.CADUCIDAD_TOKEN });
        usuarioDB.pass = ":D";
        return res.status(200).json({
            ok: true,
            usuarioDB,
            token
        });
    }
    static crearUsuario(req, res) {
        let { nombre, apellido, role, cargo, username } = req.body;
        let pass = "servaf2020";
        let password = bcrypt_1.default.hashSync(pass, 10);
        let usuario = new user_1.default({
            nombre,
            apellido,
            cargo,
            role,
            username,
            pass: password
        });
        usuario.save((err, usuarioDB) => {
            if (err) {
                console.log(err);
            }
            if (!usuarioDB) {
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
    static check(req, res) {
        let username = req.params.id;
        user_1.default.findOne({ "username": username }).exec((err, data) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: "Error",
                    err
                });
            }
            if (!data) {
                return res.status(200).json({
                    username: true
                });
            }
            return res.status(200).json({
                username: false
            });
        });
    }
    static editarUsuario(req, res) {
        let { nombre, apellido, cargo, role, username, _id } = req.body;
        user_1.default.updateOne({ _id: _id }, {
            $set: {
                nombre,
                apellido,
                cargo,
                role,
                username,
            }
        }, (err, usuarioDB) => {
            if (err)
                return res.status(500).json({
                    ok: false,
                    message: " Error al actualizar el producto."
                });
            if (!usuarioDB)
                return res.status(404).json({
                    ok: false,
                    message: "No se pudo actualizar"
                });
            usuarioDB.pass = ":D";
            return res.status(200).json({
                ok: true,
                usuarioDB
            });
        });
    }
    static getUsers(req, res) {
        user_1.default.find((error, usuarios) => {
            if (error) {
                res.status(500).json({
                    ok: false,
                    error
                });
            }
            if (!usuarios) {
                res.status(400).json({
                    ok: false,
                    message: "No se encuentra usuario"
                });
            }
            if (usuarios) {
                return res.status(200).json({
                    ok: true,
                    usuarios
                });
            }
        });
    }
    static getUser(req, res) {
        let id = req.params.id;
        user_1.default.find(({ _id: id }), (error, data) => {
            if (error) {
                res.status(500).json({
                    ok: false,
                    error
                });
            }
            if (!data) {
                res.status(400).json({
                    ok: false,
                    message: "No se encuentra usuario"
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
    static checkpass(req, res) {
        let body = req.body;
        user_1.default
            .findOne({ "_id": body._id })
            .exec((err, usuarioDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: "Error",
                    err
                });
            }
            if (!usuarioDB) {
                return res.status(401).json({
                    ok: false,
                    message: "No se encuentra el Usuario"
                });
            }
            if (!bcrypt_1.default.compareSync(body.pass, usuarioDB.pass)) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'Error Contraseña incorrectas'
                    }
                });
            }
            usuarioDB.pass = ":D";
            if (usuarioDB) {
                UserController.changepass(req, res);
                // UserController.changepass(req, res);
            }
        });
    }
    static changepass(req, res) {
        let body = req.body;
        // let pass = bcrypt.hashSync(body.pass,10);
        let pass = body.pass;
        user_1.default
            .findOneAndUpdate({ "_id": body._id }, { "pass": pass })
            .exec((err, usuarioDB) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: "Error",
                    err
                });
            }
            if (!usuarioDB) {
                return res.status(401).json({
                    ok: false,
                    message: "No se encuentra el Usuario"
                });
            }
            if (usuarioDB) {
                return res.status(200).json({
                    ok: true,
                    message: "Ha Actualizado su Contraseña"
                });
            }
        });
    }
    static delete(req, res) {
        let { _id } = req.body;
        user_1.default.deleteOne({ _id }).exec((error, data) => {
            if (error) {
                return res.status(501).json({
                    ok: false,
                    error
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
exports.default = UserController;
