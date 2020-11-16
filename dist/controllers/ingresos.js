"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medidores_1 = __importDefault(require("../models/medidores"));
const entrada_1 = __importDefault(require("../models/entrada"));
const trabajo_1 = __importDefault(require("../models/trabajo"));
const consecutivo_1 = __importDefault(require("../models/consecutivo"));
const moment_1 = __importDefault(require("moment"));
var padStart = require('string.prototype.padstart');
const mongoose_1 = __importDefault(require("mongoose"));
class MedidorController {
    static nuevo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { fabricacion, marca, modelo, serie, entrada, incidencias, norma, q3, precision, pmaxp, pperdida, q3q1, q2q1, clasetemp, aguasarriba, aguasabajo, tipo, principio, posicion, diametro, rango, escala, estado, identificador, clase, pnominal, type } = req.body;
            let consecutivo = yield MedidorController.getConsecutivo2().then((a) => {
                return a;
            }).catch((error) => {
                return error;
            });
            let n = parseInt(consecutivo.numero);
            let newcc = (n + 1);
            let newcc2 = (n + 1).toString();
            let newconsecutivo = newcc2.padStart(6, "0");
            let setconsecutivo = yield MedidorController.setConsecutivo(consecutivo._id, newcc).then((a) => {
                return a;
            }).catch((error) => {
                return error;
            });
            let numero = yield MedidorController.getConsecutivo().then((a) => {
                return a;
            }).catch((error) => {
                return error;
            });
            let y = moment_1.default().format('YYYY');
            let year = `LCM${y}`;
            let orden = (numero + 1);
            if (type == 3) {
                let q4 = 2 * q3;
                let a = new medidores_1.default({
                    orden: orden,
                    datos: {
                        fabricacion,
                        marca: marca._id,
                        modelo: modelo._id,
                        serie,
                        lectura: entrada
                    },
                    metrologicas: {
                        pperdida,
                        rango,
                        aguasabajo,
                        escala,
                        aguasarriba,
                        norma,
                        tipo,
                        precision,
                        principio,
                        clasetemp,
                        posicion,
                        diametro,
                        pmaxp,
                        identificador,
                        clase,
                        pnominal,
                        q3,
                        q4
                    },
                    incidencias,
                    estado,
                    consecutivo: newconsecutivo,
                    year: year,
                    type,
                });
                a.save((err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    if (!data) {
                        return res.status(401).json({
                            ok: false,
                            message: "Error "
                        });
                    }
                    return res.status(200).json({
                        ok: true,
                        data
                    });
                });
            }
            else {
                let q1 = q3 / q3q1;
                let q2 = 1.6 * q1;
                let q4 = 1.25 * q3;
                let a = new medidores_1.default({
                    orden: orden,
                    datos: {
                        fabricacion,
                        marca: marca._id,
                        modelo: modelo._id,
                        serie,
                        lectura: entrada
                    },
                    metrologicas: {
                        q1,
                        q2,
                        q3,
                        q4,
                        pperdida,
                        rango,
                        aguasabajo,
                        escala,
                        aguasarriba,
                        norma,
                        tipo,
                        precision,
                        principio,
                        clasetemp,
                        posicion,
                        diametro,
                        pmaxp,
                        relacion: q3q1
                    },
                    incidencias,
                    estado,
                    consecutivo: newconsecutivo,
                    year: year,
                    type,
                });
                a.save((err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    if (!data) {
                        return res.status(401).json({
                            ok: false,
                            message: "Error "
                        });
                    }
                    return res.status(200).json({
                        ok: true,
                        data
                    });
                });
            }
        });
    }
    static updateMedidor(req, res) {
        let { _id, fabricacion, marca, modelo, serie, entrada, incidencias, cliente, estado } = req.body;
        medidores_1.default.updateOne({ _id: _id }, {
            $set: {
                datos: {
                    fabricacion: fabricacion,
                    marca: marca,
                    modelo: modelo,
                    serie: serie,
                    lectura: entrada
                },
                incidencias: incidencias,
                cliente: cliente,
                estado: estado
            }
        }).exec((error, data) => {
            if (error) {
                res.status(500).json({
                    ok: false,
                    message: "No se encuentra usuario"
                });
            }
            if (!data) {
                res.status(400).json({
                    ok: false,
                    message: "No se encuentra usuario"
                });
            }
            if (data) {
                console.log(data);
                return res.status(200).json({
                    ok: true,
                    data
                });
            }
        });
    }
    static updateMedidor2(req, res) {
        let { _id, norma, q3, precision, pmaxp, pperdida, q3q1, q2q1, clasetemp, aguasarriba, aguasabajo, tipo, principio, posicion, diametro, rango, escala, identificador, pnominal, clase, type } = req.body;
        if (type == 3) {
            medidores_1.default.updateOne({ _id: _id }, {
                $set: {
                    metrologicas: {
                        pperdida: pperdida,
                        rango: rango,
                        aguasabajo: aguasabajo,
                        escala: escala,
                        aguasarriba: aguasarriba,
                        norma: norma,
                        tipo: tipo,
                        precision: precision,
                        principio: principio,
                        clasetemp: clasetemp,
                        posicion: posicion,
                        diametro: diametro,
                        pmaxp: pmaxp,
                        identificador: identificador,
                        clase: clase,
                        pnominal: pnominal,
                        q3: q3
                    },
                    type: type
                }
            }).exec((err, data) => {
                if (err) {
                    console.log(err);
                }
                if (!data) {
                    return res.status(401).json({
                        ok: false,
                        message: "Error "
                    });
                }
                return res.status(200).json({
                    ok: true,
                    data
                });
            });
        }
        else {
            let q1 = q3 / q3q1;
            let q2 = 1.6 * q1;
            let q4 = 1.25 * q3;
            medidores_1.default.updateOne({ _id: _id }, {
                $set: {
                    metrologicas: {
                        q1,
                        q2,
                        q3,
                        q4,
                        pperdida,
                        rango,
                        aguasabajo,
                        escala,
                        aguasarriba,
                        norma,
                        tipo,
                        precision,
                        principio,
                        clasetemp,
                        posicion,
                        diametro,
                        pmaxp,
                        relacion: q3q1
                    },
                    type: type
                }
            }).exec((err, data) => {
                if (err) {
                    console.log(err);
                }
                if (!data) {
                    return res.status(401).json({
                        ok: false,
                        message: "Error "
                    });
                }
                return res.status(200).json({
                    ok: true,
                    data
                });
            });
        }
    }
    static derogarCertificado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { _id, nuevo, observacion } = req.body;
            let consecutivo = yield MedidorController.getConsecutivo2().then((a) => {
                return a;
            }).catch((error) => {
                return error;
            });
            let n = parseInt(consecutivo.numero);
            let newcc2 = (n + 1).toString();
            let newconsecutivo = newcc2.padStart(6, "0");
            let newcc = (n + 1);
            let y = moment_1.default().format('YYYY');
            let year = `LCM${y}`;
            if (nuevo == "0") {
                medidores_1.default.findOne({ _id: _id }).exec((err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    if (!data) {
                        return res.status(401).json({
                            ok: false,
                            message: "Error "
                        });
                    }
                    let doc = new medidores_1.default(data);
                    doc._id = mongoose_1.default.Types.ObjectId();
                    doc.isNew = true;
                    let oldcertificado = `${data.year}-${data.consecutivo}`;
                    doc.save((error, d) => __awaiter(this, void 0, void 0, function* () {
                        if (err) {
                            console.log(err);
                        }
                        if (!d) {
                            return res.status(401).json({
                                ok: false,
                                message: "Error "
                            });
                        }
                        let setconsecutivo = yield MedidorController.setConsecutivo(consecutivo._id, newcc).then((a) => {
                            return a;
                        }).catch((error) => {
                            return error;
                        });
                        let cscutivo = yield MedidorController.saveconsecutivo(d._id, newconsecutivo, year, oldcertificado).then((x) => {
                            return x;
                        }).catch((error) => {
                            return error;
                        });
                        let obs = yield MedidorController.deletecertificado(_id, observacion, newconsecutivo, year).then((x) => {
                            return x;
                        }).catch((error) => {
                            return error;
                        });
                        if (d) {
                            return res.status(200).json({
                                ok: true,
                                d
                            });
                        }
                    }));
                });
            }
            else {
                medidores_1.default.updateOne({ _id: _id }, {
                    $set: {
                        observaciones: observacion
                    }
                }).exec((err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    if (!data) {
                        return res.status(401).json({
                            ok: false,
                            message: "Error "
                        });
                    }
                    return res.status(200).json({
                        ok: true,
                        data
                    });
                });
            }
        });
    }
    static GetMedidoresOpen(req, res) {
        medidores_1.default.find({ "status": "OPEN" }).populate({
            path: 'datos.modelo',
            populate: { path: 'modelo' }
        }).populate({
            path: 'datos.marca',
            populate: { path: 'marca' }
        }).populate('cliente').exec((error, data) => {
            if (error) {
                res.status(500).json({
                    ok: false,
                    message: "No se encuentra usuario"
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
    static GetMedidoresSave(req, res) {
        medidores_1.default.find({ "status": "SAVE" }).populate({
            path: 'datos.modelo',
            populate: { path: 'modelo' }
        }).populate({
            path: 'datos.marca',
            populate: { path: 'marca' }
        }).populate('cliente').exec((error, data) => {
            if (error) {
                res.status(500).json({
                    ok: false,
                    message: "No se encuentra usuario"
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
    static DeleteMedidor(req, res) {
        let id = req.params.id;
        medidores_1.default.deleteOne({ "_id": id }).exec((error, data) => {
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
    static updateOrden(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { medidores, usuario, cliente } = req.body;
            let numero = yield MedidorController.getConsecutivoOrdenEntrada().then((a) => {
                return a;
            }).catch((error) => {
                return error;
            });
            let orden = numero + 1;
            let nueva = yield MedidorController.createOrdenEntrada(medidores, usuario, orden, cliente).then((a) => {
                return a;
            }).catch((error) => {
                return error;
            });
            medidores_1.default.updateMany({ 'status': 'OPEN' }, {
                $set: {
                    'status': 'SAVE',
                    'orden_entrada': nueva,
                    'cliente': cliente
                }
            }).exec((error, data) => {
                if (error) {
                    console.log(error);
                }
                if (!data) {
                    return res.status(401).json({
                        ok: false,
                        message: "Error "
                    });
                }
                return res.status(200).json({
                    ok: true,
                    data
                });
            });
        });
    }
    static getConsecutivo() {
        return new Promise((resolve, reject) => {
            medidores_1.default.find({}).limit(1).sort({ orden: -1 }).exec((error, data) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    console.log("hola");
                }
                if (data) {
                    resolve(data[0].orden);
                }
            });
        });
    }
    static updateparametros(item, datos, id, ingreso, encargado) {
        return new Promise((resolve, reject) => {
            console.log(encargado);
            medidores_1.default.updateOne({ '_id': item._id }, {
                $set: {
                    parametros: {
                        repeticiones: datos.repeticiones,
                        coef_rvm: datos.coef_rvm,
                        coef_agua: datos.coef_agua,
                        compre_agua: datos.compre_agua,
                        incertidumbre_rvm: datos.incertidumbre_rvm,
                        incertidumbre_agua: datos.incertidumbre_agua,
                        incertidumbre_compre_agua: datos.incertidumbre_compre_agua,
                    },
                    banco: datos.banco,
                    orden_trabajo: id,
                    ingreso: ingreso,
                    calibro: encargado
                }
            }).exec((error, data) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    reject(false);
                }
                if (data) {
                    resolve(true);
                }
            });
        });
    }
    static createOrdenEntrada(data, usuario, orden, cliente) {
        return new Promise((resolve, reject) => {
            let a = new entrada_1.default({
                orden: orden,
                medidores: data,
                creado: usuario,
                cliente: cliente
            });
            a.save((err, data) => {
                if (err) {
                    console.log(err);
                }
                if (!data) {
                    reject(false);
                }
                resolve(data._id);
            });
        });
    }
    static getConsecutivoOrdenEntrada() {
        return new Promise((resolve, reject) => {
            entrada_1.default.find({}).limit(1).sort({ orden: -1 }).exec((error, data) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    console.log("hola");
                }
                if (data) {
                    resolve(data[0].orden);
                }
            });
        });
    }
    static GetOrdenes(req, res) {
        let { inicio, fin } = req.body;
        let fecha_inicio = inicio || "2010-02-08T09";
        let fecha_fin = fin || "2050-02-08T09";
        let f_inicio = moment_1.default(fecha_inicio).format();
        let f_fin = moment_1.default(fecha_fin).format();
        entrada_1.default.find({
            fecha: {
                $gte: f_inicio,
                $lte: f_fin,
            }
        }).populate('creado').populate('medidores').exec((err, data) => {
            if (err) {
                console.log(err.message);
                return res.status(500).json({
                    error: err.message
                });
            }
            if (!data) { // si no se consiguen documentos
                return res.status(400).json({
                    message: 'No se ha encontrado actividad en la fecha dada.'
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
    static setOrdenEntrada(id, orden) {
        return new Promise((resolve, reject) => {
            medidores_1.default.updateOne({ '_id': id }, {
                $set: {}
            }).exec((error, data) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    reject(false);
                }
                if (data) {
                    resolve(true);
                }
            });
        });
    }
    static GetOrdenesTrabajo(req, res) {
        let { inicio, fin } = req.body;
        let fecha_inicio = inicio || "2010-02-08T09";
        let fecha_fin = fin || "2050-02-08T09";
        let f_inicio = moment_1.default(fecha_inicio).format();
        let f_fin = moment_1.default(fecha_fin).format();
        trabajo_1.default.find({
            fecha: {
                $gte: f_inicio,
                $lte: f_fin,
            }
        }).populate('encargado').populate('medidores').exec((err, data) => {
            if (err) {
                console.log(err.message);
                return res.status(500).json({
                    error: err.message
                });
            }
            if (!data) { // si no se consiguen documentos
                return res.status(400).json({
                    message: 'No se ha encontrado actividad en la fecha dada.'
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
    static getConsecutivo2() {
        return new Promise((resolve, reject) => {
            consecutivo_1.default.find({}).limit(1).sort({ fecha: -1 }).exec((error, data) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    console.log("hola");
                }
                if (data) {
                    resolve(data[0]);
                }
            });
        });
    }
    static setConsecutivo(id, numero) {
        return new Promise((resolve, reject) => {
            consecutivo_1.default.updateOne({ '_id': id }, {
                $set: {
                    numero: numero
                }
            }).exec((error, data) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    reject(false);
                }
                if (data) {
                    resolve(true);
                }
            });
        });
    }
    static saveconsecutivo(id, consecutivo, year, oldcertificado) {
        return new Promise((resolve, reject) => {
            medidores_1.default.updateOne({ _id: id }, {
                $set: {
                    consecutivo: consecutivo,
                    year: year,
                    oldcertificado: oldcertificado
                }
            }).exec((err, data) => {
                if (err) {
                    console.log(err);
                }
                if (!data) {
                    reject(false);
                }
                resolve(true);
            });
        });
    }
    static deletecertificado(id, observacion, old, year) {
        return new Promise((resolve, reject) => {
            medidores_1.default.updateOne({ _id: id }, {
                $set: {
                    observaciones: observacion,
                    derogado: "true",
                    oldcertificado: `${year}-${old}`
                }
            }).exec((err, data) => {
                if (err) {
                    console.log(err);
                }
                if (!data) {
                    reject(false);
                }
                resolve(true);
            });
        });
    }
}
exports.default = MedidorController;
