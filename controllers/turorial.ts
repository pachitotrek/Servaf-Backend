import {Request,Response } from "express";
import tutorial from '../models/tutorial';
import uploadService from "./upload";

export default class TutorialesController{


    static crearTutorial(req:Request,res:Response){
        let {titulo,descripcion,seccion,imagen} = req.body;

        let a =new tutorial({
            titulo,descripcion,seccion,imagen      
        });

        a.save((err:any,data:any)=>{
            if(err){
                return res.status(500).json({
                    ok:false,
                    message:'Error desconocido',
                    err
                });
            }
            if(!data){
                return res.status(401).json({
                    ok:false,
                    message:'Error No se encuentra',
                    err
                });
            }
            
            if(data){
                return res.status(200).json({
                    ok:true,
                    data
                });
            }           
        });
    }
   
    static getTutoriales(req:Request,res:Response){       
        tutorial.find({}).exec((err:any,data:any)=>{
           if(err){
                return res.status(500).json({
                    ok:false,
                    message:'Error desconocido',
                    err
                });
            }
            if(!data){
                return res.status(401).json({
                    ok:false,
                    message:'Error No se encuentra',
                    err
                });
            }
            
            if(data){
                return res.status(200).json({
                    ok:true,
                    data
                });
            }  
        }); 
    }


}

