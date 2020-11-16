import {Request,Response } from "express";
import modelCliente from '../models/clientes';

export default class ClientesController{

    static crearCliente(req:Request,res:Response){
        console.log("Hola");

        let {
            nombre,
            identificacion,
            numero,
            direccion,
            telefono,
            role,
            email,
            ciudad
        } = req.body;   

        let cliente = new modelCliente({
            nombre,
            identificacion,
            numero,
            direccion,
            telefono,
            role,
            email,
            ciudad
        });

        cliente.save((err:any, datadb:any) => {
            if (err) {
                console.log(err)
            }

            if (!datadb){
                return res.status(401).json({
                    ok:false,
                    message:"Error "
                })
            }               

            return res.status(200).json({
                ok: true
            });
        });
    }
    static editarCliente(req:Request,res:Response){
        let {
            _id,
            nombre,
            identificacion,
            numero,
            direccion,
            telefono,      
            email,
            ciudad
        } = req.body;      

        modelCliente.updateOne(
            { _id:_id },
            {
                $set: {
                    nombre,
                    identificacion,
                    numero,
                    direccion,
                    telefono,                
                    email,
                    ciudad
                }
            },
            (err:any, datadb:any) => {
                if (err)
                    return res.status(500).json({
                        ok: false,
                        message: " Error al actualizar el producto."
                    });
                if (!datadb)
                    return res.status(404).json({
                        ok: false,
                        message: "No se pudo actualizar"
                    });
             
                return res.status(200).json({
                    ok: true,
                    datadb
                });
            });
    }

    static getClientes(req:Request,res:Response){   
       
        modelCliente.find((error:any, clientes:any) => {
            if (error) {
                res.status(500).json({
                    ok: false,
                    error
                });
            }
            if (!clientes) {
                res.status(400).json({
                    ok: false,
                    message: "No se encuentra usuario"
                });
            }

            if (clientes) {              
                return res.status(200).json({
                    ok: true,
                    clientes
                });
            }
        });
        
    }
    



}