import { Request, Response } from "express";
import xlsx from 'xlsx';
import path from 'path';
import fs from 'fs';
import jsPDF from 'jspdf';
import modelInstrumentos from '../models/trabajo_instrumentos';
import modelMedidor from '../models/medidores';
import modelInstrumento from '../models/instrumentos';
import CalculosController from "./calculos";
import modelcalibracion from '../models/calibraciones';
var pdf = require('html-pdf');
import modeluno from '../models/ntc1994';
import modeldos from '../models/ntc2016';
import modelCMC from '../models/cmc';


export default class GenerarController {

    // static async generarInforme(id: any) {

    //     return new Promise(async (resolve: any, reject: any) => {

    //         let medidor = await GenerarController.getMedidor(id).then((data: any) => {
    //             return data;
    //         }).catch((error: any) => {
    //             return false;
    //         });

    //         let q1 = medidor[0].q1;
    //         let q2 = medidor[0].q2;
    //         let q3 = medidor[0].q3;
    //         let vlq1= medidor[0].v1q1;
    //         let vlq2= medidor[0].v1q2;
    //         let vlq3= medidor[0].v1q3;
    //         let vlq4= medidor[0].v1q4;            


    //         for (let index = 0; index < q1.length; index++) {
    //             let element = q1[index];
    //             let indice = index;

    //             var letra = "";
    //             if (indice == 0) {
    //                 letra = "K";
    //             }
    //             if (indice == 1) {
    //                 letra = "M"
    //             }
    //             if (indice == 2) {
    //                 letra = "O"
    //             }
    //             if (indice == 3) {
    //                 letra = "P"
    //             }

    //             let lectturafinal = await GenerarController.q(`${letra}22`, element.final, "q1",id);
    //             let lecturaInicial = await GenerarController.q(`${letra}23`, element.inicial, "q1",id);
    //             let volrvm = await GenerarController.q(`${letra}24`, element.volumenrvm, "q1",id);
    //             let volrvm2 = await GenerarController.q("A6", vlq1, "q1",id);           
    //             let pmaxima = await GenerarController.q(`${letra}29`, element.pentrada, "q1",id);
    //             let pminima = await GenerarController.q(`${letra}30`, element.psalida, "q1",id);
    //             let temprvm = await GenerarController.q(`${letra}28`, element.temprvm, "q1",id);
    //             let tempinicial = await GenerarController.q(`${letra}26`, element.tempagua, "q1",id);
    //             let tempfinal = await GenerarController.q(`${letra}27`, element.tempagua, "q1",id);
    //             let tiempo = await GenerarController.q(`${letra}25`, element.time, "q1",id);

    //             console.log("Acabe q1");
    //         }

    //         for (let index = 0; index < q2.length; index++) {
    //             let element = q2[index];
    //             let indice = index;

    //             var letra = "";
    //             if (indice == 0) {
    //                 letra = "K";
    //             }
    //             if (indice == 1) {
    //                 letra = "M"
    //             }
    //             if (indice == 2) {
    //                 letra = "O"
    //             }
    //             if (indice == 3) {
    //                 letra = "P"
    //             }

    //             let lectturafinal = await GenerarController.q(`${letra}22`, element.final, "q2",id);
    //             let lecturaInicial = await GenerarController.q(`${letra}23`, element.inicial, "q2",id);
    //             let volrvm = await GenerarController.q(`${letra}24`, element.volumenrvm, "q2",id);

    //             let volrvm2 = await GenerarController.q("A6", vlq2, "q2",id);

    //             let pmaxima = await GenerarController.q(`${letra}29`, element.pentrada, "q2",id);
    //             let pminima = await GenerarController.q(`${letra}30`, element.psalida, "q2",id);
    //             let temprvm = await GenerarController.q(`${letra}28`, element.temprvm, "q2",id);
    //             let tempinicial = await GenerarController.q(`${letra}26`, element.tempagua, "q2",id);
    //             let tempfinal = await GenerarController.q(`${letra}27`, element.tempagua, "q2",id);
    //             let tiempo = await GenerarController.q(`${letra}25`, element.time, "q2",id);

    //             console.log("Acabe q2");

    //         }



    //         for (let index = 0; index < q3.length; index++) {
    //             let element = q3[index];
    //             let indice = index;

    //             var letra = "";
    //             if (indice == 0) {
    //                 letra = "K";
    //             }
    //             if (indice == 1) {
    //                 letra = "M"
    //             }
    //             if (indice == 2) {
    //                 letra = "O"
    //             }
    //             if (indice == 3) {
    //                 letra = "P"
    //             }

    //             let lectturafinal = await GenerarController.q(`${letra}22`, element.final, "q3",id);
    //             let lecturaInicial = await GenerarController.q(`${letra}23`, element.inicial, "q3",id);
    //             let volrvm = await GenerarController.q(`${letra}24`, element.volumenrvm, "q3",id);
    //             let volrvm2 = await GenerarController.q("A6", vlq3, "q3",id);
    //             let pmaxima = await GenerarController.q(`${letra}29`, element.pentrada, "q3",id);
    //             let pminima = await GenerarController.q(`${letra}30`, element.psalida, "q3",id);
    //             let temprvm = await GenerarController.q(`${letra}28`, element.temprvm, "q3",id);
    //             let tempinicial = await GenerarController.q(`${letra}26`, element.tempagua, "q3",id);
    //             let tempfinal = await GenerarController.q(`${letra}27`, element.tempagua, "q3",id);
    //             let tiempo = await GenerarController.q(`${letra}25`, element.time, "q3",id);

    //             console.log("Acabe q3");
    //         }





    //         let SQ1 = await GenerarController.sethoja("q1",id).then((data: any) => {
    //             return data;
    //         }).catch((error: any) => {
    //             return false;
    //         });
    //         let SQ2 = await GenerarController.sethoja("q2",id).then((data: any) => {
    //             return data;
    //         }).catch((error: any) => {
    //             return false;
    //         });
    //         let SQ3 = await GenerarController.sethoja("q3",id).then((data: any) => {
    //             return data;
    //         }).catch((error: any) => {
    //             return false;
    //         });




    //         let RQ1 = await GenerarController.getResultados("q1",id).then((data: any) => {
    //             return data;
    //         }).catch((error: any) => {
    //             return false;
    //         });
    //         let RQ2 = await GenerarController.getResultados("q2",id).then((data: any) => {
    //             return data;
    //         }).catch((error: any) => {
    //             return false;
    //         });
    //         let RQ3 = await GenerarController.getResultados("q3",id).then((data: any) => {
    //             return data;
    //         }).catch((error: any) => {
    //             return false;
    //         });



    //         modelMedidor.updateOne({ '_id': id }, {
    //             $set: {
    //                 status: "CLOSED",
    //                 resultados:
    //                 {
    //                     caudalQ1: RQ1.caudal,
    //                     volumenProQ1: RQ1.vi,
    //                     volumenRealQ1: RQ1.va,
    //                     errorQ1: RQ1.error,
    //                     icertidumbreQ1: RQ1.ie,
    //                     caudalQ2: RQ2.caudal,
    //                     volumenProQ2: RQ2.vi,
    //                     volumenRealQ2: RQ2.va,
    //                     errorQ2: RQ2.error,
    //                     icertidumbreQ2: RQ2.ie,
    //                     caudalQ3: RQ3.caudal,
    //                     volumenProQ3: RQ3.vi,
    //                     volumenRealQ3: RQ3.va,
    //                     errorQ3: RQ3.error,
    //                     icertidumbreQ3: RQ3.ie
    //                 }
    //             }
    //         }).exec((error: any, data: any) => {
    //             if (error) {
    //                 reject(false)
    //             }
    //             if (!data) {
    //                 reject(false)
    //             }
    //             if (data) {
    //                 resolve(true)
    //             }
    //         });

    //     });
    // }
    static getMedidor(id: any) {
        return new Promise((resolve: any, reject: any) => {
            modelMedidor.find({
                '_id': id
            }).exec((error: any, data: any) => {
                if (error) {
                    reject(false)
                }
                if (!data) {
                    reject(false)
                }
                if (data) {
                    resolve(data)
                }
            })
        });
    }
    static q(cell: any, value: any, tipo: any, id: any) {
        return new Promise(async (resolve: any, reject: any) => {
            var pathFile = path.resolve(__dirname, `../../assets/files/${id}-${tipo}.xlsx`);
            var output = path.resolve(__dirname, `../../assets/files/${id}-${tipo}.xlsx`);
            let documento = xlsx.readFile(pathFile);
            let hoja = documento.SheetNames[0];
            /* Get worksheet */
            let worksheet = documento.Sheets[hoja];
            /* Find desired cell */
            let desired_cell = worksheet[cell];
            /* Get the value */

            desired_cell.v = value;
            desired_cell.t = 'n';



            let a = await xlsx.writeFile(documento, output);

            resolve(true);

        });
    }
    static cte(cell: any, value: any, tipo: any, id: any) {
        return new Promise(async (resolve: any, reject: any) => {
            var pathFile = path.resolve(__dirname, `../../assets/files/${id}-${tipo}.xlsx`);
            var output = path.resolve(__dirname, `../../assets/files/${id}-${tipo}.xlsx`);
            let documento = xlsx.readFile(pathFile);
            let hoja = documento.SheetNames[1];
            /* Get worksheet */
            let worksheet = documento.Sheets[hoja];
            /* Find desired cell */
            let desired_cell = worksheet[cell];

            if (!desired_cell)
                desired_cell = {};

            desired_cell.t = "n";

            /* Get the value */
            let desired_value = (desired_cell ? desired_cell.v : undefined);

            desired_cell.v = value;



            let a = await xlsx.writeFile(documento, output);


            resolve(true);

        });
    }
    static sethoja(tipo: any, id: any) {
        return new Promise(async (resolve: any, reject: any) => {
            var pathFile = path.resolve(__dirname, `../../assets/files/${id}-${tipo}.xlsx`);
            var output = path.resolve(__dirname, `../../assets/files/${id}-${tipo}.xlsx`);
            let documento = xlsx.readFile(pathFile);
            let hoja = documento.SheetNames[0];
            /* Get worksheet */
            let worksheet = documento.Sheets[hoja];

            let v1 = "F38";
            let v2 = "I38";
            let ie1 = "V111";
            let e1 = "O38";
            let ca1 = "M129";

            let vi = worksheet[v1];
            let va = worksheet[v2];
            let ie = worksheet[ie1];
            let error = worksheet[e1];
            let caudal = worksheet[ca1];





            resolve(true);
        });
    }

    static getResultados(tipo: any, id: any) {
        return new Promise(async (resolve: any, reject: any) => {
            var pathFile = path.resolve(__dirname, `../../assets/files/${id}-${tipo}.xlsx`);



            let documento = xlsx.readFile(pathFile);
            let hoja = documento.SheetNames[0];
            /* Get worksheet */
            let worksheet = await documento.Sheets[hoja];


            let v1 = "F38";
            let v2 = "I38";
            let ie1 = "V111";
            let e1 = "O38";
            let ca1 = "M129";

            let vi = worksheet[v1].v;
            let va = worksheet[v2].v;
            let ie = worksheet[ie1].v;
            let error = worksheet[e1].v;
            let caudal = worksheet[ca1].v;


            let a = {
                vi: vi,
                va: va,
                ie: ie * 100,
                error: error,
                caudal: caudal
            };




            resolve(a);

        });
    }
    static getAll(req: Request, res: Response) {
        let id = req.params.id;
        modelInstrumentos.find({ "orden": id }).populate('caudal', 'patron codigo certificado fuente fecha_calibracion')
            .populate('temprvm', 'patron codigo certificado fuente fecha_calibracion')
            .populate('tempagua', 'patron codigo certificado fuente fecha_calibracion')
            .populate('volumenrvm', 'patron codigo certificado fuente fecha_calibracion')
            .populate('tiempo', 'patron codigo certificado fuente fecha_calibracion')
            .populate('presionentrada', 'patron codigo certificado fuente fecha_calibracion')
            .populate('tempambiente', 'patron codigo certificado fuente fecha_calibracion')
            .populate('humedad', 'patron codigo certificado fuente fecha_calibracion')
            .populate('presionsalida', 'patron codigo certificado fuente fecha_calibracion')
            .exec((error: any, data: any) => {
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

    static generarInforme(id: any) {        


        return new Promise(async (resolve, reject) => {

            let medidor = await GenerarController.getMedidor(id).then((data: any) => {
                return data[0];
            }).catch((error: any) => {
                return false;
            });

            if(medidor.estado=="true"){

                let datos = medidor.datos;
                let metrologicas = medidor.metrologicas;
                let parametros = medidor.parametros;
                let instrumentos = medidor.instrumentos;
                let ambientales = medidor.ambientales;
                let caudales_nominales = [];
    
                if (medidor.type == '3') {
    
    
                    caudales_nominales = await GenerarController.nominaluno(metrologicas.clase, metrologicas.diametro).then((data: any) => {
    
                        caudales_nominales = data;
    
                        caudales_nominales.push({                        
                                prueba: 'Q4', caudal: metrologicas.q4                        
                        });
                       
    
                        return caudales_nominales
                        
                        ;
                    }).catch((error: any) => {
                        caudales_nominales = [
                            {
                                prueba: 'Q1', caudal: metrologicas.q1
                            },
                            {
                                prueba: 'Q2', caudal: metrologicas.q2
                            },
                            {
                                prueba: 'Q3', caudal: metrologicas.q3
                            },
                            {
                                prueba: 'Q4', caudal: metrologicas.q4
                            }
                        ]
                       
    
                        return caudales_nominales;
                    });
    
                } else {
    
                    caudales_nominales = [
                        {
                            prueba: 'Q1', caudal: metrologicas.q1
                        },
                        {
                            prueba: 'Q2', caudal: metrologicas.q2
                        },
                        {
                            prueba: 'Q3', caudal: metrologicas.q3
                        },
                        {
                            prueba: 'Q4', caudal: metrologicas.q4
                        }
                    ]     
                }
    
                let q1 = medidor.q1;
                let instrumentos_q1 = medidor.instrumentos_q1;
                let resultados_q1 = await GenerarController.resultados(q1, ambientales, instrumentos_q1, parametros, metrologicas.escala, "Q1", id, caudales_nominales[0]).then((data: any) => {
                    return data;
                }).catch((error: any) => {
                    return 0;
                });
    
                let q2 = medidor.q2;
                let instrumentos_q2 = medidor.instrumentos_q2;
    
                let resultados_q2 = await GenerarController.resultados(q2, ambientales, instrumentos_q2, parametros, metrologicas.escala, "Q2", id, caudales_nominales[1]).then((data: any) => {
                    return data;
                }).catch((error: any) => {
                    return 0;
                });
                
    
                let q3 = medidor.q3;
                let instrumentos_q3 = medidor.instrumentos_q3;
    
    
                let resultados_q3 = await GenerarController.resultados(q3, ambientales, instrumentos_q3, parametros, metrologicas.escala, "Q3", id, caudales_nominales[2]).then((data: any) => {
                    return data;
                }).catch((error: any) => {
                    return 0;
                });          
    
    
    
                let q4 = medidor.q4;
                let instrumentos_q4 = medidor.instrumentos_q4;
    
                if(q4.length>0){
                    let resultados_q4 = await GenerarController.resultados(q4, ambientales, instrumentos_q4, parametros, metrologicas.escala, "Q4", id, caudales_nominales[3]).then((data: any) => {
                        return data;
                    }).catch((error: any) => {
                        return 0;
                    });
                }
    
    
                modelMedidor.updateOne({ '_id': id }, {
                    $set: {
                        status: "CLOSED"
                    }
                }).exec((error: any, data: any) => {
                    if (error) {
                        console.log(error);
                        reject(false)
                    }
                    if (!data) {
                        console.log(data);
                        reject(false)
                    }
                    if (data) {
                        console.log(data);
                        resolve(true)
                    }
                });

            }else{
                modelMedidor.updateOne({ '_id': id }, {
                    $set: {
                        status: "CLOSED"
                    }
                }).exec((error: any, data: any) => {
                    if (error) {
                        console.log(error);
                        reject(false)
                    }
                    if (!data) {
                        console.log(data);
                        reject(false)
                    }
                    if (data) {
                        console.log(data);
                        resolve(true)
                    }
                });         


            }          

        });


    };


    static resultados(pruebas: any, ambientales: any, instrumentos: any, parametros: any, escala: any, tipo: any, id: any, item: any) {
        return new Promise(async (resolve, reject) => {

            let presion_entrada = await GenerarController.getOne(instrumentos.presion_entrada).then((x: any) => {
                return x
            }).catch((error: any) => {
                return false;
            });
            let volumen_rvm = await GenerarController.getOne(instrumentos.rvm).then((x: any) => {
                return x
            }).catch((error: any) => {
                return false;
            });
            let t_entrada_agua = await GenerarController.getOne(instrumentos.t_entrada_agua).then((x: any) => {
                return x
            }).catch((error: any) => {
                return false;
            });
            let tiempo = await GenerarController.getOne(instrumentos.tiempo).then((x: any) => {
                return x
            }).catch((error: any) => {
                return false;
            });
            let temprvm = await GenerarController.getOne(instrumentos.temprvm).then((x: any) => {
                return x
            }).catch((error: any) => {
                return false;
            });
            let temp_ambiente = await GenerarController.getOne(instrumentos.temp_ambiente).then((x: any) => {
                return x
            }).catch((error: any) => {
                return false;
            });


            //Valores de Calibracion

            let $volumen_rvm = await GenerarController.getLastCalibracion(volumen_rvm._id).then((x: any) => {
                return x
            }).catch((error: any) => {
                return false;
            });

            let $temprvm = await GenerarController.getLastCalibracion(temprvm._id).then((x: any) => {
                return x
            }).catch((error: any) => {
                return false;
            });

            let $t_entrada_agua = await GenerarController.getLastCalibracion(t_entrada_agua._id).then((x: any) => {
                return x
            }).catch((error: any) => {
                return false;
            });

            let $presion_entrada = await GenerarController.getLastCalibracion(presion_entrada._id).then((x: any) => {
                return x
            }).catch((error: any) => {
                return false;
            });



            //CALCULOS PROMEDIO
            let vis = (Math.abs((volumen_rvm.limite_superior_uno + volumen_rvm.limite_inferior_uno) / 2)) / 1000;
           

            let coef_rvm = parametros.coef_rvm;
            let coef_agua = parametros.coef_agua;
            let compre_agua = parametros.compre_agua;



            let ps = 0;

            let corrida: Array<any>=[];
            let _Evip: Array<any>=[] ;
            let _ts: Array<any>=[] ;
            let _tx: Array<any>=[] ;
            let _px: Array<any>=[]; 
            let _$_px: Array<any>=[] ;
            let _ps: Array<any>=[] ;
            let _vx: Array<any>=[] ;
            let _Dvx: Array<any>=[] ;
            let _Error_promedio: Array<any>=[];



            await pruebas.forEach((e: any) => {

                let Evip = (vis - e.volumenrvm) * (($volumen_rvm.correcion_escala || 0) / ($volumen_rvm.division_escala || 0.002));
                let ts = e.temprvm;
                let tx = e.tempagua;
                let px = (e.pentrada + e.psalida) / 2;   
                               
                let vx = (vis + Evip) * (1 + coef_rvm * (ts - 20)) * (1 + coef_agua * (tx - ts)) * (1 - compre_agua * (px - ps));                 
                         

                let test = (1 + coef_agua * (tx - ts));

                let Dvx = e.final - e.inicial;
             
                let Error_promedio = ((Dvx / vx) - 1);

               
                _Evip.push(Evip);


                _ts.push(ts);

                _tx.push(tx);

                _$_px.push(e.pentrada);
                _$_px.push(e.psalida);

                _px.push(px);

                _ps.push(ps);

                _vx.push(vx);

                _Dvx.push(Dvx);

                _Error_promedio.push(Error_promedio);

                corrida.push({
                    Evip: Evip,
                    ts: ts,
                    tx: tx,
                    px: px,
                    ps: ps,
                    vx: vx,
                    Dvx: Dvx,
                    Error_promedio: Error_promedio
                });
            });  
                      
            let promedios = [];
            let longitud = corrida.length;
          
            let sum_Evip = await _Evip.reduce((previous: any, current: any) => current += previous);
            let sum_ts = await _ts.reduce((previous: any, current: any) => current += previous);
            let sum_tx = await _tx.reduce((previous: any, current: any) => current += previous);
            let sum_px = await _px.reduce((previous: any, current: any) => current += previous);
            let sum_ps = await _ps.reduce((previous: any, current: any) => current += previous);
            let sum_vx = await _vx.reduce((previous: any, current: any) => current += previous);

           

            let sum_Dvx = await _Dvx.reduce((previous: any, current: any) => current += previous);
            let sum_Error_promedio = await _Error_promedio.reduce((previous: any, current: any) => current += previous);

            let sum_Evip_pro: any = sum_Evip / longitud;
            let sum_ts_pro: any = sum_ts / longitud;
            let sum_tx_pro: any = sum_tx / longitud;
            let sum_px_pro: any = sum_px / longitud;
            let sum_ps_pro: any = sum_ps / longitud;
            
            //VALORES SACADOS DE LOS PROMEDIOS

            let _vxPro = (vis + sum_Evip_pro) * (1 + coef_rvm * (sum_ts_pro - 20)) * (1 + coef_agua * (sum_tx_pro - sum_ts_pro)) * (1 - compre_agua * (sum_px_pro - sum_ps_pro));  
            let sum_Dvx_pro: any = sum_Dvx / longitud;

            // console.log(_vxPro);

            let _$Error_promedio = ((sum_Dvx_pro / _vxPro) - 1);

            
            

            let sum_vx_pro: any = sum_vx / longitud;
            // let sum_Error_promedio_pro: any = sum_Error_promedio / longitud;

            let sum_Error_promedio_pro: any = _$Error_promedio;

            // console.log("ERROR PROMEDIO")
            // console.log(sum_Error_promedio_pro);

            let Vis_Volumen_indicado = await CalculosController.Vis_Volumen_indicado(vis, $volumen_rvm).then((data: any) => {
                return data;
            }).catch((error: any) => {
                return 0;
            });

            // console.log("volumen indicado");
            // console.log(Vis_Volumen_indicado);

            let $_ts_min: any = await Math.min.apply(null, _ts);
            let $_ts_max: any = await Math.max.apply(null, _ts);

            let ts_temperatura_rvm = await CalculosController.ts_temperatura_rvm($_ts_min, $_ts_max, $temprvm).then((data: any) => {
                return data;
            }).catch((error: any) => {
                return 0;
            });

            // console.log("Tem RVM");
            // console.log(ts_temperatura_rvm);

            let $_tx_min: any = await Math.min.apply(null, _tx);
            let $_tx_max: any = await Math.max.apply(null, _tx);

            let tx_temperatura_agua = await CalculosController.tx_temperatura_agua($_tx_min, $_tx_max, $t_entrada_agua).then((data: any) => {
                return data;
            }).catch((error: any) => {
                return 0;
            });

            // console.log("Tem Agua");
            // console.log(tx_temperatura_agua);

            let $_px_min: any = await Math.min.apply(null, _$_px);
            let $_px_max: any = await Math.max.apply(null, _$_px);

            let px_presion_entrada = await CalculosController.px_presion_entrada($_px_min, $_px_max, $presion_entrada).then((data: any) => {
                return data;
            }).catch((error: any) => {
                return 0;
            });

            // console.log("P Entrada");
            // console.log(px_presion_entrada);

            let vx_volumen_medidor = await CalculosController.vx_volumen_medidor(Vis_Volumen_indicado, ts_temperatura_rvm,
                tx_temperatura_agua, px_presion_entrada, sum_vx_pro, sum_ts_pro, sum_tx_pro,
                sum_px_pro, $volumen_rvm, vis, parametros).then((data: any) => {
                    return data;
                }).catch((error: any) => {
                    return 0;
                });

            // console.log("Volumen Vx");
            // console.log(vx_volumen_medidor);


            let Ex_error_relativo = await CalculosController.Ex_error_relativo(vx_volumen_medidor,
                sum_vx_pro, sum_Dvx_pro, escala).then((data: any) => {
                    return data;
                }).catch((error: any) => {
                    return 0;
                });

            // console.log("Ex relativo");
            // console.log(Ex_error_relativo);


            let ExAv_error_repetivilidad = await CalculosController.ExAv_error_repetivilidad(pruebas.length, _Error_promedio, Ex_error_relativo).then((data: any) => {
                return data;
            }).catch((error: any) => {
                return 0;
            });



            let ue = (ExAv_error_repetivilidad * 100).toPrecision(2);

           

            let ue_minima= await GenerarController.getCMC(volumen_rvm._id).then((data: any) => {
                return data;
            }).catch((error: any) => {
                return 0;
            });

            let $ue=null;
      

            if(ue>ue_minima.error){
                $ue = (ue).toString().split('.');     
            }else{
                $ue = (ue_minima.error).toString().split('.'); 
                ue=ue_minima.error;    
            }

            let $ue_Decimal = $ue[1] || "";
            let $decimales = null;

            if ($ue_Decimal == "") {
                $decimales = 0;
            } else {
                $decimales = $ue[1].length;
            }

          


            let $Vx = sum_vx_pro.toFixed($decimales);
            let $Dvx = sum_Dvx_pro.toFixed($decimales);
            let $Error_promedio = (sum_Error_promedio_pro * 100).toFixed($decimales);
            let $nominal = item.caudal.toFixed($decimales);


            let test = [];


            test.push({
                prueba: item.prueba,
                nominal: $nominal,
                ue: ue,
                vx: $Vx,
                dvx: $Dvx,
                error: $Error_promedio
            })


            // promedios.push({
            //     vis: vis,
            //     Evip: sum_Evip_pro,
            //     coef_rvm: coef_rvm,
            //     ts: sum_ts_pro,
            //     coef_agua: coef_agua,
            //     tx: sum_tx_pro,
            //     compre_agua: compre_agua,
            //     px: sum_px_pro,
            //     ps: sum_ps_pro,
            //     vx: sum_vx_pro,
            //     Dvx: sum_Dvx_pro,
            //     Error_promedio: sum_Error_promedio_pro
            // });    

            if (tipo == "Q1") {
                modelMedidor.updateOne({ '_id': id }, {
                    $set: {                     
                        q1_resultados: {
                            prueba: item.prueba,
                            nominal: $nominal,
                            vx: $Vx,
                            Dvx: $Dvx,
                            Error_promedio: $Error_promedio,
                            Ue: ue
                        }
                    }
                }).exec((error: any, data: any) => {
                    if (error) {
                        reject(false)
                    }
                    if (!data) {
                        reject(false)
                    }
                    if (data) {
                        resolve(data)
                    }
                });
            } else if (tipo == "Q2") {
                modelMedidor.updateOne({ '_id': id }, {
                    $set: {                      
                        q2_resultados: {
                            prueba: item.prueba,
                            nominal: $nominal,
                            vx: $Vx,
                            Dvx: $Dvx,
                            Error_promedio: $Error_promedio,
                            Ue: ue
                        }
                    }
                }).exec((error: any, data: any) => {
                    if (error) {
                        reject(false)
                    }
                    if (!data) {
                        reject(false)
                    }
                    if (data) {
                        resolve(data)
                    }
                });

            } else if (tipo == "Q3") {
                modelMedidor.updateOne({ '_id': id }, {
                    $set: {                       
                        q3_resultados: {
                            prueba: item.prueba,
                            nominal: $nominal,
                            vx: $Vx,
                            Dvx: $Dvx,
                            Error_promedio: $Error_promedio,
                            Ue: ue
                        }
                    }
                }).exec((error: any, data: any) => {
                    if (error) {
                        reject(false)
                    }
                    if (!data) {
                        reject(false)
                    }
                    if (data) {
                        resolve(data)
                    }
                });

            } else if (tipo == "Q4") {
                modelMedidor.updateOne({ '_id': id }, {
                    $set: {                        
                        q4_resultados: {
                            prueba: item.prueba,
                            nominal: $nominal,
                            vx: $Vx,
                            Dvx: $Dvx,
                            Error_promedio: $Error_promedio,
                            Ue: ue
                        }
                    }
                }).exec((error: any, data: any) => {
                    if (error) {
                        reject(false)
                    }
                    if (!data) {
                        reject(false)
                    }
                    if (data) {
                        resolve(data)
                    }
                });

            }

        });
    }

    static getOne(id: any) {
        return new Promise((resolve: any, reject: any) => {
            modelInstrumento.findOne({ '_id': id }).exec((error: any, data: any) => {
                if (error) {
                    reject(false)
                }
                if (!data) {
                    reject(false)
                }
                if (data) {
                    resolve(data)
                }
            });
        });
    }

    static getLastCalibracion(id: any) {
        return new Promise((resolve: any, reject: any) => {
            modelcalibracion.findOne({ 'instrumento': id }).sort({ fecha: -1 }).exec((error: any, data: any) => {
                if (error) {
                    reject(false)
                }
                if (!data) {
                    reject(false)
                }
                if (data) {
                    resolve(data)
                }
            });
        });
    }
    static getCMC(id: any) {
        return new Promise((resolve: any, reject: any) => {
            modelCMC.findOne({ 'instrumento': id }).exec((error: any, data: any) => {
                if (error) {
                    reject(false)
                }
                if (!data) {
                    reject(false)
                }
                if (data) {
                    resolve(data)
                }
            });
        });
    }


    static nominaluno(clase: any, diametro: any) {

        return new Promise((resolve, reject) => {

            modeluno.findOne({ clase: clase, diametro: diametro }).exec((error: any, data: any) => {
                if (error) {
                    reject(false)
                }
                if (!data) {
                    reject(false)
                }

                if (data) {
                    resolve(data.valores);
                }
            });

        });

    }


    static nominaldos(clase: any, diametro: any) {

        return new Promise((resolve, reject) => {
            modeldos.findOne({ relacion: clase, diametro: diametro }).exec((error: any, data: any) => {
                if (error) {
                    reject(false)
                }
                if (!data) {
                    reject(false)
                }

                if (data) {
                    resolve(data.valores);
                }
            });

        });

    }
















}