"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const medidores_1 = __importDefault(require("../models/medidores"));
class uploadService {
    static uploadImage(req, res) {
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
        const archivo = req.files.archivo;
        const fileExt = archivo.mimetype;
        const ext = archivo.mimetype.split('/')[1];
        const fileName = `${_id}${key}${new Date().getMilliseconds()}.${ext}`;
        let extensionesvalidas = ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'video/mp4'];
        let keysValors = ['medidor', 'lugar', 'cupon', 'perfil', 'publicidad', 'seriesfile'];
        if (extensionesvalidas.indexOf(fileExt) > -1) {
            if (keysValors.includes(key, 0)) {
                archivo.mv(`uploads/${key}/${fileName}`, (err) => {
                    if (err) {
                        return res.status(500).json({
                            ok: false,
                            message: 'error al mover el archivo'
                        });
                    }
                });
            }
            else {
                return res.status(401).json({
                    ok: false,
                    message: 'Funcion aun no construida'
                });
            }
            if (key === "medidor") {
                medidores_1.default.updateOne({ '_id': _id }, {
                    $push: {
                        imagenes: [{
                                imagen: fileName
                            }]
                    }
                }).exec((error, data) => {
                    if (error) {
                        console.log(error);
                    }
                    if (!data) {
                        return res.status(401).json({
                            ok: false,
                            message: "Error "
                        });
                    }
                    return res.status(200).json({
                        ok: true,
                        data
                    });
                });
            }
        }
        else {
            return res.status(500).json({
                ok: false,
                err: {
                    message: 'Las extensiones permitidas son ' + extensionesvalidas.join(', '),
                    ext: ext
                }
            });
        }
    }
    static borraArchivo(fileName, key) {
        let pathImagen = path_1.default.resolve(__dirname, `../../uploads/${key}/${fileName}`);
        if (fs_1.default.existsSync(pathImagen)) {
            fs_1.default.unlinkSync(pathImagen);
        }
    }
}
exports.default = uploadService;
