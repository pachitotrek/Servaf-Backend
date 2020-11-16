"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class ReadFileController {
    static getFile(req, res) {
        let tipo = req.params.tipo;
        let img = req.params.img;
        var pathFile = path_1.default.resolve(__dirname, `../../uploads/${tipo}/${img}`);
        if (fs_1.default.existsSync(pathFile)) {
            res.sendFile(pathFile);
        }
        else {
            var pathFile = path_1.default.resolve(__dirname, '../../assets/noimage.jpg');
            res.sendFile(pathFile);
        }
    }
}
exports.default = ReadFileController;
