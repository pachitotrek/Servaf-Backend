import { Request, Response } from "express";
import path from 'path';
import xlsx from 'xlsx';
import corrida from '../models/corrida';
import finales from '../models/mefinales';
import modelResultados from '../models/resultados';
import moment from 'moment';


export default class CorridaController {

    static exportinforme(req: Request, res: Response) {



        var pathFile = path.resolve(__dirname, `../../assets/q1.xlsx`);
        var output = path.resolve(__dirname, `../../assets/q1output.xlsx`);

        let documento = xlsx.readFile(pathFile);
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

        xlsx.writeFile(documento, output);
    }
    static async informe(req: Request, res: Response) {
        let {orden} = req.body;       
        
        let q1 = await CorridaController.getCorridad(orden, "Q1").then((data: any) => {
            return data;
        });
        let q2 = await CorridaController.getCorridad(orden, "Q2").then((data: any) => {
            return data;
        });
        let q3 = await CorridaController.getCorridad(orden, "Q3").then((data: any) => {
            return data;
        });

        for (let index = 0; index < q1.length; index++) {
            let element = q1[index];
            let id = q1[index]._id;
            let medidor = await CorridaController.getMedidores(id).then((data: any) => {
                return data
            });
            let indice = index;
            var letra = "";
            if (indice == 0) {
                letra = "K";
            }
            if (indice == 1) {
                letra = "M"
            }
            if (indice == 2) {
                letra = "O"
            }
            let lecturaInicial = await CorridaController.primerq1(`${letra}23`, medidor[0].inicial);
            let lectturafinal = await CorridaController.primerq1(`${letra}22`, medidor[0].final);
            let volrvm = await CorridaController.primerq1(`${letra}24`, element.volumenrvm);
            let volrvm2 = await CorridaController.cteq1("f18", element.volumenrvm);
            let tiempo = await CorridaController.primerq1(`${letra}25`, element.time);
            let tempinicial = await CorridaController.primerq1(`${letra}26`, element.temp);
            let tempfinal = await CorridaController.primerq1(`${letra}27`, element.tempagua);
            let temprvm = await CorridaController.primerq1(`${letra}28`, element.temprvm);
            let pmaxima = await CorridaController.primerq1(`${letra}29`, element.pentrada);
            let pminima = await CorridaController.primerq1(`${letra}30`, element.psalida);
        }
        for (let index = 0; index < q2.length; index++) {
            let element = q2[index];
            let id = q2[index]._id;
            let medidor = await CorridaController.getMedidores(id).then((data: any) => {
                return data
            });
            let indice = index;
            var letra = "";
            if (indice == 0) {
                letra = "K";
            }
            if (indice == 1) {
                letra = "M"
            }
            if (indice == 2) {
                letra = "O"
            }
            let lecturaInicial = await CorridaController.primerq2(`${letra}23`, medidor[0].inicial);
            let lectturafinal = await CorridaController.primerq2(`${letra}22`, medidor[0].final);
            let volrvm = await CorridaController.primerq2(`${letra}24`, element.volumenrvm);
            let volrvm2 = await CorridaController.cteq2("f18", element.volumenrvm);
            let tiempo = await CorridaController.primerq2(`${letra}25`, element.time);
            let tempinicial = await CorridaController.primerq2(`${letra}26`, element.temp);
            let tempfinal = await CorridaController.primerq2(`${letra}27`, element.tempagua);
            let temprvm = await CorridaController.primerq2(`${letra}28`, element.temprvm);
            let pmaxima = await CorridaController.primerq2(`${letra}29`, element.pentrada);
            let pminima = await CorridaController.primerq2(`${letra}30`, element.psalida);

        }
        for (let index = 0; index < q3.length; index++) {
            let element = q3[index];
            let id = q3[index]._id;
            let medidor = await CorridaController.getMedidores(id).then((data: any) => {
                return data
            });
            let indice = index;
            var letra = "";
            if (indice == 0) {
                letra = "K";
            }
            if (indice == 1) {
                letra = "M"
            }
            if (indice == 2) {
                letra = "O"
            }
            let lecturaInicial = await CorridaController.primerq3(`${letra}23`, medidor[0].inicial);
            let lectturafinal = await CorridaController.primerq3(`${letra}22`, medidor[0].final);
            let volrvm = await CorridaController.primerq3(`${letra}24`, element.volumenrvm);
            let volrvm2 = await CorridaController.cteq3("f48", element.volumenrvm);
            let tiempo = await CorridaController.primerq3(`${letra}25`, element.time);
            let tempinicial = await CorridaController.primerq3(`${letra}26`, element.temp);
            let tempfinal = await CorridaController.primerq3(`${letra}27`, element.tempagua);
            let temprvm = await CorridaController.primerq3(`${letra}28`, element.temprvm);
            let pmaxima = await CorridaController.primerq3(`${letra}29`, element.pentrada);
            let pminima = await CorridaController.primerq3(`${letra}30`, element.psalida);

        }

        let caudalQ1 = await CorridaController.getResultados("Q1", "M129").then((data: any) => {
            return data;
        });    

        let volumenProQ1 = await CorridaController.getResultados("Q1", "E129").then((data: any) => {
            return data;
        });
        let volumenRealQ1 = await CorridaController.getResultados("Q1", "H129").then((data: any) => {
            return data;
        });
        let errorQ1 = await CorridaController.getResultados("Q1", "K133").then((data: any) => {
            return data;
        });

        let caudalQ2 = await CorridaController.getResultados("Q2", "M129").then((data: any) => {
            return data;
        });
        let volumenProQ2 = await CorridaController.getResultados("Q2", "E129").then((data: any) => {
            return data;
        });
        let volumenRealQ2 = await CorridaController.getResultados("Q2", "H129").then((data: any) => {
            return data;
        });
        let errorQ2 = await CorridaController.getResultados("Q2", "K133").then((data: any) => {
            return data;
        });

        let caudalQ3 = await CorridaController.getResultados("Q3", "M129").then((data: any) => {
            return data;
        });
        let volumenProQ3 = await CorridaController.getResultados("Q3", "E129").then((data: any) => {
            return data;
        });
        let volumenRealQ3 = await CorridaController.getResultados("Q3", "H129").then((data: any) => {
            return data;
        });
        let errorQ3 = await CorridaController.getResultados("Q3", "K133").then((data: any) => {
            return data;
        });

        let resultados = new modelResultados({
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

        resultados.save((error:any,data:any)=>{
            if(error){
                return res.status(501).json({
                    ok:false,
                    error
                });
            }
            if(!data){
                return res.status(401).json({
                    ok:false,
                    message:"ERROR DESCONOCIDO"
                });
            }

            if(data){
                return res.status(200).json({
                    ok:true
                })             
            }
        });
    }
    static getCorridad(id: any, tipo: any) {
        return new Promise((resolve: any, reject: any) => {
            corrida.find({
                "orden": id,
                "tipo": tipo
            }, (err: any, data: any) => {
                if (err) {
                    console.log(err)
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
    static getMedidores(id: any) {
        return new Promise((resolve: any, reject: any) => {
            finales.find({
                "corrida": id
            }, (err: any, data: any) => {
                if (err) {
                    console.log(err)
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
    static primerq1(cell: any, value: any) {
        return new Promise(async (resolve: any, reject: any) => {
            var pathFile = path.resolve(__dirname, `../../assets/Q1.xlsx`);
            var output = path.resolve(__dirname, `../../assets/Q1.xlsx`);
            let documento = xlsx.readFile(pathFile);
            let hoja = documento.SheetNames[0];
            /* Get worksheet */
            let worksheet = documento.Sheets[hoja];
            /* Find desired cell */
            let desired_cell = worksheet[cell];
            /* Get the value */
            let desired_value = (desired_cell ? desired_cell.v : undefined);

            desired_cell.v = value;

            let a = await xlsx.writeFile(documento, output);

            resolve(true);

        });
    }
    static cteq1(cell: any, value: any) {
        return new Promise(async (resolve: any, reject: any) => {
            var pathFile = path.resolve(__dirname, `../../assets/Q1.xlsx`);
            var output = path.resolve(__dirname, `../../assets/Q1.xlsx`);
            let documento = xlsx.readFile(pathFile);
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

            let a = await xlsx.writeFile(documento, output);

            resolve(true);

        });
    }
    static primerq2(cell: any, value: any) {
        return new Promise(async (resolve: any, reject: any) => {
            var pathFile = path.resolve(__dirname, `../../assets/Q2.xlsx`);
            var output = path.resolve(__dirname, `../../assets/Q2.xlsx`);
            let documento = xlsx.readFile(pathFile);
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

            let a = await xlsx.writeFile(documento, output);

            resolve(true);

        });
    }
    static cteq2(cell: any, value: any) {
        return new Promise(async (resolve: any, reject: any) => {
            var pathFile = path.resolve(__dirname, `../../assets/Q2.xlsx`);
            var output = path.resolve(__dirname, `../../assets/Q2.xlsx`);
            let documento = xlsx.readFile(pathFile);
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

            let a = await xlsx.writeFile(documento, output);

            resolve(true);


        });
    }
    static primerq3(cell: any, value: any) {
        return new Promise(async (resolve: any, reject: any) => {
            var pathFile = path.resolve(__dirname, `../../assets/Q3.xlsx`);
            var output = path.resolve(__dirname, `../../assets/Q3.xlsx`);
            let documento = xlsx.readFile(pathFile);
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

            let a = await xlsx.writeFile(documento, output);

            resolve(true);

        });
    }
    static cteq3(cell: any, value: any) {
        return new Promise(async (resolve: any, reject: any) => {
            console.log(cell);
            var pathFile = path.resolve(__dirname, `../../assets/Q3.xlsx`);
            var output = path.resolve(__dirname, `../../assets/Q3.xlsx`);
            let documento = xlsx.readFile(pathFile);
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

            let a = await xlsx.writeFile(documento, output);

            resolve(true);


        });
    }
    static getResultados(tipo: any, cell: any) {
        return new Promise(async (resolve: any, reject: any) => {
            var pathFile = path.resolve(__dirname, `../../assets/${tipo}.xlsx`);
            var output = path.resolve(__dirname, `../../assets/${tipo}.xlsx`);
            let documento = xlsx.readFile(pathFile);
            let hoja = documento.SheetNames[0];
            /* Get worksheet */
            let worksheet = documento.Sheets[hoja];

            /* Find desired cell */
            let desired_cell = worksheet[cell];

            /* Get the value */
            let desired_value = (desired_cell ? desired_cell.v : undefined);

            resolve(desired_value);

        });
    }
    static makeInforme(data: any, id: any) {
        return new Promise(async (resolve: any, reject: any) => {
            var pathFile = path.resolve(__dirname, `../../assets/CERTIFICADO.xlsx`);
            var output = path.resolve(__dirname, `../../assets/${id}.xlsx`);
            let documento = xlsx.readFile(pathFile,{cellDates:true,cellStyles:true,cellFormula:true});
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

            let a = await xlsx.writeFile(documento, output);

            resolve(true);

        });
    }














}