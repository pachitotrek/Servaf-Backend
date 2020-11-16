import { Request, Response } from "express";
import modeltrabajo from '../models/trabajo';
import modelMedidor from '../models/medidor_trabajo';
import medidorentrada from '../models/medidores';
import corrida from '../models/corrida';
import modelfinal from '../models/mefinales';
import pruebas from '../models/tipos';
import modelinstrumento from '../models/trabajo_instrumentos';
import modelordenentrada from '../models/entrada';
import modelresultados from '../models/resultados';
import modelmedidores from '../models/medidores';
import MedidorController from "./ingresos";
import GenerarController from "./generate";
import path from 'path';
import xlsx from 'xlsx';
import moment from 'moment';
import fs from 'fs';


export default class TrabajoController {

    static async crear(req: Request, res: Response) {

        let {
            orden,
            ordenante,
            encargado,
            fecha_programacion,
            hora_programacion,
            ensayo,
            banco,
            duracion,
            repeticiones,
            coef_rvm,
            coef_agua,
            compre_agua,
            incertidumbre_rvm,
            incertidumbre_agua,
            incertidumbre_compre_agua,
            medidores
        } = req.body;   


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
    

        let a = new modeltrabajo({
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

        a.save(async (err: any, data: any) => {
            if (err) {
                console.log(err)
            }
            if (!data) {
                return res.status(401).json({
                    ok: false,
                    message: "Error "
                })
            }
            if (data) {
                await medidores.forEach((e: any) => {
                    MedidorController.updateparametros(e, datos,data._id,ordenante,encargado).then((data: any) => {
                        return true
                    }).catch((error: any) => {
                        return error
                    })
                });

                return res.status(200).json({
                    ok: true,
                    data
                });
            }
        });
    }
    static GetConsecutivo(req: Request, res: Response) {

        modeltrabajo.find().limit(1).sort({ 'orden': -1 }).exec(async (error: any, data: any) => {
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
                let numero = await data[0].orden + 1;
                return res.status(200).json({
                    ok: true,
                    numero: numero
                });
            }
        });

    }
    static GetOrden(req: Request, res: Response) {
        let id = req.params.id;
        modeltrabajo.find({ "_id": id }).exec((error: any, data: any) => {
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
    static async addInsOrdenes(req: Request, res: Response) {
        let body = req.body;

        let medidores = body.medidores;
        let instrumentos = body.instrumentos;      
        let q1= body.q1;
        let q2= body.q2;
        let q3= body.q3;        
        let q4=body.q4;

        if(q4){

            await medidores.forEach(async (e: any) => {
                let id = e;
                await TrabajoController.addInstrumento2(id, instrumentos,q1,q2,q3,q4).then((data: any) => {
                    return true;
                }).catch((error: any) => {
                    return false
                });
               
            });


            let pruebas =[
                {
                    tipo:"Q1",status:"true"
                },
                {
                    tipo:"Q2",status:"true"
                },
                {
                    tipo:"Q3",status:"true"
                },
                {
                    tipo:"Q4",status:"true"
                }
            ];  

            modeltrabajo.updateOne({ '_id': body.id }, {
                $set: {
                    instrumentos: instrumentos,
                    pruebas:pruebas,
                    instrumentos_q1:{
                        humedad:q1.humedad ,
                        presion_entrada:q1.presion_entrada ,
                        presion_salida:q1.presion_salida ,
                        rvm:q1.rvm ,
                        t_entrada_agua:q1.t_entrada_agua ,
                        temp_ambiente:q1.temp_ambiente ,
                        tiempo:q1.tiempo ,
                        caudal:q1.caudal ,
                        temprvm: q1.temprvm
                    },
                    instrumentos_q2:{
                        humedad:q2.humedad ,
                        presion_entrada:q2.presion_entrada ,
                        presion_salida:q2.presion_salida ,
                        rvm:q2.rvm ,
                        t_entrada_agua:q2.t_entrada_agua ,
                        temp_ambiente:q2.temp_ambiente ,
                        tiempo:q2.tiempo ,
                        caudal:q2.caudal ,
                        temprvm: q2.temprvm
                    },
                    instrumentos_q3:{
                        humedad:q3.humedad ,
                        presion_entrada:q3.presion_entrada ,
                        presion_salida:q3.presion_salida ,
                        rvm:q3.rvm ,
                        t_entrada_agua:q3.t_entrada_agua ,
                        temp_ambiente:q3.temp_ambiente ,
                        tiempo:q3.tiempo ,
                        caudal:q3.caudal ,
                        temprvm: q3.temprvm
                    },
                    instrumentos_q4:{
                        humedad:q3.humedad ,
                        presion_entrada:q3.presion_entrada ,
                        presion_salida:q3.presion_salida ,
                        rvm:q3.rvm ,
                        t_entrada_agua:q3.t_entrada_agua ,
                        temp_ambiente:q3.temp_ambiente ,
                        tiempo:q3.tiempo ,
                        caudal:q3.caudal ,
                        temprvm: q3.temprvm
                    }  
                }
            }).exec((error: any, data: any) => {
                if (error) {
                    return res.status(500).json({
                        ok: false,
                        error
                    })
                }
                if (!data) {
                    return res.status(400).json({
                        ok: false,
                        message: 'error'
                    })
                }
                if (data) {
                    return res.status(200).json({
                        ok: true,
                        data
                    })
                }
            });           
            

        }else{

            await medidores.forEach(async (e: any) => {
                let id = e;
                await TrabajoController.addInstrumento(id, instrumentos,q1,q2,q3).then((data: any) => {
                    return true;
                }).catch((error: any) => {
                    return false
                });
               
            });

            let pruebas =[
                {
                    tipo:"Q1",status:"true"
                },
                {
                    tipo:"Q2",status:"true"
                },
                {
                    tipo:"Q3",status:"true"
                }
            ];
            
            modeltrabajo.updateOne({ '_id': body.id }, {
                $set: {
                    instrumentos: instrumentos,
                    pruebas:pruebas,
                    instrumentos_q1:{
                        humedad:q1.humedad ,
                        presion_entrada:q1.presion_entrada ,
                        presion_salida:q1.presion_salida ,
                        rvm:q1.rvm ,
                        t_entrada_agua:q1.t_entrada_agua ,
                        temp_ambiente:q1.temp_ambiente ,
                        tiempo:q1.tiempo ,
                        caudal:q1.caudal ,
                        temprvm: q1.temprvm
                    },
                    instrumentos_q2:{
                        humedad:q2.humedad ,
                        presion_entrada:q2.presion_entrada ,
                        presion_salida:q2.presion_salida ,
                        rvm:q2.rvm ,
                        t_entrada_agua:q2.t_entrada_agua ,
                        temp_ambiente:q2.temp_ambiente ,
                        tiempo:q2.tiempo ,
                        caudal:q2.caudal ,
                        temprvm: q2.temprvm
                    },
                    instrumentos_q3:{
                        humedad:q3.humedad ,
                        presion_entrada:q3.presion_entrada ,
                        presion_salida:q3.presion_salida ,
                        rvm:q3.rvm ,
                        t_entrada_agua:q3.t_entrada_agua ,
                        temp_ambiente:q3.temp_ambiente ,
                        tiempo:q3.tiempo ,
                        caudal:q3.caudal ,
                        temprvm: q3.temprvm
                    }  
                }
            }).exec((error: any, data: any) => {
                if (error) {
                    return res.status(500).json({
                        ok: false,
                        error
                    })
                }
                if (!data) {
                    return res.status(400).json({
                        ok: false,
                        message: 'error'
                    })
                }
                if (data) {
                    return res.status(200).json({
                        ok: true,
                        data
                    })
                }
            });           
            
        }

      

    }
    static addInstrumento(id: any, items: any,q1:any,q2:any,q3:any) {
        return new Promise((resolve: any, reject: any) => {

            modelmedidores.updateOne({
                '_id': id
            }, {
                $set: {
                    instrumentos: items,
                    status: 'READY',
                    instrumentos_q1:{
                        humedad:q1.humedad ,
                        presion_entrada:q1.presion_entrada ,
                        presion_salida:q1.presion_salida ,
                        rvm:q1.rvm ,
                        t_entrada_agua:q1.t_entrada_agua ,
                        temp_ambiente:q1.temp_ambiente ,
                        tiempo:q1.tiempo ,
                        caudal:q1.caudal ,
                        temprvm: q1.temprvm
                    },
                    instrumentos_q2:{
                        humedad:q2.humedad ,
                        presion_entrada:q2.presion_entrada ,
                        presion_salida:q2.presion_salida ,
                        rvm:q2.rvm ,
                        t_entrada_agua:q2.t_entrada_agua ,
                        temp_ambiente:q2.temp_ambiente ,
                        tiempo:q2.tiempo ,
                        caudal:q2.caudal ,
                        temprvm: q2.temprvm
                    },
                    instrumentos_q3:{
                        humedad:q3.humedad ,
                        presion_entrada:q3.presion_entrada ,
                        presion_salida:q3.presion_salida ,
                        rvm:q3.rvm ,
                        t_entrada_agua:q3.t_entrada_agua ,
                        temp_ambiente:q3.temp_ambiente ,
                        tiempo:q3.tiempo ,
                        caudal:q3.caudal ,
                        temprvm: q3.temprvm
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
                    console.log(data);
                    resolve(true)
                }
            })

        });

    }

    static addInstrumento2(id: any, items: any,q1:any,q2:any,q3:any,q4:any) {
        return new Promise((resolve: any, reject: any) => {

            modelmedidores.updateOne({
                '_id': id
            }, {
                $set: {
                    instrumentos: items,
                    status: 'READY',
                    instrumentos_q1:{
                        humedad:q1.humedad ,
                        presion_entrada:q1.presion_entrada ,
                        presion_salida:q1.presion_salida ,
                        rvm:q1.rvm ,
                        t_entrada_agua:q1.t_entrada_agua ,
                        temp_ambiente:q1.temp_ambiente ,
                        tiempo:q1.tiempo ,
                        caudal:q1.caudal ,
                        temprvm: q1.temprvm
                    },
                    instrumentos_q2:{
                        humedad:q2.humedad ,
                        presion_entrada:q2.presion_entrada ,
                        presion_salida:q2.presion_salida ,
                        rvm:q2.rvm ,
                        t_entrada_agua:q2.t_entrada_agua ,
                        temp_ambiente:q2.temp_ambiente ,
                        tiempo:q2.tiempo ,
                        caudal:q2.caudal ,
                        temprvm: q2.temprvm
                    },
                    instrumentos_q3:{
                        humedad:q3.humedad ,
                        presion_entrada:q3.presion_entrada ,
                        presion_salida:q3.presion_salida ,
                        rvm:q3.rvm ,
                        t_entrada_agua:q3.t_entrada_agua ,
                        temp_ambiente:q3.temp_ambiente ,
                        tiempo:q3.tiempo ,
                        caudal:q3.caudal ,
                        temprvm: q3.temprvm
                    },
                    instrumentos_q4:{
                        humedad:q4.humedad ,
                        presion_entrada:q4.presion_entrada ,
                        presion_salida:q4.presion_salida ,
                        rvm:q4.rvm ,
                        t_entrada_agua:q4.t_entrada_agua ,
                        temp_ambiente:q4.temp_ambiente ,
                        tiempo:q4.tiempo ,
                        caudal:q4.caudal ,
                        temprvm: q4.temprvm
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
                    console.log(data);
                    resolve(true)
                }
            })

        });

    }



    static async pushCondiciones(req: Request, res: Response) {
        let body = req.body;
        let medidores = body.medidores;
        let humedad = body.humedad;
        let ambiente = body.temp;
        let prueba=body.prueba;


        await medidores.forEach(async (e: any) => {
            let id = e;
            await TrabajoController.addcondicion(id, ambiente, humedad,prueba).then((data: any) => {
                return true;
            }).catch((error: any) => {
                return false
            })
        });

        return res.status(201).json({
            ok: true
        });

    }
    static addcondicion(id: any, ambiente: any, humedad: any,prueba:any) {
        return new Promise((resolve: any, reject: any) => {
            modelmedidores.updateOne({
                '_id': id
            }, {
                $push: {
                    ambientales: [
                        {
                            temp_ambiente: ambiente,
                            humedad: humedad,
                            prueba:prueba
                        }
                    ]
                }
            }).exec((error: any, data: any) => {
                if (error) {
                    reject(false)
                }
                if (!data) {
                    reject(false)
                }
                if (data) {
                    resolve(true)
                }
            })

        });

    }
    static GetMedidor(req: Request, res: Response) {        
        let id = req.params.id;      
        
        modelmedidores.find({ "_id": id }).populate({
            path: 'datos.marca',
            populate: { path: 'marca' }
        })
            .populate({
                path: 'datos.modelo',
                populate: { path: 'modelo' }
            })
            .populate('ingreso','nombre apellido cargo').populate('calibro','nombre apellido cargo')
            .populate('cliente').populate('instrumentos').populate('orden_trabajo').populate('orden_entrada').exec((error: any, data: any) => {
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
    static GetMedidor2(req: Request, res: Response) {
        let id = req.params.id;      
        modelmedidores.find({ "_id": id }).populate({
            path: 'datos.marca',
            populate: { path: 'marca' }
        })
            .populate({
                path: 'datos.modelo',
                populate: { path: 'modelo' }
            }).populate('cliente').populate('instrumentos').exec((error: any, data: any) => {
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
    static GetMedidor3(req: Request, res: Response) {
        let id = req.params.id;      
        modelmedidores.find({ "_id": id }).populate({
            path: 'datos.marca',
            populate: { path: 'marca' }
        })
            .populate({
                path: 'datos.modelo',
                populate: { path: 'modelo' }
            }).populate('cliente').populate('instrumentos').populate('orden_entrada').populate('orden_trabajo').exec((error: any, data: any) => {
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
    static SetMedidor(req: Request, res: Response) {
        let {
            tipo,
            orden,
            repeticion,
            caudal,
            pentrada,
            psalida,
            tempagua,
            temprvm,
            volumenrvm,
            horas,
            minutos,
            segundos,
            inicial,
            final,
            medidor
        } = req.body;

        let a = parseInt(horas) * 3600;
        let b = parseInt(minutos) * 60;
        let c = parseInt(segundos);

        let time = (a + b + c);

        if (tipo == 'Q1') {
            modelmedidores.updateOne({ "_id": medidor }, {
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
            }).exec((error: any, data: any) => {
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

        } else if (tipo == 'Q2') {
            modelmedidores.updateOne({ "_id": medidor }, {
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
            }).exec((error: any, data: any) => {
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

        } else if (tipo == 'Q3') {
            modelmedidores.updateOne({ "_id": medidor }, {
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
            }).exec((error: any, data: any) => {
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

        } else if (tipo == 'Q4') {
            modelmedidores.updateOne({ "_id": medidor }, {
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
            }).exec((error: any, data: any) => {
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
        } else {
            return res.status(400).json({
                ok: false
            })
        }
    }
    static SetEditMedidor(req: Request, res: Response) {
        let {
            tipo,
            repeticion,
            medidor
        } = req.body;


        if (tipo == 'Q1') {
            modelmedidores.updateOne({ "_id": medidor }, {
                $pull: {
                    q1: {
                        repeticion: repeticion
                    }
                }
            }).exec((error: any, data: any) => {
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

        } else if (tipo == 'Q2') {
            modelmedidores.updateOne({ "_id": medidor }, {
                $pull: {
                    q2: { tipo: tipo, repeticion: repeticion }
                }
            }).exec((error: any, data: any) => {
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

        } else if (tipo == 'Q3') {
            modelmedidores.updateOne({ "_id": medidor }, {
                $pull: {
                    q3: { tipo: tipo, repeticion: repeticion }
                }
            }).exec((error: any, data: any) => {
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

        } else if (tipo == 'Q4') {
            modelmedidores.updateOne({ "_id": medidor }, {
                $pull: {
                    q4: { tipo: tipo, repeticion: repeticion }
                }
            }).exec((error: any, data: any) => {
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
        } else {
            return res.status(400).json({
                ok: false
            })
        }
    }
    static async CerrarOrden(req: Request, res: Response) {

        let { id } = req.body;

        let datos = await TrabajoController.cerrargetMedidores(id).then((data: any) => {
            return data;
        }).catch((error: any) => {
            return false;
        });

        let medidores = datos[0].medidores;

        


        await medidores.forEach(async (e: any) => {
            await GenerarController.generarInforme(e).then((data: any) => {
                return data;
            }).catch((error: any) => {
                return false;
            });
        });

        modeltrabajo.updateOne({
            '_id': id
        }, {
            $set: {
                status: 'CLOSED'
            }
        }).exec((error: any, data: any) => {
            if (error) {
                console.log("HOLA ERROR");
                return res.status(501).json({
                    ok: false
                })
            }
            if (!data) {
                console.log("HOLA ERROR NO SE ENCUENTRA");
                return res.status(501).json({
                    ok: false
                })
            }
            if (data) {
                console.log(data);
                return res.status(201).json({
                    ok: true
                });
            }
        });
    }
    static cerrargetMedidores(id: any) {
        return new Promise((resolve: any, reject: any) => {
            modeltrabajo.find({
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
    static cerrarmedidordos(id: any) {
        return new Promise((resolve: any, reject: any) => {
            modelmedidores.updateOne({
                '_id': id
            }, {
                $set: {
                    status: "CLOSED"
                }
            }).exec((error: any, data: any) => {
                if (error) {
                    reject(false)
                }
                if (!data) {
                    reject(false)
                }
                if (data) {
                    resolve(true)
                }
            })

        });

    }
    static GetOrdenesOpen(req: Request, res: Response) {
        modeltrabajo.find({ "status": "OPEN" }).populate('entrada').exec((error: any, data: any) => {
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
    static GetOrdenesClose(req: Request, res: Response) {

        let {inicio,fin} = req.body;

        let fecha_inicio:any= inicio || "2010-02-08T09";
        let fecha_fin:any= fin || "2050-02-08T09";

        let f_inicio = moment(fecha_inicio).format();
        let f_fin = moment(fecha_fin).format();        
        


        modeltrabajo.find({ "status": "CLOSED",fecha:{
            $gte: f_inicio,
            $lte: f_fin,
        }}).populate({
            path: 'entrada',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: { path: 'marca' }
        }).exec((error: any, data: any) => {
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
    static GetOrdenClose(req: Request, res: Response) {
        let id = req.params.id;
        modeltrabajo.find({ "_id": id }).populate('encargado')
            .populate('banco')
            .exec((error: any, data: any) => {
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
    static createhoja(id: any) {
        return new Promise(async (resolve: any, reject: any) => {
            let q1file = path.resolve(__dirname, `../../assets/q1.xlsx`);
            let q2file = path.resolve(__dirname, `../../assets/q2.xlsx`);
            let q3file = path.resolve(__dirname, `../../assets/q3.xlsx`);
            let outputq1 = path.resolve(__dirname, `../../assets/files/${id}-q1.xlsx`);
            let outputq2 = path.resolve(__dirname, `../../assets/files/${id}-q2.xlsx`);
            let outputq3 = path.resolve(__dirname, `../../assets/files/${id}-q3.xlsx`);

            fs.copyFile(q1file, outputq1, (error: any) => {
                if (error) {
                    console.log(error);
                }
            });
            fs.copyFile(q2file, outputq2, (error: any) => {
                if (error) {
                    console.log(error);
                }
            });
            fs.copyFile(q3file, outputq3, (error: any) => {
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

        });
    }
    static updatetest(req:Request,res:Response){

        let id = req.params.id;
        let orden=req.params.orden;

        modeltrabajo.updateOne({'_id':id},{
            $pull: {
                pruebas: {
                    tipo: orden
                }
            }
        }).exec((err:any,data:any)=>{
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

    static deleteResultMedidor(req: Request, res: Response) {
        let {
            tipo,
            repeticion,
            medidor
        } = req.body;


        if (tipo == '1') {
            modelmedidores.updateOne({ "_id": medidor }, {
                $pull: {
                    q1: {
                        _id: repeticion
                    }
                }
            }).exec((error: any, data: any) => {
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

        } else if (tipo == '2') {
            modelmedidores.updateOne({ "_id": medidor }, {
                $pull: {
                    q2: {_id: repeticion }
                }
            }).exec((error: any, data: any) => {
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

        } else if (tipo == '3') {
            modelmedidores.updateOne({ "_id": medidor }, {
                $pull: {
                    q3: {_id: repeticion }
                }
            }).exec((error: any, data: any) => {
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

        } else if (tipo == 'Q4') {
            modelmedidores.updateOne({ "_id": medidor }, {
                $pull: {
                    q4: { tipo: tipo, repeticion: repeticion }
                }
            }).exec((error: any, data: any) => {
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
        } else {
            return res.status(400).json({
                ok: false
            })
        }
    }













    static async closeordentrabajo(req: Request, res: Response) {
        let {
            _id
        } = req.body;

        let close = await TrabajoController.closeTrabajo(_id).then((data: any) => {
            return data;
        }).catch((error: any) => {
            return error
        });

        if (close) {
            return res.status(201).json({
                ok: true
            })
        }



    }
    static async addMedidores(req: Request, res: Response) {
        let { seleccionados, id } = req.body;
        var suma = 0;

        await seleccionados.forEach(async (e: any) => {
            let a = await TrabajoController.crearMedidor(e, id).then((data: any) => {
                return data;
            });

            let d = await TrabajoController.updateMedidor(e).then((data: any) => {
                return data;
            });

            let h = await TrabajoController.CloseOrdenEntrada(e).then((data: any) => {
                return data;
            });



            if (a) {

                suma++
            }
        });



        return res.status(201).json({
            ok: true
        })





    }
    static async addInstrumentos(req: Request, res: Response) {
        let { q1, q2, q3, q4 } = req.body;

        let aq1 = await TrabajoController.addinstrumento(q1).then((data: any) => {
            return data;
        });
        let aq2 = await TrabajoController.addinstrumento(q2).then((data: any) => {
            return data;
        });
        let aq3 = await TrabajoController.addinstrumento(q3).then((data: any) => {
            return data;
        });
        let aq4 = await TrabajoController.addinstrumento(q4).then((data: any) => {
            return data;
        });

        return res.status(201).json({
            ok: true
        })

    }
    static addinstrumento(item: any) {
        return new Promise((resolve: any, reject: any) => {

            let {
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
            } = item;


            let a = new modelinstrumento({
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


            a.save((err: any, data: any) => {
                if (err) {
                    console.log(err)
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
    static crearMedidor(item: any, orden: any) {
        return new Promise((resolve: any, reject: any) => {

            let {
                fabricacion,
                marca,
                modelo,
                serie,
                lectura,
                incidencias,
                creado
            } = item;


            let a = new modelMedidor({
                orden: orden,
                fabricacion,
                marca: marca,
                modelo: modelo,
                serie,
                lectura,
                incidencias,
                creado
            });


            a.save((err: any, data: any) => {
                if (err) {
                    console.log(err)
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
    static updateMedidor(item: any) {
        return new Promise((resolve: any, reject: any) => {

            let {
                _id
            } = item;

            medidorentrada.updateOne({
                "_id": _id
            }, {
                $set: {
                    "status": "CLOSED"
                }
            }, (err: any, data: any) => {
                if (err) {
                    console.log(err)
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
    static CloseOrdenEntrada(item: any) {
        return new Promise((resolve: any, reject: any) => {

            let {
                orden
            } = item;

            modelordenentrada.updateOne({
                "_id": orden
            }, {
                $set: {
                    "status": "CLOSED"
                }
            }, (err: any, data: any) => {
                if (err) {
                    console.log(err)
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
    static getmedidorestrabajo(req: Request, res: Response) {
        let id = req.params.id;
        modelMedidor.find({ "orden": id }).exec((error: any, data: any) => {
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
    static async iniciales(req: Request, res: Response) {

        let {
            orden,
            tipo,
            repeticion,
            temp,
            humedad,
            caudal,
            pentrada,
            psalida,
            tempagua,
            temprvm,
            volumenrvm
        } = req.body;


        let a = new corrida({
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

        a.save((err: any, data: any) => {
            if (err) {
                console.log(err)
            }
            if (!data) {
                return res.status(401).json({
                    ok: false,
                    message: "Error "
                })
            }

            return res.status(200).json({
                ok: true,
                data
            });
        });
    }
    static final(req: Request, res: Response) {

        let {
            corrida,
            medidor,
            inicial,
            final
        } = req.body;

        let a = new modelfinal({
            corrida,
            medidor,
            inicial,
            final
        });


        a.save((err: any, data: any) => {
            if (err) {
                console.log(err)
            }
            if (!data) {
                return res.status(401).json({
                    ok: false,
                    message: "Error "
                })
            }

            return res.status(200).json({
                ok: true,
                data
            });
        });
    }
    static savetime(req: Request, res: Response) {

        let {
            _id,
            horas,
            minutos,
            segundos
        } = req.body;

        let a = parseInt(horas) * 3600;
        let b = parseInt(minutos) * 60;
        let c = parseInt(segundos);

        let time = (a + b + c) / 3600;

        corrida.updateOne({
            "_id": _id
        }, {
            $set: {
                "time": time
            }
        }, (err: any, data: any) => {
            if (err) {
                console.log(err)
            }
            if (!data) {
                return res.status(401).json({
                    ok: false,
                    message: "Error "
                })
            }
            return res.status(200).json({
                ok: true,
                data
            });
        });

    }
    static getstate(req: Request, res: Response) {
        let id = req.params.id;
        corrida.find({ "orden": id }).exec((error: any, data: any) => {
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
    static createPruebas(id: any, tipo: any) {
        return new Promise((resolve: any, reject: any) => {

            let a = new pruebas({
                tipo: tipo,
                orden: id
            });

            a.save({
            }, (err: any, data: any) => {
                if (err) {
                    console.log(err)
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
    static getpruebas(req: Request, res: Response) {
        let id = req.params.id;
        pruebas.find({ "orden": id }).exec((error: any, data: any) => {
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
    static updatePruebas(req: Request, res: Response) {

        let {
            orden,
            tipo
        } = req.body;

        pruebas.deleteOne({
            orden, tipo
        }).exec((err: any, data: any) => {
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
    static closeTrabajo(id: any) {
        return new Promise((resolve: any, reject: any) => {

            modeltrabajo.updateOne({
                "_id": id
            }, {
                $set: {
                    "status": "CLOSED"
                }
            }, (err: any, data: any) => {
                if (err) {
                    console.log(err)
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
    static getResultados(req: Request, res: Response) {
        let id = req.params.id;
        modelresultados.find({ "orden": id }).exec((error: any, data: any) => {
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