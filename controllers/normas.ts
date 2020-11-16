import { Request, Response } from "express";
import Norma from '../models/normas';
import other from '../models/others'


export default class NormasController{

    static getAll(req: Request, res: Response) {
        Norma.find().exec((error: any, data: any) => {
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

    static crearother(req:Request,res:Response){        

        let {
            titulo          
        } = req.body;   

        let cliente = new other({
            titulo        
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

    
    static getAllOthers(req: Request, res: Response) {
        other.find().exec((error: any, data: any) => {
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





    



}