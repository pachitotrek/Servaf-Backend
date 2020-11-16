import { Request, Response } from "express";
import modelmedidor from '../models/medidores';
import modeluno from '../models/ntc1994';
import modeldos from '../models/ntc2016';

export default class MedidorCalibradoController {

    static getCalibrados(req: Request, res: Response) {
        let { serial } = req.body;

        let serie = serial || "0";

        if (serie == "0") {
            modelmedidor.find({ "status": 'CLOSED' }).populate({
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

        } else {
            modelmedidor.find({ "status": 'CLOSED', "datos.serie": serie }).populate({
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




    }

    static editarAmbientales(req: Request, res: Response) {

        let { datos, id } = req.body;

        modelmedidor.updateOne({ "_id": id, 'ambientales._id': datos._id }, {
            $set: {
                'ambientales.$.humedad': datos.humedad,
                'ambientales.$.temp_ambiente': datos.temp_ambiente,
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




    }

    static editarPrueba(req: Request, res: Response) {

        let { datos, id, tipo } = req.body;

        if (tipo == '1') {
            modelmedidor.updateOne({ "_id": id, 'q1._id': datos._id }, {
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
            modelmedidor.updateOne({ "_id": id, 'q2._id': datos._id }, {
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
            modelmedidor.updateOne({ "_id": id, 'q3._id': datos._id }, {
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
            })

        } else if (tipo == '4') {
            modelmedidor.updateOne({ "_id": id, 'q4._id': datos._id }, {
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

    }

    static addnominal(req: Request, res: Response) {

        let { diametro, clase } = req.body;

        let a = new modeluno({
            diametro,
            clase
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

            if (data) {
                return res.status(200).json({
                    ok: true,
                    data
                });
            }
        });
    }
    static pushvalor(req:Request,res:Response){

        let { id,prueba,caudal } = req.body;

        modeluno.updateOne({ "_id": id }, {
            $push: {
                valores: [
                    {
                        prueba,
                        caudal                        
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


    }

    static addnominaldos(req: Request, res: Response) {

        let { diametro, relacion } = req.body;

        let a = new modeldos({
            diametro,
            relacion
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

            if (data) {
                return res.status(200).json({
                    ok: true,
                    data
                });
            }
        });
    }
    static pushvalordos(req:Request,res:Response){

        let { id,prueba,caudal } = req.body;

        modeldos.updateOne({ "_id": id }, {
            $push: {
                valores: [
                    {
                        prueba,
                        caudal                        
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


    }

    static getNominaluno(req:Request,res:Response){

        let clase= req.params.clase;
        let diametro = req.params.diametro;
        

        modeluno.findOne({clase:clase,diametro:diametro}).exec((error: any, data: any) => {
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

    static getNominaldos(req:Request,res:Response){

        let clase= req.params.clase;
        let diametro = req.params.diametro;

        modeldos.findOne({relacion:clase,diametro:diametro}).exec((error: any, data: any) => {
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

