import {Request,Response } from "express";
import ModelOpciones from '../models/o_instrumentos';

export default class OpcionesInstrumentosController{

    static getAll(req:Request,res:Response){
        ModelOpciones.find().exec((error:any,data:any)=>{
            if(error){
                return res.status(500).json({
                    ok:false,
                    error
                });
            }
            if(!data){
                return res.status(401).json({
                    ok:false,
                    message:"Error"
                });
            }
            if(data){
                return res.status(201).json({
                    ok:true,
                    data
                });
            }
        });
    }

    
    

}