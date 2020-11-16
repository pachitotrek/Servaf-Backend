import { Request, Response } from "express";
import modelmedidor from '../models/medidores';
import fs from 'fs';
import path from 'path';


export default class DownloadController {

    static async download(req: Request, res: Response) {

        let tipo = req.params.tipo;
        let id = req.params.id;

        if (tipo == 'certificado') {
            let medidor: any = await DownloadController.getMedidor(id).then((data: any) => {
                return data;
            }).catch((error: any) => {
                return false;
            });

            let cliente = medidor.cliente;
            let resultados = medidor.resultados;
            let metrologicas = medidor.metrologicas;
            let datos = medidor.datos;
            let instrumentos = medidor.instrumentos;
            let temp_ambiente: any = [];
            let humedad: any = [];
            let ambientales: Array<any> = [];
            ambientales = medidor.ambientales;
            let q1 = medidor.q1;
            let q2 = medidor.q2;
            let q3 = medidor.q3;
            let q4 = medidor.q4;

            let caudalq1: any = [];
            let caudalq2: any = [];
            let caudalq3: any = [];
            let caudalq4: any = [];
            let pentradaq1: any = [];
            let pentradaq2: any = [];
            let pentradaq3: any = [];
            let pentradaq4: any = [];
            let psalidaq1: any = [];
            let psalidaq2: any = [];
            let psalidaq3: any = [];
            let psalidaq4: any = [];
            let tlineaq1: any = [];
            let tlineaq2: any = [];
            let tlineaq3: any = [];
            let tlineaq4: any = [];
            let trvmq1: any = [];
            let trvmq2: any = [];
            let trvmq3: any = [];
            let trvmq4: any = [];

            let caudalq4_min: any = 0;
            let caudalq4_max: any = 0;
            let caudalq4_pro: any = 0;
            //presion entrada
            let pentradaq4_min: any = 0;
            let pentradaq4_max: any = 0;

            let pentradaq4_pro: any = 0;
            //presion salida
            let psalidaq4_min: any = 0;
            let psalidaq4_max: any = 0;

            let psalidaq4_pro: any = 0;
            //temperatura linea
            let tlineaq4_min: any = 0;
            let tlineaq4_max: any = 0;

            let tlineaq4_pro: any = 0;
            //temperatura rvm
            let trvmq4_min: any = 0;
            let trvmq4_max: any = 0;

            let trvmq4_pro: any = 0;



            if (q4.length > 0) {

                await q4.forEach((e: any) => {
                    caudalq4.push(e.caudal);
                    pentradaq4.push(e.pentrada);
                    psalidaq4.push(e.psalida);
                    tlineaq4.push(e.tempagua);
                    trvmq4.push(e.temprvm);
                });
                //caudal
                caudalq4_min = await Math.min.apply(null, caudalq4);
                caudalq4_max = await Math.max.apply(null, caudalq4);
                let sum18 = await caudalq4.reduce((previous: any, current: any) => current += previous);
                caudalq4_pro = sum18 / caudalq4.length;
                //presion entrada
                pentradaq4_min = await Math.min.apply(null, pentradaq4);
                pentradaq4_max = await Math.max.apply(null, pentradaq4);
                let sum19 = await pentradaq4.reduce((previous: any, current: any) => current += previous);
                pentradaq4_pro = sum19 / pentradaq4.length;
                //presion salida
                psalidaq4_min = await Math.min.apply(null, psalidaq4);
                psalidaq4_max = await Math.max.apply(null, psalidaq4);
                let sum20 = await psalidaq4.reduce((previous: any, current: any) => current += previous);
                psalidaq4_pro = sum20 / psalidaq4.length;
                //temperatura linea
                tlineaq4_min = await Math.min.apply(null, tlineaq4);
                tlineaq4_max = await Math.max.apply(null, tlineaq4);
                let sum21 = await tlineaq4.reduce((previous: any, current: any) => current += previous);
                tlineaq4_pro = sum21 / tlineaq4.length;
                //temperatura rvm
                trvmq4_min = await Math.min.apply(null, trvmq4);
                trvmq4_max = await Math.max.apply(null, trvmq4);
                let sum22 = await trvmq4.reduce((previous: any, current: any) => current += previous);
                trvmq4_pro = sum22 / trvmq4.length;
            }


            await ambientales.forEach((e: any) => {
                temp_ambiente.push(e.temp_ambiente);
                humedad.push(e.humedad);
            });
            await q1.forEach((e: any) => {
                caudalq1.push(e.caudal);
                pentradaq1.push(e.pentrada);
                psalidaq1.push(e.psalida);
                tlineaq1.push(e.tempagua);
                trvmq1.push(e.temprvm);
            });
            //caudal
            let caudalq1_min: any = await Math.min.apply(null, caudalq1);
            let caudalq1_max: any = await Math.max.apply(null, caudalq1);
            let sum3 = await caudalq1.reduce((previous: any, current: any) => current += previous);
            let caudalq1_pro: any = sum3 / caudalq1.length;
            //presion entrada
            let pentradaq1_min: any = await Math.min.apply(null, pentradaq1);
            let pentradaq1_max: any = await Math.max.apply(null, pentradaq1);
            let sum4 = await pentradaq1.reduce((previous: any, current: any) => current += previous);
            let pentradaq1_pro: any = sum4 / pentradaq1.length;
            //presion salida
            let psalidaq1_min: any = await Math.min.apply(null, psalidaq1);
            let psalidaq1_max: any = await Math.max.apply(null, psalidaq1);
            let sum5 = await psalidaq1.reduce((previous: any, current: any) => current += previous);
            let psalidaq1_pro: any = sum5 / psalidaq1.length;
            //temperatura linea
            let tlineaq1_min: any = await Math.min.apply(null, tlineaq1);
            let tlineaq1_max: any = await Math.max.apply(null, tlineaq1);
            let sum6 = await tlineaq1.reduce((previous: any, current: any) => current += previous);
            let tlineaq1_pro: any = sum6 / tlineaq1.length;
            //temperatura rvm
            let trvmq1_min: any = await Math.min.apply(null, trvmq1);
            let trvmq1_max: any = await Math.max.apply(null, trvmq1);
            let sum7 = await trvmq1.reduce((previous: any, current: any) => current += previous);
            let trvmq1_pro: any = sum7 / trvmq1.length;

            await q2.forEach((e: any) => {
                caudalq2.push(e.caudal);
                pentradaq2.push(e.pentrada);
                psalidaq2.push(e.psalida);
                tlineaq2.push(e.tempagua);
                trvmq2.push(e.temprvm);
            });
            //caudal
            let caudalq2_min: any = await Math.min.apply(null, caudalq2);
            let caudalq2_max: any = await Math.max.apply(null, caudalq2);
            let sum8 = await caudalq2.reduce((previous: any, current: any) => current += previous);
            let caudalq2_pro: any = sum8 / caudalq2.length;
            //presion entrada
            let pentradaq2_min: any = await Math.min.apply(null, pentradaq2);
            let pentradaq2_max: any = await Math.max.apply(null, pentradaq2);
            let sum9 = await pentradaq2.reduce((previous: any, current: any) => current += previous);
            let pentradaq2_pro: any = sum9 / pentradaq2.length;
            //presion salida
            let psalidaq2_min: any = await Math.min.apply(null, psalidaq2);
            let psalidaq2_max: any = await Math.max.apply(null, psalidaq2);
            let sum10 = await psalidaq2.reduce((previous: any, current: any) => current += previous);
            let psalidaq2_pro: any = sum10 / psalidaq2.length;
            //temperatura linea
            let tlineaq2_min: any = await Math.min.apply(null, tlineaq2);
            let tlineaq2_max: any = await Math.max.apply(null, tlineaq2);
            let sum11 = await tlineaq2.reduce((previous: any, current: any) => current += previous);
            let tlineaq2_pro: any = sum11 / tlineaq2.length;
            //temperatura rvm
            let trvmq2_min: any = await Math.min.apply(null, trvmq2);
            let trvmq2_max: any = await Math.max.apply(null, trvmq2);
            let sum12 = await trvmq2.reduce((previous: any, current: any) => current += previous);
            let trvmq2_pro: any = sum12 / trvmq2.length;

            await q3.forEach((e: any) => {
                caudalq3.push(e.caudal);
                pentradaq3.push(e.pentrada);
                psalidaq3.push(e.psalida);
                tlineaq3.push(e.tempagua);
                trvmq3.push(e.temprvm);
            });
            //caudal
            let caudalq3_min: any = await Math.min.apply(null, caudalq3);
            let caudalq3_max: any = await Math.max.apply(null, caudalq3);
            let sum13 = await caudalq3.reduce((previous: any, current: any) => current += previous);
            let caudalq3_pro: any = sum13 / caudalq3.length;
            //presion entrada
            let pentradaq3_min: any = await Math.min.apply(null, pentradaq3);
            let pentradaq3_max: any = await Math.max.apply(null, pentradaq3);
            let sum14 = await pentradaq3.reduce((previous: any, current: any) => current += previous);
            let pentradaq3_pro: any = sum14 / pentradaq3.length;
            //presion salida
            let psalidaq3_min: any = await Math.min.apply(null, psalidaq3);
            let psalidaq3_max: any = await Math.max.apply(null, psalidaq3);
            let sum15 = await psalidaq3.reduce((previous: any, current: any) => current += previous);
            let psalidaq3_pro: any = sum15 / psalidaq3.length;
            //temperatura linea
            let tlineaq3_min: any = await Math.min.apply(null, tlineaq3);
            let tlineaq3_max: any = await Math.max.apply(null, tlineaq3);
            let sum16 = await tlineaq3.reduce((previous: any, current: any) => current += previous);
            let tlineaq3_pro: any = sum16 / tlineaq3.length;
            //temperatura rvm
            let trvmq3_min: any = await Math.min.apply(null, trvmq3);
            let trvmq3_max: any = await Math.max.apply(null, trvmq3);
            let sum17 = await trvmq3.reduce((previous: any, current: any) => current += previous);
            let trvmq3_pro: any = sum17 / trvmq3.length;

            let tem_amb_min: any = await Math.min.apply(null, temp_ambiente);
            let tem_amb_max: any = await Math.max.apply(null, temp_ambiente);
            let humedad_min: any = await Math.min.apply(null, humedad);
            let humedad_max: any = await Math.max.apply(null, humedad);
            let sum = await temp_ambiente.reduce((previous: any, current: any) => current += previous);
            let tem_amb_pro: any = sum / temp_ambiente.length;
            let sum2 = await humedad.reduce((previous: any, current: any) => current += previous);
            let humedad_pro: any = sum2 / humedad.length;





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
            }

            return res.status(201).json({
                ok: true,
                data
            })






        }





    }

    static getMedidor(id: any) {
        return new Promise((resolve: any, reject: any) => {
            modelmedidor.find({ "_id": id }).populate({
                path: 'datos.marca',
                populate: { path: 'marca' }
            })
                .populate({
                    path: 'datos.modelo',
                    populate: { path: 'modelo' }
                }).populate('cliente').populate('instrumentos').exec((error: any, data: any) => {
                    if (error) {
                        reject(false)
                    }
                    if (!data) {
                        reject(false)
                    }
                    if (data) {
                        resolve(data[0])
                    }
                });
        });
    }

    static getmedidores(req: Request, res: Response) {
        let id = req.params.id;

        modelmedidor.find({ "orden_entrada": id }).populate({
            path: 'datos.marca',
            populate: { path: 'marca' }
        })
            .populate({
                path: 'datos.modelo',
                populate: { path: 'modelo' }
            }).populate('cliente').populate('instrumentos').exec((error: any, data: any) => {
                if (error) {
                    return res.status(500).json({
                        ok: false,
                        error
                    })
                }
                if (!data) {
                    return res.status(401).json({
                        ok: false,
                        message: 'ERROR'
                    })
                }
                if (data) {
                    return res.status(201).json({
                        ok: true,
                        data
                    })
                }
            });

    }

    static getmedidoresTrabajo(req: Request, res: Response) {
        let id = req.params.id;

        modelmedidor.find({ "orden_trabajo": id }).populate('orden_entrada')
            .populate({
                path: 'datos.modelo',
                populate: { path: 'modelo' }
            })
            .populate('cliente').populate('instrumentos').exec((error: any, data: any) => {
                if (error) {
                    return res.status(500).json({
                        ok: false,
                        error
                    })
                }
                if (!data) {
                    return res.status(401).json({
                        ok: false,
                        message: 'ERROR'
                    })
                }
                if (data) {
                    return res.status(201).json({
                        ok: true,
                        data
                    })
                }
            });

    }



}