import { Request, Response } from "express";
import modelmedidor from '../models/medidores';
import modelEntrada from '../models/entrada';
import modelTrabajo from '../models/trabajo';
import modelconsecutivo from '../models/consecutivo';
import moment from 'moment';
var padStart = require('string.prototype.padstart');
import mongoose from 'mongoose';


export default class MedidorController {

    static async nuevo(req: Request, res: Response) {

        let {
            fabricacion,
            marca,
            modelo,
            serie,
            entrada,
            incidencias,
            norma,
            q3,
            precision,
            pmaxp,
            pperdida,
            q3q1,
            q2q1,
            clasetemp,
            aguasarriba,
            aguasabajo,
            tipo,
            principio,
            posicion,
            diametro,
            rango,
            escala,
            estado,
            identificador,
            clase,
            pnominal,
            type
        } = req.body;

        let consecutivo = await MedidorController.getConsecutivo2().then((a: any) => {
            return a;
        }).catch((error: any) => {
            return error;
        });

        let n = parseInt(consecutivo.numero);

        let newcc = (n + 1);

        let newcc2 = (n + 1).toString();

        let newconsecutivo = newcc2.padStart(6, "0");

        let setconsecutivo = await MedidorController.setConsecutivo(consecutivo._id, newcc).then((a: any) => {
            return a;
        }).catch((error: any) => {
            return error;
        });

        let numero = await MedidorController.getConsecutivo().then((a: any) => {
            return a;
        }).catch((error: any) => {
            return error;
        });

        let y = moment().format('YYYY');      
        let year = `LCM${y}`;

        let orden = (numero + 1);

        if (type == 3) {          

            let q4 = 2 * q3;
            

            let a = new modelmedidor({
                orden: orden,
                datos: {
                    fabricacion,
                    marca: marca._id,
                    modelo: modelo._id,
                    serie,
                    lectura: entrada
                },
                metrologicas:
                {
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

        } else {
            let q1 = q3 / q3q1;
            let q2 = 1.6 * q1;
            let q4 = 1.25 * q3;

            let a = new modelmedidor({
                orden: orden,
                datos: {
                    fabricacion,
                    marca: marca._id,
                    modelo: modelo._id,
                    serie,
                    lectura: entrada
                },
                metrologicas:
                {
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
    }

    static updateMedidor(req: Request, res: Response) {
        let {
            _id,
            fabricacion,
            marca,
            modelo,
            serie,
            entrada,
            incidencias,
            cliente,
            estado
        } = req.body;

        modelmedidor.updateOne({ _id: _id }, {
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
        }).exec((error: any, data: any) => {
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
        })


    }
    static updateMedidor2(req: Request, res: Response) {
        let {
            _id,
            norma,
            q3,
            precision,
            pmaxp,
            pperdida,
            q3q1,
            q2q1,
            clasetemp,
            aguasarriba,
            aguasabajo,
            tipo,
            principio,
            posicion,
            diametro,
            rango,
            escala,
            identificador,
            pnominal,
            clase,
            type
        } = req.body;



        if (type == 3) {

            modelmedidor.updateOne({ _id: _id }, {
                $set: {
                    metrologicas:
                    {
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
            }).exec((err: any, data: any) => {
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

        } else {
            let q1 = q3 / q3q1;
            let q2 = 1.6 * q1;
            let q4 = 1.25 * q3;

            modelmedidor.updateOne({ _id: _id }, {
                $set: {
                    metrologicas:
                    {
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
            }).exec((err: any, data: any) => {
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

    }
    static async derogarCertificado(req: Request, res: Response) {

        let {
            _id,
            nuevo,
            observacion
        } = req.body;

        let consecutivo = await MedidorController.getConsecutivo2().then((a: any) => {
            return a;
        }).catch((error: any) => {
            return error;
        });


        let n = parseInt(consecutivo.numero);
        let newcc2 = (n + 1).toString();
        let newconsecutivo = newcc2.padStart(6, "0");   
        let newcc = (n + 1);
        let y = moment().format('YYYY');      
        let year = `LCM${y}`;


        if (nuevo == "0") {
            modelmedidor.findOne({ _id: _id },
            ).exec((err: any, data: any) => {
                if (err) {
                    console.log(err)
                }
                if (!data) {
                    return res.status(401).json({
                        ok: false,
                        message: "Error "
                    })
                }

                let doc = new modelmedidor(data);
                doc._id = mongoose.Types.ObjectId();
                doc.isNew = true;

                let oldcertificado=`${data.year}-${data.consecutivo}` ;                

                doc.save(async (error: any, d: any) => {
                    if (err) {
                        console.log(err)
                    }
                    if (!d) {
                        return res.status(401).json({
                            ok: false,
                            message: "Error "
                        })
                    }

                    let setconsecutivo = await MedidorController.setConsecutivo(consecutivo._id, newcc).then((a: any) => {
                        return a;
                    }).catch((error: any) => {
                        return error;
                    });          


                    let cscutivo= await MedidorController.saveconsecutivo(d._id,newconsecutivo,year,oldcertificado).then((x:any)=>{
                        return x;
                    }).catch((error:any)=>{
                        return error;
                    });

                   

                    let obs= await MedidorController.deletecertificado(_id,observacion,newconsecutivo,year).then((x:any)=>{
                        return x;
                    }).catch((error:any)=>{
                        return error;
                    });


                    if(d){                     
                        return res.status(200).json({
                            ok: true,
                            d
                        });   
                    }                 
                });
            });


        } else {
            modelmedidor.updateOne({ _id: _id }, {
                $set: {
                    observaciones: observacion
                }
            }).exec((err: any, data: any) => {
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





    }
    static GetMedidoresOpen(req: Request, res: Response) {
        modelmedidor.find({ "status": "OPEN" }).populate({
            path: 'datos.modelo',
            populate: { path: 'modelo' }
        }).populate({
            path: 'datos.marca',
            populate: { path: 'marca' }
        }).populate('cliente').exec((error: any, data: any) => {
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
    static GetMedidoresSave(req: Request, res: Response) {
        modelmedidor.find({ "status": "SAVE" }).populate({
            path: 'datos.modelo',
            populate: { path: 'modelo' }
        }).populate({
            path: 'datos.marca',
            populate: { path: 'marca' }
        }).populate('cliente').exec((error: any, data: any) => {
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
    static DeleteMedidor(req: Request, res: Response) {
        let id = req.params.id;
        modelmedidor.deleteOne({ "_id": id }).exec((error: any, data: any) => {
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
    static async updateOrden(req: Request, res: Response) {

        let { medidores, usuario, cliente } = req.body;

        let numero = await MedidorController.getConsecutivoOrdenEntrada().then((a: any) => {
            return a;
        }).catch((error: any) => {
            return error;
        });

        let orden = numero + 1;


        let nueva = await MedidorController.createOrdenEntrada(medidores, usuario, orden, cliente).then((a: any) => {
            return a;
        }).catch((error: any) => {
            return error;
        });

        modelmedidor.updateMany({ 'status': 'OPEN' }, {
            $set: {
                'status': 'SAVE',
                'orden_entrada': nueva,
                'cliente': cliente
            }
        }).exec((error: any, data: any) => {
            if (error) {
                console.log(error)
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
    static getConsecutivo() {
        return new Promise((resolve: any, reject: any) => {
            modelmedidor.find({}).limit(1).sort({ orden: -1 }).exec((error: any, data: any) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    console.log("hola")
                }
                if (data) {
                    resolve(data[0].orden)
                }
            });
        });
    }
    static updateparametros(item: any, datos: any, id: any,ingreso:any,encargado:any) {
        return new Promise((resolve: any, reject: any) => {
            console.log(encargado);
            modelmedidor.updateOne({ '_id': item._id }, {
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
                    ingreso:ingreso,
                    calibro:encargado
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
            });
        });
    }
    static createOrdenEntrada(data: any, usuario: any, orden: any, cliente: any) {
        return new Promise((resolve: any, reject: any) => {

            let a = new modelEntrada({
                orden: orden,
                medidores: data,
                creado: usuario,
                cliente: cliente
            });

            a.save((err: any, data: any) => {
                if (err) {
                    console.log(err)
                }
                if (!data) {
                    reject(false)
                }
                resolve(data._id);
            });

        })
    }
    static getConsecutivoOrdenEntrada() {
        return new Promise((resolve: any, reject: any) => {
            modelEntrada.find({}).limit(1).sort({ orden: -1 }).exec((error: any, data: any) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    console.log("hola")
                }
                if (data) {
                    resolve(data[0].orden)
                }
            });
        });
    }
    static GetOrdenes(req: Request, res: Response) {

        let { inicio, fin } = req.body;

        let fecha_inicio: any = inicio || "2010-02-08T09";
        let fecha_fin: any = fin || "2050-02-08T09";

        let f_inicio = moment(fecha_inicio).format();
        let f_fin = moment(fecha_fin).format();


        modelEntrada.find({
            fecha: {
                $gte: f_inicio,
                $lte: f_fin,
            }
        }).populate('creado').populate('medidores').exec((err: any, data: any) => {
            if (err) {
                console.log(err.message);
                return res.status(500).json({
                    error: err.message
                });
            }
            if (!data) {  // si no se consiguen documentos
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
    static setOrdenEntrada(id: any, orden: any) {

        return new Promise((resolve: any, reject: any) => {
            modelmedidor.updateOne({ '_id': id }, {
                $set: {

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
            });


        });
    }
    static GetOrdenesTrabajo(req: Request, res: Response) {

        let { inicio, fin } = req.body;

        let fecha_inicio: any = inicio || "2010-02-08T09";
        let fecha_fin: any = fin || "2050-02-08T09";

        let f_inicio = moment(fecha_inicio).format();
        let f_fin = moment(fecha_fin).format();


        modelTrabajo.find({
            fecha: {
                $gte: f_inicio,
                $lte: f_fin,
            }
        }).populate('encargado').populate('medidores').exec((err: any, data: any) => {
            if (err) {
                console.log(err.message);
                return res.status(500).json({
                    error: err.message
                });
            }
            if (!data) {  // si no se consiguen documentos
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
        return new Promise((resolve: any, reject: any) => {
            modelconsecutivo.find({}).limit(1).sort({ fecha: -1 }).exec((error: any, data: any) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    console.log("hola")
                }
                if (data) {
                    resolve(data[0])
                }
            });
        });
    }
    static setConsecutivo(id: any, numero: any) {

        return new Promise((resolve: any, reject: any) => {
            modelconsecutivo.updateOne({ '_id': id }, {
                $set: {
                    numero: numero
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
            });


        });
    }
    static saveconsecutivo(id:any,consecutivo:any,year:any,oldcertificado:any){
        return new Promise((resolve,reject)=>{
            
            modelmedidor.updateOne({ _id: id }, {
                $set: {
                    consecutivo: consecutivo,
                    year:year,
                    oldcertificado:oldcertificado
                }
            }).exec((err: any, data: any) => {
                if (err) {
                    console.log(err)
                }
                if (!data) {
                   reject(false)
                }

                resolve(true);
            });
        });
    }
    static deletecertificado(id:any,observacion:any,old:any,year:any){
        return new Promise((resolve,reject)=>{            
            modelmedidor.updateOne({ _id: id }, {
                $set: {
                    observaciones: observacion,
                    derogado:"true",
                    oldcertificado:`${year}-${old}`
                }
            }).exec((err: any, data: any) => {
                if (err) {
                    console.log(err)
                }
                if (!data) {
                   reject(false)
                }

                resolve(true);
            });
        });
    }













}
