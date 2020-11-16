"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cmc_1 = __importDefault(require("../models/cmc"));
const medidores_1 = __importDefault(require("../models/medidores"));
const xlsx_1 = __importDefault(require("xlsx"));
const path_1 = __importDefault(require("path"));
class CmcController {
    static update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { _id, instrumento, error } = req.body;
            console.log(error);
            cmc_1.default.updateOne({ "_id": _id }, {
                $set: {
                    error: error
                }
            }).exec((err, datadb) => {
                if (err) {
                    console.log(err);
                }
                if (!datadb) {
                    return res.status(401).json({
                        ok: false,
                        message: "Error "
                    });
                }
                if (datadb) {
                    return res.status(200).json({
                        ok: true
                    });
                }
            });
        });
    }
    static crear(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { instrumento, error } = req.body;
            let a = new cmc_1.default({
                instrumento: instrumento,
                error: error
            });
            a.save((err, datadb) => {
                if (err) {
                    console.log(err);
                }
                if (!datadb) {
                    return res.status(401).json({
                        ok: false,
                        message: "Error "
                    });
                }
                if (datadb) {
                    return res.status(200).json({
                        ok: true
                    });
                }
            });
        });
    }
    static getCMC(req, res) {
        cmc_1.default.find({}).populate('instrumento').exec((error, data) => {
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
    static updateparametros(uno, dos, tres, cuatro) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var pathFileq1 = path_1.default.resolve(__dirname, `../../assets/Q1.xlsx`);
            var outputq1 = path_1.default.resolve(__dirname, `../../assets/Q1.xlsx`);
            var pathFileq2 = path_1.default.resolve(__dirname, `../../assets/Q2.xlsx`);
            var outputq2 = path_1.default.resolve(__dirname, `../../assets/Q2.xlsx`);
            var pathFileq3 = path_1.default.resolve(__dirname, `../../assets/Q3.xlsx`);
            var outputq3 = path_1.default.resolve(__dirname, `../../assets/Q3.xlsx`);
            let documentoQ1 = xlsx_1.default.readFile(pathFileq1);
            let hojaQ1 = documentoQ1.SheetNames[1];
            let worksheetQ1 = documentoQ1.Sheets[hojaQ1];
            let desired_cellQ1_1 = worksheetQ1["N151"];
            let desired_cellQ1_2 = worksheetQ1["N153"];
            let desired_cellQ1_3 = worksheetQ1["N157"];
            let desired_cellQ1_4 = worksheetQ1["N159"];
            desired_cellQ1_1.v = uno;
            desired_cellQ1_2.v = dos;
            desired_cellQ1_3.v = tres;
            desired_cellQ1_4.v = cuatro;
            let a = yield xlsx_1.default.writeFile(documentoQ1, outputq1);
            let documentoQ2 = xlsx_1.default.readFile(pathFileq2);
            let hojaQ2 = documentoQ1.SheetNames[1];
            let worksheetQ2 = documentoQ2.Sheets[hojaQ2];
            let desired_cellQ2_1 = worksheetQ2["N151"];
            let desired_cellQ2_2 = worksheetQ2["N153"];
            let desired_cellQ2_3 = worksheetQ2["N157"];
            let desired_cellQ2_4 = worksheetQ2["N159"];
            desired_cellQ2_1.v = uno;
            desired_cellQ2_2.v = dos;
            desired_cellQ2_3.v = tres;
            desired_cellQ2_4.v = cuatro;
            let b = yield xlsx_1.default.writeFile(documentoQ2, outputq2);
            let documentoQ3 = xlsx_1.default.readFile(pathFileq3);
            let hojaQ3 = documentoQ1.SheetNames[1];
            let worksheetQ3 = documentoQ3.Sheets[hojaQ3];
            let desired_cellQ3_1 = worksheetQ3["N151"];
            let desired_cellQ3_2 = worksheetQ3["N153"];
            let desired_cellQ3_3 = worksheetQ3["N157"];
            let desired_cellQ3_4 = worksheetQ3["N159"];
            desired_cellQ3_1.v = uno;
            desired_cellQ3_2.v = dos;
            desired_cellQ3_3.v = tres;
            desired_cellQ3_4.v = cuatro;
            let c = yield xlsx_1.default.writeFile(documentoQ3, outputq3);
            resolve(true);
        }));
    }
    static getincomformidad(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let medidor = yield CmcController.getmedidor(id).then((data) => {
                return data;
            }).catch((error) => {
                return error;
            });
            let nombre = "C8";
            let direccion = "C10";
            let nit = "C12";
            let no = "G8";
            let fecha_recepcion = "G10";
        });
    }
    static getmedidor(id) {
        return new Promise((resolve, reject) => {
            medidores_1.default.find({ id }).exec((error, data) => {
                if (error) {
                    reject(false);
                }
                if (!data) {
                    reject(false);
                }
                if (data) {
                    resolve(data);
                }
            });
        });
    }
}
exports.default = CmcController;
