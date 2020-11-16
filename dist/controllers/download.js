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
class DownloadController {
    static download(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let tipo = req.params.tipo;
            let id = req.params.id;
            if (tipo == 'certificado') {
                let medidor = yield DownloadController.getMedidor(id).then((data) => {
                    return data;
                }).catch((error) => {
                    return false;
                });
                let cliente = medidor.cliente;
                let resultados = medidor.resultados;
                let metrologicas = medidor.metrologicas;
                let datos = medidor.datos;
                let instrumentos = medidor.instrumentos;
                let temp_ambiente = [];
                let humedad = [];
                let ambientales = [];
                ambientales = medidor.ambientales;
                let q1 = medidor.q1;
                let q2 = medidor.q2;
                let q3 = medidor.q3;
                let q4 = medidor.q4;
                let caudalq1 = [];
                let caudalq2 = [];
                let caudalq3 = [];
                let caudalq4 = [];
                let pentradaq1 = [];
                let pentradaq2 = [];
                let pentradaq3 = [];
                let pentradaq4 = [];
                let psalidaq1 = [];
                let psalidaq2 = [];
                let psalidaq3 = [];
                let psalidaq4 = [];
                let tlineaq1 = [];
                let tlineaq2 = [];
                let tlineaq3 = [];
                let tlineaq4 = [];
                let trvmq1 = [];
                let trvmq2 = [];
                let trvmq3 = [];
                let trvmq4 = [];
                let caudalq4_min = 0;
                let caudalq4_max = 0;
                let caudalq4_pro = 0;
                //presion entrada
                let pentradaq4_min = 0;
                let pentradaq4_max = 0;
                let pentradaq4_pro = 0;
                //presion salida
                let psalidaq4_min = 0;
                let psalidaq4_max = 0;
                let psalidaq4_pro = 0;
                //temperatura linea
                let tlineaq4_min = 0;
                let tlineaq4_max = 0;
                let tlineaq4_pro = 0;
                //temperatura rvm
                let trvmq4_min = 0;
                let trvmq4_max = 0;
                let trvmq4_pro = 0;
                if (q4.length > 0) {
                    yield q4.forEach((e) => {
                        caudalq4.push(e.caudal);
                        pentradaq4.push(e.pentrada);
                        psalidaq4.push(e.psalida);
                        tlineaq4.push(e.tempagua);
                        trvmq4.push(e.temprvm);
                    });
                    //caudal
                    caudalq4_min = yield Math.min.apply(null, caudalq4);
                    caudalq4_max = yield Math.max.apply(null, caudalq4);
                    let sum18 = yield caudalq4.reduce((previous, current) => current += previous);
                    caudalq4_pro = sum18 / caudalq4.length;
                    //presion entrada
                    pentradaq4_min = yield Math.min.apply(null, pentradaq4);
                    pentradaq4_max = yield Math.max.apply(null, pentradaq4);
                    let sum19 = yield pentradaq4.reduce((previous, current) => current += previous);
                    pentradaq4_pro = sum19 / pentradaq4.length;
                    //presion salida
                    psalidaq4_min = yield Math.min.apply(null, psalidaq4);
                    psalidaq4_max = yield Math.max.apply(null, psalidaq4);
                    let sum20 = yield psalidaq4.reduce((previous, current) => current += previous);
                    psalidaq4_pro = sum20 / psalidaq4.length;
                    //temperatura linea
                    tlineaq4_min = yield Math.min.apply(null, tlineaq4);
                    tlineaq4_max = yield Math.max.apply(null, tlineaq4);
                    let sum21 = yield tlineaq4.reduce((previous, current) => current += previous);
                    tlineaq4_pro = sum21 / tlineaq4.length;
                    //temperatura rvm
                    trvmq4_min = yield Math.min.apply(null, trvmq4);
                    trvmq4_max = yield Math.max.apply(null, trvmq4);
                    let sum22 = yield trvmq4.reduce((previous, current) => current += previous);
                    trvmq4_pro = sum22 / trvmq4.length;
                }
                yield ambientales.forEach((e) => {
                    temp_ambiente.push(e.temp_ambiente);
                    humedad.push(e.humedad);
                });
                yield q1.forEach((e) => {
                    caudalq1.push(e.caudal);
                    pentradaq1.push(e.pentrada);
                    psalidaq1.push(e.psalida);
                    tlineaq1.push(e.tempagua);
                    trvmq1.push(e.temprvm);
                });
                //caudal
                let caudalq1_min = yield Math.min.apply(null, caudalq1);
                let caudalq1_max = yield Math.max.apply(null, caudalq1);
                let sum3 = yield caudalq1.reduce((previous, current) => current += previous);
                let caudalq1_pro = sum3 / caudalq1.length;
                //presion entrada
                let pentradaq1_min = yield Math.min.apply(null, pentradaq1);
                let pentradaq1_max = yield Math.max.apply(null, pentradaq1);
                let sum4 = yield pentradaq1.reduce((previous, current) => current += previous);
                let pentradaq1_pro = sum4 / pentradaq1.length;
                //presion salida
                let psalidaq1_min = yield Math.min.apply(null, psalidaq1);
                let psalidaq1_max = yield Math.max.apply(null, psalidaq1);
                let sum5 = yield psalidaq1.reduce((previous, current) => current += previous);
                let psalidaq1_pro = sum5 / psalidaq1.length;
                //temperatura linea
                let tlineaq1_min = yield Math.min.apply(null, tlineaq1);
                let tlineaq1_max = yield Math.max.apply(null, tlineaq1);
                let sum6 = yield tlineaq1.reduce((previous, current) => current += previous);
                let tlineaq1_pro = sum6 / tlineaq1.length;
                //temperatura rvm
                let trvmq1_min = yield Math.min.apply(null, trvmq1);
                let trvmq1_max = yield Math.max.apply(null, trvmq1);
                let sum7 = yield trvmq1.reduce((previous, current) => current += previous);
                let trvmq1_pro = sum7 / trvmq1.length;
                yield q2.forEach((e) => {
                    caudalq2.push(e.caudal);
                    pentradaq2.push(e.pentrada);
                    psalidaq2.push(e.psalida);
                    tlineaq2.push(e.tempagua);
                    trvmq2.push(e.temprvm);
                });
                //caudal
                let caudalq2_min = yield Math.min.apply(null, caudalq2);
                let caudalq2_max = yield Math.max.apply(null, caudalq2);
                let sum8 = yield caudalq2.reduce((previous, current) => current += previous);
                let caudalq2_pro = sum8 / caudalq2.length;
                //presion entrada
                let pentradaq2_min = yield Math.min.apply(null, pentradaq2);
                let pentradaq2_max = yield Math.max.apply(null, pentradaq2);
                let sum9 = yield pentradaq2.reduce((previous, current) => current += previous);
                let pentradaq2_pro = sum9 / pentradaq2.length;
                //presion salida
                let psalidaq2_min = yield Math.min.apply(null, psalidaq2);
                let psalidaq2_max = yield Math.max.apply(null, psalidaq2);
                let sum10 = yield psalidaq2.reduce((previous, current) => current += previous);
                let psalidaq2_pro = sum10 / psalidaq2.length;
                //temperatura linea
                let tlineaq2_min = yield Math.min.apply(null, tlineaq2);
                let tlineaq2_max = yield Math.max.apply(null, tlineaq2);
                let sum11 = yield tlineaq2.reduce((previous, current) => current += previous);
                let tlineaq2_pro = sum11 / tlineaq2.length;
                //temperatura rvm
                let trvmq2_min = yield Math.min.apply(null, trvmq2);
                let trvmq2_max = yield Math.max.apply(null, trvmq2);
                let sum12 = yield trvmq2.reduce((previous, current) => current += previous);
                let trvmq2_pro = sum12 / trvmq2.length;
                yield q3.forEach((e) => {
                    caudalq3.push(e.caudal);
                    pentradaq3.push(e.pentrada);
                    psalidaq3.push(e.psalida);
                    tlineaq3.push(e.tempagua);
                    trvmq3.push(e.temprvm);
                });
                //caudal
                let caudalq3_min = yield Math.min.apply(null, caudalq3);
                let caudalq3_max = yield Math.max.apply(null, caudalq3);
                let sum13 = yield caudalq3.reduce((previous, current) => current += previous);
                let caudalq3_pro = sum13 / caudalq3.length;
                //presion entrada
                let pentradaq3_min = yield Math.min.apply(null, pentradaq3);
                let pentradaq3_max = yield Math.max.apply(null, pentradaq3);
                let sum14 = yield pentradaq3.reduce((previous, current) => current += previous);
                let pentradaq3_pro = sum14 / pentradaq3.length;
                //presion salida
                let psalidaq3_min = yield Math.min.apply(null, psalidaq3);
                let psalidaq3_max = yield Math.max.apply(null, psalidaq3);
                let sum15 = yield psalidaq3.reduce((previous, current) => current += previous);
                let psalidaq3_pro = sum15 / psalidaq3.length;
                //temperatura linea
                let tlineaq3_min = yield Math.min.apply(null, tlineaq3);
                let tlineaq3_max = yield Math.max.apply(null, tlineaq3);
                let sum16 = yield tlineaq3.reduce((previous, current) => current += previous);
                let tlineaq3_pro = sum16 / tlineaq3.length;
                //temperatura rvm
                let trvmq3_min = yield Math.min.apply(null, trvmq3);
                let trvmq3_max = yield Math.max.apply(null, trvmq3);
                let sum17 = yield trvmq3.reduce((previous, current) => current += previous);
                let trvmq3_pro = sum17 / trvmq3.length;
                let tem_amb_min = yield Math.min.apply(null, temp_ambiente);
                let tem_amb_max = yield Math.max.apply(null, temp_ambiente);
                let humedad_min = yield Math.min.apply(null, humedad);
                let humedad_max = yield Math.max.apply(null, humedad);
                let sum = yield temp_ambiente.reduce((previous, current) => current += previous);
                let tem_amb_pro = sum / temp_ambiente.length;
                let sum2 = yield humedad.reduce((previous, current) => current += previous);
                let humedad_pro = sum2 / humedad.length;
                let data = {
                    caudalq1_min,
                    caudalq1_max,
                    caudalq1_pro,
                    pentradaq1_min,
                    pentradaq1_max,
                    pentradaq1_pro,
                    psalidaq1_min,
                    psalidaq1_max,
                    psalidaq1_pro,
                    tlineaq1_min,
                    tlineaq1_max,
                    tlineaq1_pro,
                    trvmq1_min,
                    trvmq1_max,
                    trvmq1_pro,
                    caudalq2_min,
                    caudalq2_max,
                    caudalq2_pro,
                    pentradaq2_min,
                    pentradaq2_max,
                    pentradaq2_pro,
                    psalidaq2_min,
                    psalidaq2_max,
                    psalidaq2_pro,
                    tlineaq2_min,
                    tlineaq2_max,
                    tlineaq2_pro,
                    trvmq2_min,
                    trvmq2_max,
                    trvmq2_pro,
                    caudalq3_min,
                    caudalq3_max,
                    caudalq3_pro,
                    pentradaq3_min,
                    pentradaq3_max,
                    pentradaq3_pro,
                    psalidaq3_min,
                    psalidaq3_max,
                    psalidaq3_pro,
                    tlineaq3_min,
                    tlineaq3_max,
                    tlineaq3_pro,
                    trvmq3_min,
                    trvmq3_max,
                    trvmq3_pro,
                    caudalq4_min,
                    caudalq4_max,
                    caudalq4_pro,
                    pentradaq4_min,
                    pentradaq4_max,
                    pentradaq4_pro,
                    psalidaq4_min,
                    psalidaq4_max,
                    psalidaq4_pro,
                    tlineaq4_min,
                    tlineaq4_max,
                    tlineaq4_pro,
                    trvmq4_min,
                    trvmq4_max,
                    trvmq4_pro,
                    tem_amb_min,
                    tem_amb_max,
                    humedad_min,
                    humedad_max,
                    tem_amb_pro,
                    humedad_pro
                };
                return res.status(201).json({
                    ok: true,
                    data
                });
            }
        });
    }
    static getMedidor(id) {
        return new Promise((resolve, reject) => {
            medidores_1.default.find({ "_id": id }).populate({
                path: 'datos.marca',
                populate: { path: 'marca' }
            })
                .populate({
                path: 'datos.modelo',
                populate: { path: 'modelo' }
            }).populate('cliente').populate('instrumentos').exec((error, data) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    reject(false);
                }
                if (data) {
                    resolve(data[0]);
                }
            });
        });
    }
    static getmedidores(req, res) {
        let id = req.params.id;
        medidores_1.default.find({ "orden_entrada": id }).populate({
            path: 'datos.marca',
            populate: { path: 'marca' }
        })
            .populate({
            path: 'datos.modelo',
            populate: { path: 'modelo' }
        }).populate('cliente').populate('instrumentos').exec((error, data) => {
            if (error) {
                return res.status(500).json({
                    ok: false,
                    error
                });
            }
            if (!data) {
                return res.status(401).json({
                    ok: false,
                    message: 'ERROR'
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
    static getmedidoresTrabajo(req, res) {
        let id = req.params.id;
        medidores_1.default.find({ "orden_trabajo": id }).populate('orden_entrada')
            .populate({
            path: 'datos.modelo',
            populate: { path: 'modelo' }
        })
            .populate('cliente').populate('instrumentos').exec((error, data) => {
            if (error) {
                return res.status(500).json({
                    ok: false,
                    error
                });
            }
            if (!data) {
                return res.status(401).json({
                    ok: false,
                    message: 'ERROR'
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
exports.default = DownloadController;
