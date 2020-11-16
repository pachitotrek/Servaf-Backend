import fs from 'fs';
import path from 'path';
import { Request, Response } from "express";
import modelusuario from '../models/user';
import modelmedidor from '../models/medidores';




export default class uploadService {


    static uploadImage(req: Request, res: Response) {

        if (!req.files) {
            return res.status(400).json({
                ok: false,
                err: {
                    message: 'No se ha subido archivo'
                }
            });
        }
        const _id = req.params.id;
        const key = req.params.tipo;
        const archivo: any = req.files.archivo;
        const fileExt = archivo.mimetype;
        const ext = archivo.mimetype.split('/')[1];
        const fileName = `${_id}${key}${new Date().getMilliseconds()}.${ext}`;
        let extensionesvalidas = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'video/mp4'];
        let keysValors = ['medidor', 'lugar', 'cupon', 'perfil', 'publicidad', 'seriesfile'];      

        if (extensionesvalidas.indexOf(fileExt) > -1) {

            if (keysValors.includes(key, 0)) {

                archivo.mv(`uploads/${key}/${fileName}`, (err: any) => {
                    if (err) {
                        return res.status(500).json({
                            ok: false,
                            message: 'error al mover el archivo'
                        });
                    }
                });
            } else {
                return res.status(401).json({
                    ok: false,
                    message: 'Funcion aun no construida'
                });
            }

            if (key === "medidor") {
                modelmedidor.updateOne({ '_id': _id }, {
                    $push: {
                        imagenes:[{
                            imagen:fileName
                        }]
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
                    })


                });
            }  
        } else {
            return res.status(500).json({

                ok: false,
                err: {
                    message: 'Las extensiones permitidas son ' + extensionesvalidas.join(', '),
                    ext: ext
                }
            });
        }



    }
    static borraArchivo(fileName: any, key: any) {

        let pathImagen = path.resolve(__dirname, `../../uploads/${key}/${fileName}`);

        if (fs.existsSync(pathImagen)) {
            fs.unlinkSync(pathImagen);
        }

    }




}

