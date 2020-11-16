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
const trabajo_1 = __importDefault(require("../models/trabajo"));
const medidor_trabajo_1 = __importDefault(require("../models/medidor_trabajo"));
const medidores_1 = __importDefault(require("../models/medidores"));
const corrida_1 = __importDefault(require("../models/corrida"));
const mefinales_1 = __importDefault(require("../models/mefinales"));
const tipos_1 = __importDefault(require("../models/tipos"));
const trabajo_instrumentos_1 = __importDefault(require("../models/trabajo_instrumentos"));
const entrada_1 = __importDefault(require("../models/entrada"));
const resultados_1 = __importDefault(require("../models/resultados"));
const medidores_2 = __importDefault(require("../models/medidores"));
const ingresos_1 = __importDefault(require("./ingresos"));
const generate_1 = __importDefault(require("./generate"));
const path_1 = __importDefault(require("path"));
const moment_1 = __importDefault(require("moment"));
const fs_1 = __importDefault(require("fs"));
class TrabajoController {
    static crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { orden, ordenante, encargado, fecha_programacion, hora_programacion, ensayo, banco, duracion, repeticiones, coef_rvm, coef_agua, compre_agua, incertidumbre_rvm, incertidumbre_agua, incertidumbre_compre_agua, medidores } = req.body;
            let datos = {
                repeticiones,
                coef_rvm,
                coef_agua,
                compre_agua,
                incertidumbre_rvm,
                incertidumbre_agua,
                incertidumbre_compre_agua,
                banco
            };
            let a = new trabajo_1.default({
                orden,
                ordenante,
                encargado,
                tipo: ensayo,
                banco,
                fecha_programacion,
                hora_programacion,
                duracion,
                medidores
            });
            a.save((err, data) => __awaiter(this, void 0, void 0, function* () {
                if (err) {
                    console.log(err);
                }
                if (!data) {
                    return res.status(401).json({
                        ok: false,
                        message: "Error "
                    });
                }
                if (data) {
                    yield medidores.forEach((e) => {
                        ingresos_1.default.updateparametros(e, datos, data._id, ordenante, encargado).then((data) => {
                            return true;
                        }).catch((error) => {
                            return error;
                        });
                    });
                    return res.status(200).json({
                        ok: true,
                        data
                    });
                }
            }));
        });
    }
    static GetConsecutivo(req, res) {
        trabajo_1.default.find().limit(1).sort({ 'orden': -1 }).exec((error, data) => __awaiter(this, void 0, void 0, function* () {
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
                let numero = (yield data[0].orden) + 1;
                return res.status(200).json({
                    ok: true,
                    numero: numero
                });
            }
        }));
    }
    static GetOrden(req, res) {
        let id = req.params.id;
        trabajo_1.default.find({ "_id": id }).exec((error, data) => {
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
    static addInsOrdenes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = req.body;
            let medidores = body.medidores;
            let instrumentos = body.instrumentos;
            let q1 = body.q1;
            let q2 = body.q2;
            let q3 = body.q3;
            let q4 = body.q4;
            if (q4) {
                yield medidores.forEach((e) => __awaiter(this, void 0, void 0, function* () {
                    let id = e;
                    yield TrabajoController.addInstrumento2(id, instrumentos, q1, q2, q3, q4).then((data) => {
                        return true;
                    }).catch((error) => {
                        return false;
                    });
                }));
                let pruebas = [
                    {
                        tipo: "Q1", status: "true"
                    },
                    {
                        tipo: "Q2", status: "true"
                    },
                    {
                        tipo: "Q3", status: "true"
                    },
                    {
                        tipo: "Q4", status: "true"
                    }
                ];
                trabajo_1.default.updateOne({ '_id': body.id }, {
                    $set: {
                        instrumentos: instrumentos,
                        pruebas: pruebas,
                        instrumentos_q1: {
                            humedad: q1.humedad,
                            presion_entrada: q1.presion_entrada,
                            presion_salida: q1.presion_salida,
                            rvm: q1.rvm,
                            t_entrada_agua: q1.t_entrada_agua,
                            temp_ambiente: q1.temp_ambiente,
                            tiempo: q1.tiempo,
                            caudal: q1.caudal,
                            temprvm: q1.temprvm
                        },
                        instrumentos_q2: {
                            humedad: q2.humedad,
                            presion_entrada: q2.presion_entrada,
                            presion_salida: q2.presion_salida,
                            rvm: q2.rvm,
                            t_entrada_agua: q2.t_entrada_agua,
                            temp_ambiente: q2.temp_ambiente,
                            tiempo: q2.tiempo,
                            caudal: q2.caudal,
                            temprvm: q2.temprvm
                        },
                        instrumentos_q3: {
                            humedad: q3.humedad,
                            presion_entrada: q3.presion_entrada,
                            presion_salida: q3.presion_salida,
                            rvm: q3.rvm,
                            t_entrada_agua: q3.t_entrada_agua,
                            temp_ambiente: q3.temp_ambiente,
                            tiempo: q3.tiempo,
                            caudal: q3.caudal,
                            temprvm: q3.temprvm
                        },
                        instrumentos_q4: {
                            humedad: q3.humedad,
                            presion_entrada: q3.presion_entrada,
                            presion_salida: q3.presion_salida,
                            rvm: q3.rvm,
                            t_entrada_agua: q3.t_entrada_agua,
                            temp_ambiente: q3.temp_ambiente,
                            tiempo: q3.tiempo,
                            caudal: q3.caudal,
                            temprvm: q3.temprvm
                        }
                    }
                }).exec((error, data) => {
                    if (error) {
                        return res.status(500).json({
                            ok: false,
                            error
                        });
                    }
                    if (!data) {
                        return res.status(400).json({
                            ok: false,
                            message: 'error'
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
            else {
                yield medidores.forEach((e) => __awaiter(this, void 0, void 0, function* () {
                    let id = e;
                    yield TrabajoController.addInstrumento(id, instrumentos, q1, q2, q3).then((data) => {
                        return true;
                    }).catch((error) => {
                        return false;
                    });
                }));
                let pruebas = [
                    {
                        tipo: "Q1", status: "true"
                    },
                    {
                        tipo: "Q2", status: "true"
                    },
                    {
                        tipo: "Q3", status: "true"
                    }
                ];
                trabajo_1.default.updateOne({ '_id': body.id }, {
                    $set: {
                        instrumentos: instrumentos,
                        pruebas: pruebas,
                        instrumentos_q1: {
                            humedad: q1.humedad,
                            presion_entrada: q1.presion_entrada,
                            presion_salida: q1.presion_salida,
                            rvm: q1.rvm,
                            t_entrada_agua: q1.t_entrada_agua,
                            temp_ambiente: q1.temp_ambiente,
                            tiempo: q1.tiempo,
                            caudal: q1.caudal,
                            temprvm: q1.temprvm
                        },
                        instrumentos_q2: {
                            humedad: q2.humedad,
                            presion_entrada: q2.presion_entrada,
                            presion_salida: q2.presion_salida,
                            rvm: q2.rvm,
                            t_entrada_agua: q2.t_entrada_agua,
                            temp_ambiente: q2.temp_ambiente,
                            tiempo: q2.tiempo,
                            caudal: q2.caudal,
                            temprvm: q2.temprvm
                        },
                        instrumentos_q3: {
                            humedad: q3.humedad,
                            presion_entrada: q3.presion_entrada,
                            presion_salida: q3.presion_salida,
                            rvm: q3.rvm,
                            t_entrada_agua: q3.t_entrada_agua,
                            temp_ambiente: q3.temp_ambiente,
                            tiempo: q3.tiempo,
                            caudal: q3.caudal,
                            temprvm: q3.temprvm
                        }
                    }
                }).exec((error, data) => {
                    if (error) {
                        return res.status(500).json({
                            ok: false,
                            error
                        });
                    }
                    if (!data) {
                        return res.status(400).json({
                            ok: false,
                            message: 'error'
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
        });
    }
    static addInstrumento(id, items, q1, q2, q3) {
        return new Promise((resolve, reject) => {
            medidores_2.default.updateOne({
                '_id': id
            }, {
                $set: {
                    instrumentos: items,
                    status: 'READY',
                    instrumentos_q1: {
                        humedad: q1.humedad,
                        presion_entrada: q1.presion_entrada,
                        presion_salida: q1.presion_salida,
                        rvm: q1.rvm,
                        t_entrada_agua: q1.t_entrada_agua,
                        temp_ambiente: q1.temp_ambiente,
                        tiempo: q1.tiempo,
                        caudal: q1.caudal,
                        temprvm: q1.temprvm
                    },
                    instrumentos_q2: {
                        humedad: q2.humedad,
                        presion_entrada: q2.presion_entrada,
                        presion_salida: q2.presion_salida,
                        rvm: q2.rvm,
                        t_entrada_agua: q2.t_entrada_agua,
                        temp_ambiente: q2.temp_ambiente,
                        tiempo: q2.tiempo,
                        caudal: q2.caudal,
                        temprvm: q2.temprvm
                    },
                    instrumentos_q3: {
                        humedad: q3.humedad,
                        presion_entrada: q3.presion_entrada,
                        presion_salida: q3.presion_salida,
                        rvm: q3.rvm,
                        t_entrada_agua: q3.t_entrada_agua,
                        temp_ambiente: q3.temp_ambiente,
                        tiempo: q3.tiempo,
                        caudal: q3.caudal,
                        temprvm: q3.temprvm
                    }
                }
            }).exec((error, data) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    reject(false);
                }
                if (data) {
                    console.log(data);
                    resolve(true);
                }
            });
        });
    }
    static addInstrumento2(id, items, q1, q2, q3, q4) {
        return new Promise((resolve, reject) => {
            medidores_2.default.updateOne({
                '_id': id
            }, {
                $set: {
                    instrumentos: items,
                    status: 'READY',
                    instrumentos_q1: {
                        humedad: q1.humedad,
                        presion_entrada: q1.presion_entrada,
                        presion_salida: q1.presion_salida,
                        rvm: q1.rvm,
                        t_entrada_agua: q1.t_entrada_agua,
                        temp_ambiente: q1.temp_ambiente,
                        tiempo: q1.tiempo,
                        caudal: q1.caudal,
                        temprvm: q1.temprvm
                    },
                    instrumentos_q2: {
                        humedad: q2.humedad,
                        presion_entrada: q2.presion_entrada,
                        presion_salida: q2.presion_salida,
                        rvm: q2.rvm,
                        t_entrada_agua: q2.t_entrada_agua,
                        temp_ambiente: q2.temp_ambiente,
                        tiempo: q2.tiempo,
                        caudal: q2.caudal,
                        temprvm: q2.temprvm
                    },
                    instrumentos_q3: {
                        humedad: q3.humedad,
                        presion_entrada: q3.presion_entrada,
                        presion_salida: q3.presion_salida,
                        rvm: q3.rvm,
                        t_entrada_agua: q3.t_entrada_agua,
                        temp_ambiente: q3.temp_ambiente,
                        tiempo: q3.tiempo,
                        caudal: q3.caudal,
                        temprvm: q3.temprvm
                    },
                    instrumentos_q4: {
                        humedad: q4.humedad,
                        presion_entrada: q4.presion_entrada,
                        presion_salida: q4.presion_salida,
                        rvm: q4.rvm,
                        t_entrada_agua: q4.t_entrada_agua,
                        temp_ambiente: q4.temp_ambiente,
                        tiempo: q4.tiempo,
                        caudal: q4.caudal,
                        temprvm: q4.temprvm
                    }
                }
            }).exec((error, data) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    reject(false);
                }
                if (data) {
                    console.log(data);
                    resolve(true);
                }
            });
        });
    }
    static pushCondiciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = req.body;
            let medidores = body.medidores;
            let humedad = body.humedad;
            let ambiente = body.temp;
            let prueba = body.prueba;
            yield medidores.forEach((e) => __awaiter(this, void 0, void 0, function* () {
                let id = e;
                yield TrabajoController.addcondicion(id, ambiente, humedad, prueba).then((data) => {
                    return true;
                }).catch((error) => {
                    return false;
                });
            }));
            return res.status(201).json({
                ok: true
            });
        });
    }
    static addcondicion(id, ambiente, humedad, prueba) {
        return new Promise((resolve, reject) => {
            medidores_2.default.updateOne({
                '_id': id
            }, {
                $push: {
                    ambientales: [
                        {
                            temp_ambiente: ambiente,
                            humedad: humedad,
                            prueba: prueba
                        }
                    ]
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
    static GetMedidor(req, res) {
        let id = req.params.id;
        medidores_2.default.find({ "_id": id }).populate({
            path: 'datos.marca',
            populate: { path: 'marca' }
        })
            .populate({
            path: 'datos.modelo',
            populate: { path: 'modelo' }
        })
            .populate('ingreso', 'nombre apellido cargo').populate('calibro', 'nombre apellido cargo')
            .populate('cliente').populate('instrumentos').populate('orden_trabajo').populate('orden_entrada').exec((error, data) => {
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
    static GetMedidor2(req, res) {
        let id = req.params.id;
        medidores_2.default.find({ "_id": id }).populate({
            path: 'datos.marca',
            populate: { path: 'marca' }
        })
            .populate({
            path: 'datos.modelo',
            populate: { path: 'modelo' }
        }).populate('cliente').populate('instrumentos').exec((error, data) => {
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
    static GetMedidor3(req, res) {
        let id = req.params.id;
        medidores_2.default.find({ "_id": id }).populate({
            path: 'datos.marca',
            populate: { path: 'marca' }
        })
            .populate({
            path: 'datos.modelo',
            populate: { path: 'modelo' }
        }).populate('cliente').populate('instrumentos').populate('orden_entrada').populate('orden_trabajo').exec((error, data) => {
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
    static SetMedidor(req, res) {
        let { tipo, orden, repeticion, caudal, pentrada, psalida, tempagua, temprvm, volumenrvm, horas, minutos, segundos, inicial, final, medidor } = req.body;
        let a = parseInt(horas) * 3600;
        let b = parseInt(minutos) * 60;
        let c = parseInt(segundos);
        let time = (a + b + c);
        if (tipo == 'Q1') {
            medidores_2.default.updateOne({ "_id": medidor }, {
                $push: {
                    q1: [
                        {
                            inicial,
                            final,
                            repeticion,
                            caudal,
                            pentrada: pentrada * 100,
                            psalida: psalida * 100,
                            tempagua,
                            temprvm,
                            volumenrvm: volumenrvm / 1000,
                            time
                        }
                    ]
                }
            }).exec((error, data) => {
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
        else if (tipo == 'Q2') {
            medidores_2.default.updateOne({ "_id": medidor }, {
                $push: {
                    q2: [
                        {
                            inicial,
                            final,
                            repeticion,
                            caudal,
                            pentrada: pentrada * 100,
                            psalida: psalida * 100,
                            tempagua,
                            temprvm,
                            volumenrvm: volumenrvm / 1000,
                            time
                        }
                    ]
                }
            }).exec((error, data) => {
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
        else if (tipo == 'Q3') {
            medidores_2.default.updateOne({ "_id": medidor }, {
                $push: {
                    q3: [
                        {
                            inicial,
                            final,
                            repeticion,
                            caudal,
                            pentrada: pentrada * 100,
                            psalida: psalida * 100,
                            tempagua,
                            temprvm,
                            volumenrvm: volumenrvm / 1000,
                            time
                        }
                    ]
                }
            }).exec((error, data) => {
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
        else if (tipo == 'Q4') {
            medidores_2.default.updateOne({ "_id": medidor }, {
                $push: {
                    q4: [
                        {
                            inicial,
                            final,
                            repeticion,
                            caudal,
                            pentrada: pentrada * 100,
                            psalida: psalida * 100,
                            tempagua,
                            temprvm,
                            volumenrvm: volumenrvm / 1000,
                            time
                        }
                    ]
                }
            }).exec((error, data) => {
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
        else {
            return res.status(400).json({
                ok: false
            });
        }
    }
    static SetEditMedidor(req, res) {
        let { tipo, repeticion, medidor } = req.body;
        if (tipo == 'Q1') {
            medidores_2.default.updateOne({ "_id": medidor }, {
                $pull: {
                    q1: {
                        repeticion: repeticion
                    }
                }
            }).exec((error, data) => {
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
        else if (tipo == 'Q2') {
            medidores_2.default.updateOne({ "_id": medidor }, {
                $pull: {
                    q2: { tipo: tipo, repeticion: repeticion }
                }
            }).exec((error, data) => {
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
        else if (tipo == 'Q3') {
            medidores_2.default.updateOne({ "_id": medidor }, {
                $pull: {
                    q3: { tipo: tipo, repeticion: repeticion }
                }
            }).exec((error, data) => {
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
        else if (tipo == 'Q4') {
            medidores_2.default.updateOne({ "_id": medidor }, {
                $pull: {
                    q4: { tipo: tipo, repeticion: repeticion }
                }
            }).exec((error, data) => {
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
        else {
            return res.status(400).json({
                ok: false
            });
        }
    }
    static CerrarOrden(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { id } = req.body;
            let datos = yield TrabajoController.cerrargetMedidores(id).then((data) => {
                return data;
            }).catch((error) => {
                return false;
            });
            let medidores = datos[0].medidores;
            yield medidores.forEach((e) => __awaiter(this, void 0, void 0, function* () {
                yield generate_1.default.generarInforme(e).then((data) => {
                    return data;
                }).catch((error) => {
                    return false;
                });
            }));
            trabajo_1.default.updateOne({
                '_id': id
            }, {
                $set: {
                    status: 'CLOSED'
                }
            }).exec((error, data) => {
                if (error) {
                    console.log("HOLA ERROR");
                    return res.status(501).json({
                        ok: false
                    });
                }
                if (!data) {
                    console.log("HOLA ERROR NO SE ENCUENTRA");
                    return res.status(501).json({
                        ok: false
                    });
                }
                if (data) {
                    console.log(data);
                    return res.status(201).json({
                        ok: true
                    });
                }
            });
        });
    }
    static cerrargetMedidores(id) {
        return new Promise((resolve, reject) => {
            trabajo_1.default.find({
                '_id': id
            }).exec((error, data) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    reject(false);
                }
                if (data) {
                    resolve(data);
                }
            });
        });
    }
    static cerrarmedidordos(id) {
        return new Promise((resolve, reject) => {
            medidores_2.default.updateOne({
                '_id': id
            }, {
                $set: {
                    status: "CLOSED"
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
    static GetOrdenesOpen(req, res) {
        trabajo_1.default.find({ "status": "OPEN" }).populate('entrada').exec((error, data) => {
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
    static GetOrdenesClose(req, res) {
        let { inicio, fin } = req.body;
        let fecha_inicio = inicio || "2010-02-08T09";
        let fecha_fin = fin || "2050-02-08T09";
        let f_inicio = moment_1.default(fecha_inicio).format();
        let f_fin = moment_1.default(fecha_fin).format();
        trabajo_1.default.find({ "status": "CLOSED", fecha: {
                $gte: f_inicio,
                $lte: f_fin,
            } }).populate({
            path: 'entrada',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: { path: 'marca' }
        }).exec((error, data) => {
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
    static GetOrdenClose(req, res) {
        let id = req.params.id;
        trabajo_1.default.find({ "_id": id }).populate('encargado')
            .populate('banco')
            .exec((error, data) => {
            if (error) {
                console.log(error);
                // res.status(500).json({
                //     ok: false,
                //     error
                // });
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
    static createhoja(id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            let q1file = path_1.default.resolve(__dirname, `../../assets/q1.xlsx`);
            let q2file = path_1.default.resolve(__dirname, `../../assets/q2.xlsx`);
            let q3file = path_1.default.resolve(__dirname, `../../assets/q3.xlsx`);
            let outputq1 = path_1.default.resolve(__dirname, `../../assets/files/${id}-q1.xlsx`);
            let outputq2 = path_1.default.resolve(__dirname, `../../assets/files/${id}-q2.xlsx`);
            let outputq3 = path_1.default.resolve(__dirname, `../../assets/files/${id}-q3.xlsx`);
            fs_1.default.copyFile(q1file, outputq1, (error) => {
                if (error) {
                    console.log(error);
                }
            });
            fs_1.default.copyFile(q2file, outputq2, (error) => {
                if (error) {
                    console.log(error);
                }
            });
            fs_1.default.copyFile(q3file, outputq3, (error) => {
                if (error) {
                    console.log(error);
                }
            });
            // let documentoq1 = xlsx.readFile(q1file);
            // let documentoq2 = xlsx.readFile(q2file);
            // let documentoq3 = xlsx.readFile(q3file);        
            // let a = await xlsx.writeFile(documentoq1, outputq1);
            // let b = await xlsx.writeFile(documentoq2, outputq2);
            // let c = await xlsx.writeFile(documentoq3, outputq3);
            resolve(true);
        }));
    }
    static updatetest(req, res) {
        let id = req.params.id;
        let orden = req.params.orden;
        trabajo_1.default.updateOne({ '_id': id }, {
            $pull: {
                pruebas: {
                    tipo: orden
                }
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
    static deleteResultMedidor(req, res) {
        let { tipo, repeticion, medidor } = req.body;
        if (tipo == '1') {
            medidores_2.default.updateOne({ "_id": medidor }, {
                $pull: {
                    q1: {
                        _id: repeticion
                    }
                }
            }).exec((error, data) => {
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
        else if (tipo == '2') {
            medidores_2.default.updateOne({ "_id": medidor }, {
                $pull: {
                    q2: { _id: repeticion }
                }
            }).exec((error, data) => {
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
        else if (tipo == '3') {
            medidores_2.default.updateOne({ "_id": medidor }, {
                $pull: {
                    q3: { _id: repeticion }
                }
            }).exec((error, data) => {
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
        else if (tipo == 'Q4') {
            medidores_2.default.updateOne({ "_id": medidor }, {
                $pull: {
                    q4: { tipo: tipo, repeticion: repeticion }
                }
            }).exec((error, data) => {
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
        else {
            return res.status(400).json({
                ok: false
            });
        }
    }
    static closeordentrabajo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { _id } = req.body;
            let close = yield TrabajoController.closeTrabajo(_id).then((data) => {
                return data;
            }).catch((error) => {
                return error;
            });
            if (close) {
                return res.status(201).json({
                    ok: true
                });
            }
        });
    }
    static addMedidores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { seleccionados, id } = req.body;
            var suma = 0;
            yield seleccionados.forEach((e) => __awaiter(this, void 0, void 0, function* () {
                let a = yield TrabajoController.crearMedidor(e, id).then((data) => {
                    return data;
                });
                let d = yield TrabajoController.updateMedidor(e).then((data) => {
                    return data;
                });
                let h = yield TrabajoController.CloseOrdenEntrada(e).then((data) => {
                    return data;
                });
                if (a) {
                    suma++;
                }
            }));
            return res.status(201).json({
                ok: true
            });
        });
    }
    static addInstrumentos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { q1, q2, q3, q4 } = req.body;
            let aq1 = yield TrabajoController.addinstrumento(q1).then((data) => {
                return data;
            });
            let aq2 = yield TrabajoController.addinstrumento(q2).then((data) => {
                return data;
            });
            let aq3 = yield TrabajoController.addinstrumento(q3).then((data) => {
                return data;
            });
            let aq4 = yield TrabajoController.addinstrumento(q4).then((data) => {
                return data;
            });
            return res.status(201).json({
                ok: true
            });
        });
    }
    static addinstrumento(item) {
        return new Promise((resolve, reject) => {
            let { orden, caudal, temprvm, tempagua, volumenrvm, tiempo, presionentrada, tempambiente, humedad, presionsalida } = item;
            let a = new trabajo_instrumentos_1.default({
                orden,
                caudal,
                temprvm,
                tempagua,
                volumenrvm,
                tiempo,
                presionentrada,
                tempambiente,
                humedad,
                presionsalida
            });
            a.save((err, data) => {
                if (err) {
                    console.log(err);
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
    static crearMedidor(item, orden) {
        return new Promise((resolve, reject) => {
            let { fabricacion, marca, modelo, serie, lectura, incidencias, creado } = item;
            let a = new medidor_trabajo_1.default({
                orden: orden,
                fabricacion,
                marca: marca,
                modelo: modelo,
                serie,
                lectura,
                incidencias,
                creado
            });
            a.save((err, data) => {
                if (err) {
                    console.log(err);
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
    static updateMedidor(item) {
        return new Promise((resolve, reject) => {
            let { _id } = item;
            medidores_1.default.updateOne({
                "_id": _id
            }, {
                $set: {
                    "status": "CLOSED"
                }
            }, (err, data) => {
                if (err) {
                    console.log(err);
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
    static CloseOrdenEntrada(item) {
        return new Promise((resolve, reject) => {
            let { orden } = item;
            entrada_1.default.updateOne({
                "_id": orden
            }, {
                $set: {
                    "status": "CLOSED"
                }
            }, (err, data) => {
                if (err) {
                    console.log(err);
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
    static getmedidorestrabajo(req, res) {
        let id = req.params.id;
        medidor_trabajo_1.default.find({ "orden": id }).exec((error, data) => {
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
    static iniciales(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { orden, tipo, repeticion, temp, humedad, caudal, pentrada, psalida, tempagua, temprvm, volumenrvm } = req.body;
            let a = new corrida_1.default({
                orden,
                tipo,
                repeticion,
                temp,
                humedad,
                caudal,
                pentrada: pentrada * 100,
                psalida: psalida * 100,
                tempagua,
                temprvm,
                volumenrvm: volumenrvm / 1000
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
        });
    }
    static final(req, res) {
        let { corrida, medidor, inicial, final } = req.body;
        let a = new mefinales_1.default({
            corrida,
            medidor,
            inicial,
            final
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
    static savetime(req, res) {
        let { _id, horas, minutos, segundos } = req.body;
        let a = parseInt(horas) * 3600;
        let b = parseInt(minutos) * 60;
        let c = parseInt(segundos);
        let time = (a + b + c) / 3600;
        corrida_1.default.updateOne({
            "_id": _id
        }, {
            $set: {
                "time": time
            }
        }, (err, data) => {
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
    static getstate(req, res) {
        let id = req.params.id;
        corrida_1.default.find({ "orden": id }).exec((error, data) => {
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
    static createPruebas(id, tipo) {
        return new Promise((resolve, reject) => {
            let a = new tipos_1.default({
                tipo: tipo,
                orden: id
            });
            a.save({}, (err, data) => {
                if (err) {
                    console.log(err);
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
    static getpruebas(req, res) {
        let id = req.params.id;
        tipos_1.default.find({ "orden": id }).exec((error, data) => {
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
    static updatePruebas(req, res) {
        let { orden, tipo } = req.body;
        tipos_1.default.deleteOne({
            orden, tipo
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
    static closeTrabajo(id) {
        return new Promise((resolve, reject) => {
            trabajo_1.default.updateOne({
                "_id": id
            }, {
                $set: {
                    "status": "CLOSED"
                }
            }, (err, data) => {
                if (err) {
                    console.log(err);
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
    static getResultados(req, res) {
        let id = req.params.id;
        resultados_1.default.find({ "orden": id }).exec((error, data) => {
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
exports.default = TrabajoController;
