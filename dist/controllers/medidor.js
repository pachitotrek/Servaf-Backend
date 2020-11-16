"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medidores_1 = __importDefault(require("../models/medidores"));
const ntc1994_1 = __importDefault(require("../models/ntc1994"));
const ntc2016_1 = __importDefault(require("../models/ntc2016"));
class MedidorCalibradoController {
    static getCalibrados(req, res) {
        let { serial } = req.body;
        let serie = serial || "0";
        if (serie == "0") {
            medidores_1.default.find({ "status": 'CLOSED' }).populate({
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
        else {
            medidores_1.default.find({ "status": 'CLOSED', "datos.serie": serie }).populate({
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
    }
    static editarAmbientales(req, res) {
        let { datos, id } = req.body;
        medidores_1.default.updateOne({ "_id": id, 'ambientales._id': datos._id }, {
            $set: {
                'ambientales.$.humedad': datos.humedad,
                'ambientales.$.temp_ambiente': datos.temp_ambiente,
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
    static editarPrueba(req, res) {
        let { datos, id, tipo } = req.body;
        if (tipo == '1') {
            medidores_1.default.updateOne({ "_id": id, 'q1._id': datos._id }, {
                $set: {
                    'q1.$.inicial': datos.inicial,
                    'q1.$.final': datos.final,
                    'q1.$.repeticion': datos.repeticion,
                    'q1.$.caudal': datos.caudal,
                    'q1.$.pentrada': datos.pentrada,
                    'q1.$.psalida': datos.psalida,
                    'q1.$.tempagua': datos.tempagua,
                    'q1.$.temprvm': datos.temprvm,
                    'q1.$.volumenrvm': datos.volumenrvm,
                    'q1.$.time': datos.time
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
            medidores_1.default.updateOne({ "_id": id, 'q2._id': datos._id }, {
                $set: {
                    'q2.$.inicial': datos.inicial,
                    'q2.$.final': datos.final,
                    'q2.$.repeticion': datos.repeticion,
                    'q2.$.caudal': datos.caudal,
                    'q2.$.pentrada': datos.pentrada,
                    'q2.$.psalida': datos.psalida,
                    'q2.$.tempagua': datos.tempagua,
                    'q2.$.temprvm': datos.temprvm,
                    'q2.$.volumenrvm': datos.volumenrvm,
                    'q2.$.time': datos.time
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
            medidores_1.default.updateOne({ "_id": id, 'q3._id': datos._id }, {
                $set: {
                    'q3.$.inicial': datos.inicial,
                    'q3.$.final': datos.final,
                    'q3.$.repeticion': datos.repeticion,
                    'q3.$.caudal': datos.caudal,
                    'q3.$.pentrada': datos.pentrada,
                    'q3.$.psalida': datos.psalida,
                    'q3.$.tempagua': datos.tempagua,
                    'q3.$.temprvm': datos.temprvm,
                    'q3.$.volumenrvm': datos.volumenrvm,
                    'q3.$.time': datos.time
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
        else if (tipo == '4') {
            medidores_1.default.updateOne({ "_id": id, 'q4._id': datos._id }, {
                $set: {
                    'q4.$.inicial': datos.inicial,
                    'q4.$.final': datos.final,
                    'q4.$.repeticion': datos.repeticion,
                    'q4.$.caudal': datos.caudal,
                    'q4.$.pentrada': datos.pentrada,
                    'q4.$.psalida': datos.psalida,
                    'q4.$.tempagua': datos.tempagua,
                    'q4.$.temprvm': datos.temprvm,
                    'q4.$.volumenrvm': datos.volumenrvm,
                    'q4.$.time': datos.time
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
    }
    static addnominal(req, res) {
        let { diametro, clase } = req.body;
        let a = new ntc1994_1.default({
            diametro,
            clase
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
            if (data) {
                return res.status(200).json({
                    ok: true,
                    data
                });
            }
        });
    }
    static pushvalor(req, res) {
        let { id, prueba, caudal } = req.body;
        ntc1994_1.default.updateOne({ "_id": id }, {
            $push: {
                valores: [
                    {
                        prueba,
                        caudal
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
    static addnominaldos(req, res) {
        let { diametro, relacion } = req.body;
        let a = new ntc2016_1.default({
            diametro,
            relacion
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
            if (data) {
                return res.status(200).json({
                    ok: true,
                    data
                });
            }
        });
    }
    static pushvalordos(req, res) {
        let { id, prueba, caudal } = req.body;
        ntc2016_1.default.updateOne({ "_id": id }, {
            $push: {
                valores: [
                    {
                        prueba,
                        caudal
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
    static getNominaluno(req, res) {
        let clase = req.params.clase;
        let diametro = req.params.diametro;
        ntc1994_1.default.findOne({ clase: clase, diametro: diametro }).exec((error, data) => {
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
    static getNominaldos(req, res) {
        let clase = req.params.clase;
        let diametro = req.params.diametro;
        ntc2016_1.default.findOne({ relacion: clase, diametro: diametro }).exec((error, data) => {
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
exports.default = MedidorCalibradoController;
