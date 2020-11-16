import { Request, Response } from "express";
import modelInstrumento from '../models/instrumentos';
import modelDefault from '../models/default_instrumentos';
import modeldefaultparametros from '../models/default_parametros';
import modelBanco from '../models/banco_ensayos';
import modelcalibraciones from '../models/calibraciones';


export default class InstrumentosController {

    static crear(req: Request, res: Response) {

        let {
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
        } = req.body;

        let a = new modelInstrumento({
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

        a.save((err: any, datadb: any) => {
            if (err) {
                console.log(err)
            }

            if (!datadb) {
                return res.status(401).json({
                    ok: false,
                    message: "Error "
                })
            }

            return res.status(200).json({
                ok: true
            });
        });
    }
    static update(req: Request, res: Response) {

        let {
            _id,
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
        } = req.body;



        modelInstrumento.updateOne({ "_id": _id }, {
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
        }).exec((err: any, datadb: any) => {
            if (err) {
                console.log(err)
            }

            if (!datadb) {
                return res.status(401).json({
                    ok: false,
                    message: "Error "
                })
            }

            if (datadb) {
                return res.status(200).json({
                    ok: true
                });

            }

        });
    }
    static getAll(req: Request, res: Response) {
        modelInstrumento.find().exec((error: any, data: any) => {
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
    static getOne(req: Request, res: Response) {
        let _id = req.params.id;

        modelInstrumento.find({ _id }).exec((error: any, data: any) => {
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
    static default(req: Request, res: Response) {

        let {
            _id,
            rvm,
            t_entrada_agua,
            tiempo,
            temp_ambiente,
            humedad,
            presion_entrada,
            presion_salida,
            caudal,
            temprvm
        } = req.body;

        modelDefault.updateOne({ _id }, {
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
    static getDefaultInstrumentos(req: Request, res: Response) {
        modelDefault.find({}).exec((error: any, data: any) => {
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
    static defaultParametros(req: Request, res: Response) {

        let {
            _id,
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
        } = req.body;

        modeldefaultparametros.updateOne({ _id }, {
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
    static getDefaultParametros(req: Request, res: Response) {
        modeldefaultparametros.find({}).exec((error: any, data: any) => {
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
    static crearBanco(req: Request, res: Response) {

        let {
            numero,
            identificacion,
            tipo,
            automatico,
            lineas,
            medidores,
            descripcion
        } = req.body;

        let a = new modelBanco({
            numero,
            identificacion,
            tipo,
            automatico,
            lineas,
            medidores,
            descripcion
        })

        a.save((err: any, data: any) => {
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
    static getBancos(req: Request, res: Response) {
        modelBanco.find({}).exec((error: any, data: any) => {
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
    static updateBanco(req:Request,res:Response){

        let {
            _id,
            numero,
            identificacion,
            tipo,
            automatico,
            lineas,
            medidores,
            descripcion,
            status
        } = req.body;

        modelBanco.updateOne({'_id':_id},{ $set:{
            numero:numero,
            identificacion:identificacion,
            tipo:tipo,
            automatico:automatico,
            lineas:lineas,
            medidores:medidores,
            descripcion:descripcion,
            status:status
        }}).exec((error: any, data: any) => {
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
    static getCaudal(req: Request, res: Response) {
        modelInstrumento.find({
            'propiedad_uno': 'Volumen'
        }).exec((error: any, data: any) => {
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
    static async setCalibracion(req: Request, res: Response) {

        let {
            _id,
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
            parametro_referencia,
            item


        } = req.body;

        let b = await InstrumentosController.newCalibracion(_id, proxima, certificado, fecha_calibracion, trazabilidad, error_indicacion, incertidumbre, correcion_escala, incertidumbre_escala,
            factor_cubrimiento, parametro_referencia,error_indicacion_anterior,division_escala).then((data: any) => {
                return data;
            }).catch((error: any) => {
                return error;
            });
        
            modelInstrumento.updateOne({ "_id": _id }, {
                $set: {
                    certificado,
                    fuente:trazabilidad,
                    fecha_calibracion
                }
            }).exec((err: any, datadb: any) => {
                if (err) {
                    console.log(err)
                }
    
                if (!datadb) {
                    return res.status(401).json({
                        ok: false,
                        message: "Error "
                    })
                }
    
                if (datadb) {
                    return res.status(200).json({
                        ok: true
                    });
    
                }
    
            });  
    }
    static newCalibracion(instrumento: any, proxima: any, certificado: any, fecha_calibracion: any,
        trazabilidad: any, error_indicacion: any, incertidumbre: any, correcion_escala: any, incertidumbre_escala: any, factor_cubrimiento: any,
        parametro_referencia: any,error_indicacion_anterior:any,division_escala:any) {

        return new Promise((resolve, reject) => {

            let a = new modelcalibraciones({
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

            a.save((err: any, datadb: any) => {
                if (err) {
                    console.log(err)
                }

                if (!datadb) {
                    reject(false)
                }

                if (datadb) {
                    resolve(true)
                }
            });
        });
    }
    static getOneCalibracion(req: Request, res: Response) {
        let _id = req.params.id;

        modelcalibraciones.find({'instrumento':_id }).exec((error: any, data: any) => {
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
    static DeletehistoricoCalibracion(req: Request, res: Response) {
        let id = req.params.id;
       
        modelcalibraciones.deleteOne({ "_id": id }).exec((error: any, data: any) => {
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