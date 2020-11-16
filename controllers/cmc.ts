import { Request, Response, response } from "express";
import modelcmc from '../models/cmc';
import modelmedidor from '../models/medidores';
import xlsx from 'xlsx';
import path from 'path';


export default class CmcController {

    static async update(req: Request, res: Response) {
        let {
            _id,
            instrumento,
            error
        } = req.body;

        console.log(error);

        modelcmc.updateOne({ "_id": _id }, {
            $set: {
                error: error
            }
        }).exec((err: any, datadb: any) => {
            if (err) {
                console.log(err)
            }

            if (!datadb) {
                return res.status(401).json({
                    ok: false,
                    message: "Error "
                })
            }

            if (datadb) {
                return res.status(200).json({
                    ok: true
                });
            }
        });







    }
    
    static async crear(req: Request, res: Response) {
        let {            
            instrumento,
            error
        } = req.body;      

        let a= new modelcmc({
            instrumento:instrumento,
            error:error
        })

        a.save((err: any, datadb: any) => {
            if (err) {
                console.log(err)
            }

            if (!datadb) {
                return res.status(401).json({
                    ok: false,
                    message: "Error "
                })
            }

            if (datadb) {
                return res.status(200).json({
                    ok: true
                });
            }
        });







    }

    static getCMC(req: Request, res: Response) {
        modelcmc.find({}).populate('instrumento').exec((error: any, data: any) => {
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

    static updateparametros(uno: any, dos: any, tres: any, cuatro: any) {

        return new Promise(async (resolve, reject) => {

            var pathFileq1 = path.resolve(__dirname, `../../assets/Q1.xlsx`);
            var outputq1 = path.resolve(__dirname, `../../assets/Q1.xlsx`);
            var pathFileq2 = path.resolve(__dirname, `../../assets/Q2.xlsx`);
            var outputq2 = path.resolve(__dirname, `../../assets/Q2.xlsx`);
            var pathFileq3 = path.resolve(__dirname, `../../assets/Q3.xlsx`);
            var outputq3 = path.resolve(__dirname, `../../assets/Q3.xlsx`);

            let documentoQ1 = xlsx.readFile(pathFileq1);
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
            let a = await xlsx.writeFile(documentoQ1, outputq1);

            let documentoQ2 = xlsx.readFile(pathFileq2);
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

            let b = await xlsx.writeFile(documentoQ2, outputq2);

            let documentoQ3 = xlsx.readFile(pathFileq3);
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
            let c = await xlsx.writeFile(documentoQ3, outputq3);


            resolve(true);


        });
    }

    static async getincomformidad(req: Request, res: Response) {

        let id = req.params.id;

        let medidor = await CmcController.getmedidor(id).then((data: any) => {
            return data;
        }).catch((error: any) => {
            return error
        })

        let nombre = "C8";
        let direccion = "C10";
        let nit = "C12";
        let no = "G8";
        let fecha_recepcion = "G10";


    }


    static getmedidor(id: any) {
        return new Promise((resolve, reject) => {
            modelmedidor.find({ id }).exec((error: any, data: any) => {
                if (error) {
                    reject(false)
                }
                if (!data) {
                    reject(false)
                }
                if (data) {
                    resolve(data)
                }
            })
        });
    }


}
