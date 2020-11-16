import {Request,Response } from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import generator from 'generate-password';
import { SEED, CADUCIDAD_TOKEN } from "../global/environment";
import modelusuario from '../models/user';


export default class UserController{

    static login(req:Request,res:Response){
        let {username,pass} = req.body;       
        modelusuario.findOne({"username":username}).exec((err:any,usuarioDB:any)=>{
                if(err){
                    console.log(err);
                    return res.status(500).json({
                        ok:false,
                        message:"Error",
                        err
                    });
                }
                if(!usuarioDB){
                    return res.status(401).json({
                        ok:false,
                        message:"No se encuentra el usuario"
                    });
                }

                if(!bcrypt.compareSync(pass,usuarioDB.pass)){
                    return res.status(400).json({
                        ok:false,
                        message:"Error contraseña incorrectas"
                    });
                }

                let token = jwt.sign({
                    id: usuarioDB.id,
                    username: usuarioDB.username,
                    nombre: usuarioDB.nombre,
                    apellido: usuarioDB.apellido
                }
                    ,SEED , { expiresIn: CADUCIDAD_TOKEN });

                usuarioDB.pass = ":D";   
                return res.status(200).json({
                    ok: true,
                    usuarioDB,
                    token
                });              
        });


    } 
    static generarToken(usuarioDB:any,res:Response){
        let token = jwt.sign({
            id: usuarioDB._id,
            username: usuarioDB.username,
            nombre: usuarioDB.nombre,
            apellido: usuarioDB.apellido
        }
            , SEED, { expiresIn: CADUCIDAD_TOKEN });
        usuarioDB.pass = ":D";
        return res.status(200).json({
            ok: true,
            usuarioDB,
            token
        });
    }
    static crearUsuario(req:Request,res:Response){

        let {nombre,apellido,role,cargo,username} = req.body;
        let pass="servaf2020";
        let password = bcrypt.hashSync(pass,10);

        let usuario = new modelusuario({
            nombre,
            apellido,
            cargo, 
            role,
            username,       
            pass:password
        });

        usuario.save((err:any, usuarioDB:any) => {
            if (err) {
                console.log(err)
            }

            if (!usuarioDB){
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
    static check(req:Request,res:Response){
        let username = req.params.id;

        modelusuario.findOne({"username":username}).exec((err:any,data:any)=>{
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: "Error",
                    err
                });
            }
            if (!data) {
                return res.status(200).json({
                    username: true
                });
            }
            return res.status(200).json({
                username: false
            });
        });
    }

    static editarUsuario(req:Request,res:Response){
        let {  nombre,
            apellido,
            cargo, 
            role,
            username,_id} = req.body;      

        modelusuario.updateOne(
            { _id: _id },
            {
                $set: {
                    nombre,
                    apellido,
                    cargo, 
                    role,
                    username,   
                }
            },
            (err:any, usuarioDB:any) => {
                if (err)
                    return res.status(500).json({
                        ok: false,
                        message: " Error al actualizar el producto."
                    });
                if (!usuarioDB)
                    return res.status(404).json({
                        ok: false,
                        message: "No se pudo actualizar"
                    });
                usuarioDB.pass = ":D";
                return res.status(200).json({
                    ok: true,
                    usuarioDB
                });
            });
    }
    static getUsers(req:Request,res:Response){    
        modelusuario.find((error:any, usuarios:any) => {
            if (error) {
                res.status(500).json({
                    ok: false,
                    error
                });
            }
            if (!usuarios) {
                res.status(400).json({
                    ok: false,
                    message: "No se encuentra usuario"
                });
            }

            if (usuarios) {              
                return res.status(200).json({
                    ok: true,
                    usuarios
                });
            }
        });
    }
    static getUser(req:Request,res:Response){   
        let id = req.params.id; 
        modelusuario.find(({_id:id}),(error:any, data:any) => {
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
    static checkpass(req:Request,res:Response){
        let body = req.body;

        modelusuario
        .findOne({ "_id": body._id })
        .exec((err:any, usuarioDB:any) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: "Error",
                    err
                });
            }
            if (!usuarioDB) {
                return res.status(401).json({
                    ok: false,
                    message: "No se encuentra el Usuario"
                });
            }

            if (!bcrypt.compareSync(body.pass, usuarioDB.pass)) {
                return res.status(400).json({
                    ok: false,
                    err: {
                        message: 'Error Contraseña incorrectas'
                    }
                });
            }
            usuarioDB.pass = ":D";

            if (usuarioDB) {
                UserController.changepass(req,res);
                // UserController.changepass(req, res);
            }

        });

    }
    static changepass(req:Request,res:Response){
        let body = req.body;
        // let pass = bcrypt.hashSync(body.pass,10);
        let pass = body.pass;

        modelusuario
        .findOneAndUpdate({ "_id": body._id }, { "pass": pass })
        .exec((err:any, usuarioDB:any) => {
            if (err) {
                return res.status(500).json({
                    ok: false,
                    message: "Error",
                    err
                });
            }
            if (!usuarioDB) {
                return res.status(401).json({
                    ok: false,
                    message: "No se encuentra el Usuario"
                });
            }

            if (usuarioDB) {
                return res.status(200).json({
                    ok: true,
                    message: "Ha Actualizado su Contraseña"
                });
            }
        })
    }
    static delete(req:Request,res:Response){
         let {_id} = req.body;

         modelusuario.deleteOne({_id}).exec((error:any,data:any)=>{
                if(error){
                    return res.status(501).json({
                        ok:false,
                        error
                    })
                }
                if(data){
                    return res.status(200).json({
                        ok:true,
                        data
                    })
                }
         });
         
         

    }  
}