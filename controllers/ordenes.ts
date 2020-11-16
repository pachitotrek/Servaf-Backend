import {Request,Response } from "express";
import modelEntrada from '../models/entrada';
import modelMedidor from '../models/medidores';
import modelModelo from '../models/modelos';
import modelMarca from '../models/marcas';
import modelIncidencia from '../models/incidencias';
import modelTrabajo from '../models/trabajo';

export default class OrdenesController{

    static CrearOrdenEntrada(req:Request,res:Response){
        let {
            orden,cliente,norma,
            q3,precision,pmaxp,
            pperdida,q3q1,q2q1,
            clasetemp,aguasarriba,
            aguasabajo,tipo,principio,
            posicion,diametro,rango,escala,creado    
        } = req.body;

        let q1 = q3/q3q1;
        let q2 = 1.6*q1;
        let q4 = 1.25*q3;

        let a= new modelEntrada({
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


        a.save((err:any, data:any) => {
            if (err) {
                console.log(err)
            }
            if (!data){
                return res.status(401).json({
                    ok:false,
                    message:"Error "
                })
            }               

            return res.status(200).json({
                ok: true,
                data
            });
        });
    }
    static GetConsecutivo(req:Request,res:Response){

        modelEntrada.find().limit(1).sort({'orden':-1}).exec((error:any, data:any) => {
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
    static crearMedidor(req:Request,res:Response){
        let {
            orden,
            fabricacion,
            marca,
            modelo,
            serie,
            lectura,
            incidencias,    
            creado   
        } = req.body;
       

        let a= new modelMedidor({
            orden,
            fabricacion,
            marca:marca.titulo,
            modelo:modelo.titulo,
            serie,
            lectura,
            incidencias,    
            creado           
        });


        a.save((err:any, data:any) => {
            if (err) {
                console.log(err)
            }
            if (!data){
                return res.status(401).json({
                    ok:false,
                    message:"Error "
                })
            }               

            return res.status(200).json({
                ok: true,
                data
            });
        });
    }
    static crearModelo(req:Request,res:Response){
        let {
            titulo            
        } = req.body;
       

        let a= new modelModelo({
            titulo      
        });


        a.save((err:any, data:any) => {
            if (err) {
                console.log(err)
            }
            if (!data){
                return res.status(401).json({
                    ok:false,
                    message:"Error "
                })
            }               

            return res.status(200).json({
                ok: true,
                data
            });
        });
    }
    static crearMarca(req:Request,res:Response){
        let {
            titulo            
        } = req.body;
       

        let a= new modelMarca({
            titulo      
        });


        a.save((err:any, data:any) => {
            if (err) {
                console.log(err)
            }
            if (!data){
                return res.status(401).json({
                    ok:false,
                    message:"Error "
                })
            }               

            return res.status(200).json({
                ok: true,
                data
            });
        });
    }
    static crearIncidencia(req:Request,res:Response){
        let {
            titulo            
        } = req.body;
       

        let a= new modelIncidencia({
            titulo      
        });


        a.save((err:any, data:any) => {
            if (err) {
                console.log(err)
            }
            if (!data){
                return res.status(401).json({
                    ok:false,
                    message:"Error "
                })
            }               

            return res.status(200).json({
                ok: true,
                data
            });
        });
    }
    static GetModelos(req:Request,res:Response){

        modelModelo.find().exec((error:any, data:any) => {
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
    static GetMarcas(req:Request,res:Response){

        modelMarca.find({}).exec((error:any, data:any) => {
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
    static GetIncidencias(req:Request,res:Response){

        modelIncidencia.find({}).exec((error:any, data:any) => {
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
    static GetMedidoresOrden(req:Request,res:Response){
        let id = req.params.id;
        modelMedidor.find({"orden":id,"status":"OPEN"}).exec((error:any, data:any) => {
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
    static DeleteMedidoresOrden(req:Request,res:Response){
        let id = req.params.id;
        modelMedidor.deleteOne({"_id":id}).exec((error:any, data:any) => {
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
    static GetOrden(req:Request,res:Response){
        let id = req.params.id;
        modelEntrada.find({"_id":id}).populate('cliente').populate('medidores').populate('creado').exec((error:any, data:any) => {
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
    static GetOrdenOpen(req:Request,res:Response){
        let status = "OPEN";
        modelEntrada.find({"status":status}).populate('cliente').populate('creado').exec((error:any, data:any) => {
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
    static GetOrdenOpenOne(req:Request,res:Response){
        let id = req.params.id;

        modelEntrada.find({"_id":id,"status":"OPEN"}).populate('cliente').exec((error:any, data:any) => {
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
    static GetOrdenTrabajo(req:Request,res:Response){
        let id = req.params.id;       
        modelTrabajo.find({"_id":id}).populate('cliente').populate('ordenante').populate('encargado').populate('banco')
        .populate({
            path:'instrumentos_q1.humedad',
            populate:{ path:'humedad'}                
        })
        .populate({
            path:'instrumentos_q1.presion_entrada',
            populate:{ path:'presion_entrada'}                
        })
        .populate({
            path:'instrumentos_q1.presion_salida',
            populate:{ path:'presion_salida'}                
        })
        .populate({
            path:'instrumentos_q1.rvm',
            populate:{ path:'rvm'}                
        })
        .populate({
            path:'instrumentos_q1.t_entrada_agua',
            populate:{ path:'t_entrada_agua'}                
        })
        .populate({
            path:'instrumentos_q1.temp_ambiente',
            populate:{ path:'temp_ambiente'}                
        })
        .populate({
            path:'instrumentos_q1.tiempo',
            populate:{ path:'tiempo'}                
        })
        .populate({
            path:'instrumentos_q1.caudal',
            populate:{ path:'caudal'}                
        })
        .populate({
            path:'instrumentos_q1.temprvm',
            populate:{ path:'temprvm'}                
        })
        .populate({
            path:'instrumentos_q2.humedad',
            populate:{ path:'humedad'}                
        })
        .populate({
            path:'instrumentos_q2.presion_entrada',
            populate:{ path:'presion_entrada'}                
        })
        .populate({
            path:'instrumentos_q2.presion_salida',
            populate:{ path:'presion_salida'}                
        })
        .populate({
            path:'instrumentos_q2.rvm',
            populate:{ path:'rvm'}                
        })
        .populate({
            path:'instrumentos_q2.t_entrada_agua',
            populate:{ path:'t_entrada_agua'}                
        })
        .populate({
            path:'instrumentos_q2.temp_ambiente',
            populate:{ path:'temp_ambiente'}                
        })
        .populate({
            path:'instrumentos_q2.tiempo',
            populate:{ path:'tiempo'}                
        })
        .populate({
            path:'instrumentos_q2.caudal',
            populate:{ path:'caudal'}                
        })
        .populate({
            path:'instrumentos_q2.temprvm',
            populate:{ path:'temprvm'}                
        })   
        .populate({
            path:'instrumentos_q3.humedad',
            populate:{ path:'humedad'}                
        })
        .populate({
            path:'instrumentos_q3.presion_entrada',
            populate:{ path:'presion_entrada'}                
        })
        .populate({
            path:'instrumentos_q3.presion_salida',
            populate:{ path:'presion_salida'}                
        })
        .populate({
            path:'instrumentos_q3.rvm',
            populate:{ path:'rvm'}                
        })
        .populate({
            path:'instrumentos_q3.t_entrada_agua',
            populate:{ path:'t_entrada_agua'}                
        })
        .populate({
            path:'instrumentos_q3.temp_ambiente',
            populate:{ path:'temp_ambiente'}                
        })
        .populate({
            path:'instrumentos_q3.tiempo',
            populate:{ path:'tiempo'}                
        })
        .populate({
            path:'instrumentos_q3.caudal',
            populate:{ path:'caudal'}                
        })
        .populate({
            path:'instrumentos_q3.temprvm',
            populate:{ path:'temprvm'}                
        })             
        .populate('instrumentos').exec((error:any, data:any) => {
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