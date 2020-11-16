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
const instrumentos_1 = __importDefault(require("../models/instrumentos"));
const default_instrumentos_1 = __importDefault(require("../models/default_instrumentos"));
const default_parametros_1 = __importDefault(require("../models/default_parametros"));
const banco_ensayos_1 = __importDefault(require("../models/banco_ensayos"));
const calibraciones_1 = __importDefault(require("../models/calibraciones"));
class InstrumentosController {
    static crear(req, res) {
        let { patron, codigo, serial, certificado, fuente, fecha_calibracion, instrumento, escalas, propiedad_uno, tipo_uno, unidad_uno, limite_inferior_uno, limite_superior_uno, division_escala_uno, descripcion_uno, propiedad_dos, tipo_dos, unidad_dos, limite_inferior_dos, limite_superior_dos, division_escala_dos, descripcion_dos } = req.body;
        let a = new instrumentos_1.default({
            patron,
            codigo,
            serial,
            certificado,
            fuente,
            fecha_calibracion,
            instrumento,
            escalas,
            propiedad_uno,
            tipo_uno,
            unidad_uno,
            limite_inferior_uno,
            limite_superior_uno,
            division_escala_uno,
            descripcion_uno,
            propiedad_dos,
            tipo_dos,
            unidad_dos,
            limite_inferior_dos,
            limite_superior_dos,
            division_escala_dos,
            descripcion_dos
        });
        a.save((err, datadb) => {
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
    static update(req, res) {
        let { _id, patron, codigo, serial, certificado, fuente, fecha_calibracion, instrumento, escalas, propiedad_uno, tipo_uno, unidad_uno, limite_inferior_uno, limite_superior_uno, division_escala_uno, descripcion_uno, propiedad_dos, tipo_dos, unidad_dos, limite_inferior_dos, limite_superior_dos, division_escala_dos, descripcion_dos, status } = req.body;
        instrumentos_1.default.updateOne({ "_id": _id }, {
            $set: {
                patron,
                codigo,
                serial,
                certificado,
                fuente,
                fecha_calibracion,
                instrumento,
                escalas,
                propiedad_uno,
                tipo_uno,
                unidad_uno,
                limite_inferior_uno,
                limite_superior_uno,
                division_escala_uno,
                descripcion_uno,
                propiedad_dos,
                tipo_dos,
                unidad_dos,
                limite_inferior_dos,
                limite_superior_dos,
                division_escala_dos,
                descripcion_dos,
                status
            }
        }).exec((err, datadb) => {
            if (err) {
                console.log(err);
            }
            if (!datadb) {
                return res.status(401).json({
                    ok: false,
                    message: "Error "
                });
            }
            if (datadb) {
                return res.status(200).json({
                    ok: true
                });
            }
        });
    }
    static getAll(req, res) {
        instrumentos_1.default.find().exec((error, data) => {
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
    static getOne(req, res) {
        let _id = req.params.id;
        instrumentos_1.default.find({ _id }).exec((error, data) => {
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
    static default(req, res) {
        let { _id, rvm, t_entrada_agua, tiempo, temp_ambiente, humedad, presion_entrada, presion_salida, caudal, temprvm } = req.body;
        default_instrumentos_1.default.updateOne({ _id }, {
            $set: {
                rvm,
                t_entrada_agua,
                tiempo,
                temp_ambiente,
                humedad,
                presion_entrada,
                presion_salida,
                caudal,
                temprvm
            }
        }).exec((err, data) => {
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
    static getDefaultInstrumentos(req, res) {
        default_instrumentos_1.default.find({}).exec((error, data) => {
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
    static defaultParametros(req, res) {
        let { _id, repeticiones, coef_rvm, coef_agua, compre_agua, incertidumbre_rvm, incertidumbre_agua, incertidumbre_compre_agua, codigos, excel, registro } = req.body;
        default_parametros_1.default.updateOne({ _id }, {
            $set: {
                repeticiones,
                coef_rvm,
                coef_agua,
                compre_agua,
                incertidumbre_rvm,
                incertidumbre_agua,
                incertidumbre_compre_agua,
                codigos,
                excel,
                registro
            }
        }).exec((err, data) => {
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
    static getDefaultParametros(req, res) {
        default_parametros_1.default.find({}).exec((error, data) => {
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
    static crearBanco(req, res) {
        let { numero, identificacion, tipo, automatico, lineas, medidores, descripcion } = req.body;
        let a = new banco_ensayos_1.default({
            numero,
            identificacion,
            tipo,
            automatico,
            lineas,
            medidores,
            descripcion
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
    static getBancos(req, res) {
        banco_ensayos_1.default.find({}).exec((error, data) => {
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
    static updateBanco(req, res) {
        let { _id, numero, identificacion, tipo, automatico, lineas, medidores, descripcion, status } = req.body;
        banco_ensayos_1.default.updateOne({ '_id': _id }, { $set: {
                numero: numero,
                identificacion: identificacion,
                tipo: tipo,
                automatico: automatico,
                lineas: lineas,
                medidores: medidores,
                descripcion: descripcion,
                status: status
            } }).exec((error, data) => {
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
    static getCaudal(req, res) {
        instrumentos_1.default.find({
            'propiedad_uno': 'Volumen'
        }).exec((error, data) => {
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
    static setCalibracion(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { _id, proxima, certificado, fecha_calibracion, trazabilidad, error_indicacion, error_indicacion_anterior, incertidumbre, division_escala, correcion_escala, incertidumbre_escala, factor_cubrimiento, parametro_referencia, item } = req.body;
            let b = yield InstrumentosController.newCalibracion(_id, proxima, certificado, fecha_calibracion, trazabilidad, error_indicacion, incertidumbre, correcion_escala, incertidumbre_escala, factor_cubrimiento, parametro_referencia, error_indicacion_anterior, division_escala).then((data) => {
                return data;
            }).catch((error) => {
                return error;
            });
            instrumentos_1.default.updateOne({ "_id": _id }, {
                $set: {
                    certificado,
                    fuente: trazabilidad,
                    fecha_calibracion
                }
            }).exec((err, datadb) => {
                if (err) {
                    console.log(err);
                }
                if (!datadb) {
                    return res.status(401).json({
                        ok: false,
                        message: "Error "
                    });
                }
                if (datadb) {
                    return res.status(200).json({
                        ok: true
                    });
                }
            });
        });
    }
    static newCalibracion(instrumento, proxima, certificado, fecha_calibracion, trazabilidad, error_indicacion, incertidumbre, correcion_escala, incertidumbre_escala, factor_cubrimiento, parametro_referencia, error_indicacion_anterior, division_escala) {
        return new Promise((resolve, reject) => {
            let a = new calibraciones_1.default({
                instrumento,
                proxima,
                certificado,
                fecha_calibracion,
                trazabilidad,
                error_indicacion,
                error_indicacion_anterior,
                incertidumbre,
                division_escala,
                correcion_escala,
                incertidumbre_escala,
                factor_cubrimiento,
                parametro_referencia
            });
            a.save((err, datadb) => {
                if (err) {
                    console.log(err);
                }
                if (!datadb) {
                    reject(false);
                }
                if (datadb) {
                    resolve(true);
                }
            });
        });
    }
    static getOneCalibracion(req, res) {
        let _id = req.params.id;
        calibraciones_1.default.find({ 'instrumento': _id }).exec((error, data) => {
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
    static DeletehistoricoCalibracion(req, res) {
        let id = req.params.id;
        calibraciones_1.default.deleteOne({ "_id": id }).exec((error, data) => {
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
}
exports.default = InstrumentosController;
