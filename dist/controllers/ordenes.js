"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const entrada_1 = __importDefault(require("../models/entrada"));
const medidores_1 = __importDefault(require("../models/medidores"));
const modelos_1 = __importDefault(require("../models/modelos"));
const marcas_1 = __importDefault(require("../models/marcas"));
const incidencias_1 = __importDefault(require("../models/incidencias"));
const trabajo_1 = __importDefault(require("../models/trabajo"));
class OrdenesController {
    static CrearOrdenEntrada(req, res) {
        let { orden, cliente, norma, q3, precision, pmaxp, pperdida, q3q1, q2q1, clasetemp, aguasarriba, aguasabajo, tipo, principio, posicion, diametro, rango, escala, creado } = req.body;
        let q1 = q3 / q3q1;
        let q2 = 1.6 * q1;
        let q4 = 1.25 * q3;
        let a = new entrada_1.default({
            orden,
            cliente,
            norma,
            precision,
            pmaxp,
            q1,
            q2,
            q3,
            q4,
            diametro,
            clasetemp,
            pperdida,
            rango,
            aguasabajo,
            aguasarriba,
            tipo,
            principio,
            posicion,
            escala,
            creado
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
    static GetConsecutivo(req, res) {
        entrada_1.default.find().limit(1).sort({ 'orden': -1 }).exec((error, data) => {
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
    static crearMedidor(req, res) {
        let { orden, fabricacion, marca, modelo, serie, lectura, incidencias, creado } = req.body;
        let a = new medidores_1.default({
            orden,
            fabricacion,
            marca: marca.titulo,
            modelo: modelo.titulo,
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
    static crearModelo(req, res) {
        let { titulo } = req.body;
        let a = new modelos_1.default({
            titulo
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
    static crearMarca(req, res) {
        let { titulo } = req.body;
        let a = new marcas_1.default({
            titulo
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
    static crearIncidencia(req, res) {
        let { titulo } = req.body;
        let a = new incidencias_1.default({
            titulo
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
    static GetModelos(req, res) {
        modelos_1.default.find().exec((error, data) => {
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
    static GetMarcas(req, res) {
        marcas_1.default.find({}).exec((error, data) => {
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
    static GetIncidencias(req, res) {
        incidencias_1.default.find({}).exec((error, data) => {
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
    static GetMedidoresOrden(req, res) {
        let id = req.params.id;
        medidores_1.default.find({ "orden": id, "status": "OPEN" }).exec((error, data) => {
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
    static DeleteMedidoresOrden(req, res) {
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
    static GetOrden(req, res) {
        let id = req.params.id;
        entrada_1.default.find({ "_id": id }).populate('cliente').populate('medidores').populate('creado').exec((error, data) => {
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
    static GetOrdenOpen(req, res) {
        let status = "OPEN";
        entrada_1.default.find({ "status": status }).populate('cliente').populate('creado').exec((error, data) => {
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
    static GetOrdenOpenOne(req, res) {
        let id = req.params.id;
        entrada_1.default.find({ "_id": id, "status": "OPEN" }).populate('cliente').exec((error, data) => {
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
    static GetOrdenTrabajo(req, res) {
        let id = req.params.id;
        trabajo_1.default.find({ "_id": id }).populate('cliente').populate('ordenante').populate('encargado').populate('banco')
            .populate({
            path: 'instrumentos_q1.humedad',
            populate: { path: 'humedad' }
        })
            .populate({
            path: 'instrumentos_q1.presion_entrada',
            populate: { path: 'presion_entrada' }
        })
            .populate({
            path: 'instrumentos_q1.presion_salida',
            populate: { path: 'presion_salida' }
        })
            .populate({
            path: 'instrumentos_q1.rvm',
            populate: { path: 'rvm' }
        })
            .populate({
            path: 'instrumentos_q1.t_entrada_agua',
            populate: { path: 't_entrada_agua' }
        })
            .populate({
            path: 'instrumentos_q1.temp_ambiente',
            populate: { path: 'temp_ambiente' }
        })
            .populate({
            path: 'instrumentos_q1.tiempo',
            populate: { path: 'tiempo' }
        })
            .populate({
            path: 'instrumentos_q1.caudal',
            populate: { path: 'caudal' }
        })
            .populate({
            path: 'instrumentos_q1.temprvm',
            populate: { path: 'temprvm' }
        })
            .populate({
            path: 'instrumentos_q2.humedad',
            populate: { path: 'humedad' }
        })
            .populate({
            path: 'instrumentos_q2.presion_entrada',
            populate: { path: 'presion_entrada' }
        })
            .populate({
            path: 'instrumentos_q2.presion_salida',
            populate: { path: 'presion_salida' }
        })
            .populate({
            path: 'instrumentos_q2.rvm',
            populate: { path: 'rvm' }
        })
            .populate({
            path: 'instrumentos_q2.t_entrada_agua',
            populate: { path: 't_entrada_agua' }
        })
            .populate({
            path: 'instrumentos_q2.temp_ambiente',
            populate: { path: 'temp_ambiente' }
        })
            .populate({
            path: 'instrumentos_q2.tiempo',
            populate: { path: 'tiempo' }
        })
            .populate({
            path: 'instrumentos_q2.caudal',
            populate: { path: 'caudal' }
        })
            .populate({
            path: 'instrumentos_q2.temprvm',
            populate: { path: 'temprvm' }
        })
            .populate({
            path: 'instrumentos_q3.humedad',
            populate: { path: 'humedad' }
        })
            .populate({
            path: 'instrumentos_q3.presion_entrada',
            populate: { path: 'presion_entrada' }
        })
            .populate({
            path: 'instrumentos_q3.presion_salida',
            populate: { path: 'presion_salida' }
        })
            .populate({
            path: 'instrumentos_q3.rvm',
            populate: { path: 'rvm' }
        })
            .populate({
            path: 'instrumentos_q3.t_entrada_agua',
            populate: { path: 't_entrada_agua' }
        })
            .populate({
            path: 'instrumentos_q3.temp_ambiente',
            populate: { path: 'temp_ambiente' }
        })
            .populate({
            path: 'instrumentos_q3.tiempo',
            populate: { path: 'tiempo' }
        })
            .populate({
            path: 'instrumentos_q3.caudal',
            populate: { path: 'caudal' }
        })
            .populate({
            path: 'instrumentos_q3.temprvm',
            populate: { path: 'temprvm' }
        })
            .populate('instrumentos').exec((error, data) => {
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
exports.default = OrdenesController;
