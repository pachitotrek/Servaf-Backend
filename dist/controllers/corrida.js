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
const path_1 = __importDefault(require("path"));
const xlsx_1 = __importDefault(require("xlsx"));
const corrida_1 = __importDefault(require("../models/corrida"));
const mefinales_1 = __importDefault(require("../models/mefinales"));
const resultados_1 = __importDefault(require("../models/resultados"));
class CorridaController {
    static exportinforme(req, res) {
        var pathFile = path_1.default.resolve(__dirname, `../../assets/q1.xlsx`);
        var output = path_1.default.resolve(__dirname, `../../assets/q1output.xlsx`);
        let documento = xlsx_1.default.readFile(pathFile);
        let hoja = documento.SheetNames[2];
        let address_of_cell = 'K22';
        let lecturafinal = 'B2';
        let lecturainicial = 'B3';
        let volrvm = 'B4';
        let tiempo = 'B5';
        let tempinicial = 'B6';
        let tempfinal = 'B7';
        let temprvm = 'B8';
        let pmaxima = 'B9';
        let pminima = 'B10';
        /* Get worksheet */
        let worksheet = documento.Sheets[hoja];
        /* Find desired cell */
        let desired_cell = worksheet[address_of_cell];
        /* Get the value */
        let desired_value = (desired_cell ? desired_cell.v : undefined);
        desired_cell.v = 150;
        xlsx_1.default.writeFile(documento, output);
    }
    static informe(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let { orden } = req.body;
            let q1 = yield CorridaController.getCorridad(orden, "Q1").then((data) => {
                return data;
            });
            let q2 = yield CorridaController.getCorridad(orden, "Q2").then((data) => {
                return data;
            });
            let q3 = yield CorridaController.getCorridad(orden, "Q3").then((data) => {
                return data;
            });
            for (let index = 0; index < q1.length; index++) {
                let element = q1[index];
                let id = q1[index]._id;
                let medidor = yield CorridaController.getMedidores(id).then((data) => {
                    return data;
                });
                let indice = index;
                var letra = "";
                if (indice == 0) {
                    letra = "K";
                }
                if (indice == 1) {
                    letra = "M";
                }
                if (indice == 2) {
                    letra = "O";
                }
                let lecturaInicial = yield CorridaController.primerq1(`${letra}23`, medidor[0].inicial);
                let lectturafinal = yield CorridaController.primerq1(`${letra}22`, medidor[0].final);
                let volrvm = yield CorridaController.primerq1(`${letra}24`, element.volumenrvm);
                let volrvm2 = yield CorridaController.cteq1("f18", element.volumenrvm);
                let tiempo = yield CorridaController.primerq1(`${letra}25`, element.time);
                let tempinicial = yield CorridaController.primerq1(`${letra}26`, element.temp);
                let tempfinal = yield CorridaController.primerq1(`${letra}27`, element.tempagua);
                let temprvm = yield CorridaController.primerq1(`${letra}28`, element.temprvm);
                let pmaxima = yield CorridaController.primerq1(`${letra}29`, element.pentrada);
                let pminima = yield CorridaController.primerq1(`${letra}30`, element.psalida);
            }
            for (let index = 0; index < q2.length; index++) {
                let element = q2[index];
                let id = q2[index]._id;
                let medidor = yield CorridaController.getMedidores(id).then((data) => {
                    return data;
                });
                let indice = index;
                var letra = "";
                if (indice == 0) {
                    letra = "K";
                }
                if (indice == 1) {
                    letra = "M";
                }
                if (indice == 2) {
                    letra = "O";
                }
                let lecturaInicial = yield CorridaController.primerq2(`${letra}23`, medidor[0].inicial);
                let lectturafinal = yield CorridaController.primerq2(`${letra}22`, medidor[0].final);
                let volrvm = yield CorridaController.primerq2(`${letra}24`, element.volumenrvm);
                let volrvm2 = yield CorridaController.cteq2("f18", element.volumenrvm);
                let tiempo = yield CorridaController.primerq2(`${letra}25`, element.time);
                let tempinicial = yield CorridaController.primerq2(`${letra}26`, element.temp);
                let tempfinal = yield CorridaController.primerq2(`${letra}27`, element.tempagua);
                let temprvm = yield CorridaController.primerq2(`${letra}28`, element.temprvm);
                let pmaxima = yield CorridaController.primerq2(`${letra}29`, element.pentrada);
                let pminima = yield CorridaController.primerq2(`${letra}30`, element.psalida);
            }
            for (let index = 0; index < q3.length; index++) {
                let element = q3[index];
                let id = q3[index]._id;
                let medidor = yield CorridaController.getMedidores(id).then((data) => {
                    return data;
                });
                let indice = index;
                var letra = "";
                if (indice == 0) {
                    letra = "K";
                }
                if (indice == 1) {
                    letra = "M";
                }
                if (indice == 2) {
                    letra = "O";
                }
                let lecturaInicial = yield CorridaController.primerq3(`${letra}23`, medidor[0].inicial);
                let lectturafinal = yield CorridaController.primerq3(`${letra}22`, medidor[0].final);
                let volrvm = yield CorridaController.primerq3(`${letra}24`, element.volumenrvm);
                let volrvm2 = yield CorridaController.cteq3("f48", element.volumenrvm);
                let tiempo = yield CorridaController.primerq3(`${letra}25`, element.time);
                let tempinicial = yield CorridaController.primerq3(`${letra}26`, element.temp);
                let tempfinal = yield CorridaController.primerq3(`${letra}27`, element.tempagua);
                let temprvm = yield CorridaController.primerq3(`${letra}28`, element.temprvm);
                let pmaxima = yield CorridaController.primerq3(`${letra}29`, element.pentrada);
                let pminima = yield CorridaController.primerq3(`${letra}30`, element.psalida);
            }
            let caudalQ1 = yield CorridaController.getResultados("Q1", "M129").then((data) => {
                return data;
            });
            let volumenProQ1 = yield CorridaController.getResultados("Q1", "E129").then((data) => {
                return data;
            });
            let volumenRealQ1 = yield CorridaController.getResultados("Q1", "H129").then((data) => {
                return data;
            });
            let errorQ1 = yield CorridaController.getResultados("Q1", "K133").then((data) => {
                return data;
            });
            let caudalQ2 = yield CorridaController.getResultados("Q2", "M129").then((data) => {
                return data;
            });
            let volumenProQ2 = yield CorridaController.getResultados("Q2", "E129").then((data) => {
                return data;
            });
            let volumenRealQ2 = yield CorridaController.getResultados("Q2", "H129").then((data) => {
                return data;
            });
            let errorQ2 = yield CorridaController.getResultados("Q2", "K133").then((data) => {
                return data;
            });
            let caudalQ3 = yield CorridaController.getResultados("Q3", "M129").then((data) => {
                return data;
            });
            let volumenProQ3 = yield CorridaController.getResultados("Q3", "E129").then((data) => {
                return data;
            });
            let volumenRealQ3 = yield CorridaController.getResultados("Q3", "H129").then((data) => {
                return data;
            });
            let errorQ3 = yield CorridaController.getResultados("Q3", "K133").then((data) => {
                return data;
            });
            let resultados = new resultados_1.default({
                caudalQ1,
                volumenProQ1,
                volumenRealQ1,
                errorQ1,
                caudalQ2,
                volumenProQ2,
                volumenRealQ2,
                errorQ2,
                caudalQ3,
                volumenProQ3,
                volumenRealQ3,
                errorQ3,
                orden
            });
            resultados.save((error, data) => {
                if (error) {
                    return res.status(501).json({
                        ok: false,
                        error
                    });
                }
                if (!data) {
                    return res.status(401).json({
                        ok: false,
                        message: "ERROR DESCONOCIDO"
                    });
                }
                if (data) {
                    return res.status(200).json({
                        ok: true
                    });
                }
            });
        });
    }
    static getCorridad(id, tipo) {
        return new Promise((resolve, reject) => {
            corrida_1.default.find({
                "orden": id,
                "tipo": tipo
            }, (err, data) => {
                if (err) {
                    console.log(err);
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
    static getMedidores(id) {
        return new Promise((resolve, reject) => {
            mefinales_1.default.find({
                "corrida": id
            }, (err, data) => {
                if (err) {
                    console.log(err);
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
    static primerq1(cell, value) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var pathFile = path_1.default.resolve(__dirname, `../../assets/Q1.xlsx`);
            var output = path_1.default.resolve(__dirname, `../../assets/Q1.xlsx`);
            let documento = xlsx_1.default.readFile(pathFile);
            let hoja = documento.SheetNames[0];
            /* Get worksheet */
            let worksheet = documento.Sheets[hoja];
            /* Find desired cell */
            let desired_cell = worksheet[cell];
            /* Get the value */
            let desired_value = (desired_cell ? desired_cell.v : undefined);
            desired_cell.v = value;
            let a = yield xlsx_1.default.writeFile(documento, output);
            resolve(true);
        }));
    }
    static cteq1(cell, value) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var pathFile = path_1.default.resolve(__dirname, `../../assets/Q1.xlsx`);
            var output = path_1.default.resolve(__dirname, `../../assets/Q1.xlsx`);
            let documento = xlsx_1.default.readFile(pathFile);
            let hoja = documento.SheetNames[1];
            /* Get worksheet */
            let worksheet = documento.Sheets[hoja];
            /* Find desired cell */
            let desired_cell = worksheet[cell];
            if (!desired_cell)
                desired_cell = {};
            desired_cell.t = "n";
            /* Get the value */
            let desired_value = (desired_cell ? desired_cell.v : undefined);
            desired_cell.v = value;
            let a = yield xlsx_1.default.writeFile(documento, output);
            resolve(true);
        }));
    }
    static primerq2(cell, value) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var pathFile = path_1.default.resolve(__dirname, `../../assets/Q2.xlsx`);
            var output = path_1.default.resolve(__dirname, `../../assets/Q2.xlsx`);
            let documento = xlsx_1.default.readFile(pathFile);
            let hoja = documento.SheetNames[0];
            /* Get worksheet */
            let worksheet = documento.Sheets[hoja];
            /* Find desired cell */
            let desired_cell = worksheet[cell];
            if (!desired_cell)
                desired_cell = {};
            desired_cell.t = "n";
            /* Get the value */
            let desired_value = (desired_cell ? desired_cell.v : undefined);
            desired_cell.v = value;
            let a = yield xlsx_1.default.writeFile(documento, output);
            resolve(true);
        }));
    }
    static cteq2(cell, value) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var pathFile = path_1.default.resolve(__dirname, `../../assets/Q2.xlsx`);
            var output = path_1.default.resolve(__dirname, `../../assets/Q2.xlsx`);
            let documento = xlsx_1.default.readFile(pathFile);
            let hoja = documento.SheetNames[1];
            /* Get worksheet */
            let worksheet = documento.Sheets[hoja];
            /* Find desired cell */
            let desired_cell = worksheet[cell];
            if (!desired_cell)
                desired_cell = {};
            desired_cell.t = "n";
            /* Get the value */
            let desired_value = (desired_cell ? desired_cell.v : undefined);
            desired_cell.v = value;
            let a = yield xlsx_1.default.writeFile(documento, output);
            resolve(true);
        }));
    }
    static primerq3(cell, value) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var pathFile = path_1.default.resolve(__dirname, `../../assets/Q3.xlsx`);
            var output = path_1.default.resolve(__dirname, `../../assets/Q3.xlsx`);
            let documento = xlsx_1.default.readFile(pathFile);
            let hoja = documento.SheetNames[0];
            /* Get worksheet */
            let worksheet = documento.Sheets[hoja];
            /* Find desired cell */
            let desired_cell = worksheet[cell];
            if (!desired_cell)
                desired_cell = {};
            desired_cell.t = "n";
            /* Get the value */
            let desired_value = (desired_cell ? desired_cell.v : undefined);
            desired_cell.v = value;
            let a = yield xlsx_1.default.writeFile(documento, output);
            resolve(true);
        }));
    }
    static cteq3(cell, value) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            console.log(cell);
            var pathFile = path_1.default.resolve(__dirname, `../../assets/Q3.xlsx`);
            var output = path_1.default.resolve(__dirname, `../../assets/Q3.xlsx`);
            let documento = xlsx_1.default.readFile(pathFile);
            let hoja = documento.SheetNames[1];
            /* Get worksheet */
            let worksheet = documento.Sheets[hoja];
            /* Find desired cell */
            let desired_cell = worksheet[cell];
            if (!desired_cell)
                desired_cell = {};
            desired_cell.t = "n";
            /* Get the value */
            let desired_value = (desired_cell ? desired_cell.v : undefined);
            desired_cell.v = value;
            let a = yield xlsx_1.default.writeFile(documento, output);
            resolve(true);
        }));
    }
    static getResultados(tipo, cell) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var pathFile = path_1.default.resolve(__dirname, `../../assets/${tipo}.xlsx`);
            var output = path_1.default.resolve(__dirname, `../../assets/${tipo}.xlsx`);
            let documento = xlsx_1.default.readFile(pathFile);
            let hoja = documento.SheetNames[0];
            /* Get worksheet */
            let worksheet = documento.Sheets[hoja];
            /* Find desired cell */
            let desired_cell = worksheet[cell];
            /* Get the value */
            let desired_value = (desired_cell ? desired_cell.v : undefined);
            resolve(desired_value);
        }));
    }
    static makeInforme(data, id) {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            var pathFile = path_1.default.resolve(__dirname, `../../assets/CERTIFICADO.xlsx`);
            var output = path_1.default.resolve(__dirname, `../../assets/${id}.xlsx`);
            let documento = xlsx_1.default.readFile(pathFile, { cellDates: true, cellStyles: true, cellFormula: true });
            let hoja = documento.SheetNames[0];
            console.log(hoja);
            /* Get worksheet */
            let worksheet = documento.Sheets[hoja];
            /* Find desired cell */
            let desired_cell = worksheet['cell'];
            if (!desired_cell)
                desired_cell = {};
            desired_cell.t = "n";
            /* Get the value */
            let desired_value = (desired_cell ? desired_cell.v : undefined);
            desired_cell.v = "value";
            let a = yield xlsx_1.default.writeFile(documento, output);
            resolve(true);
        }));
    }
}
exports.default = CorridaController;
