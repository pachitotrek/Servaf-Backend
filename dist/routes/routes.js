"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const upload_1 = __importDefault(require("../controllers/upload"));
const readfile_1 = __importDefault(require("../controllers/readfile"));
const user_1 = __importDefault(require("../controllers/user"));
const clientes_1 = __importDefault(require("../controllers/clientes"));
const ordenes_1 = __importDefault(require("../controllers/ordenes"));
const o_instrumentos_1 = __importDefault(require("../controllers/o_instrumentos"));
const instrumentos_1 = __importDefault(require("../controllers/instrumentos"));
const normas_1 = __importDefault(require("../controllers/normas"));
const trabajo_1 = __importDefault(require("../controllers/trabajo"));
const corrida_1 = __importDefault(require("../controllers/corrida"));
const generate_1 = __importDefault(require("../controllers/generate"));
const ingresos_1 = __importDefault(require("../controllers/ingresos"));
const download_1 = __importDefault(require("../controllers/download"));
const calculos_1 = __importDefault(require("../controllers/calculos"));
const cmc_1 = __importDefault(require("../controllers/cmc"));
const medidor_1 = __importDefault(require("../controllers/medidor"));
const turorial_1 = __importDefault(require("../controllers/turorial"));
const router = express_1.Router();
router.use(express_fileupload_1.default({ useTempFiles: true }));
router.get('/mensajes', (req, res) => {
    res.json({
        ok: true,
        mensaje: "Todo Ok"
    });
});
router.get('/liceth/:id', calculos_1.default.prueba);
router.post('/upload/:tipo/:id', upload_1.default.uploadImage);
router.get('/img/:tipo/:img', readfile_1.default.getFile);
//DOWNLOAD
router.get('/download/:tipo/:id', download_1.default.download);
router.get('/xx/:id', download_1.default.download);
//USER
router.post('/register', user_1.default.crearUsuario);
router.post('/login', user_1.default.login);
router.get('/check/:id', user_1.default.check);
router.post('/editarUsuario', user_1.default.editarUsuario);
router.get('/usrs', user_1.default.getUsers);
router.get('/user/:id', user_1.default.getUser);
router.post('/changepass', user_1.default.changepass);
router.post('/deleteone', user_1.default.delete);
//CLIENTES
router.post('/crearcliente', clientes_1.default.crearCliente);
router.post('/editarcliente', clientes_1.default.editarCliente);
router.get('/getclientes', clientes_1.default.getClientes);
//ORDENES
router.get('/consecutivo', trabajo_1.default.GetConsecutivo);
router.post('/crearorden', ordenes_1.default.CrearOrdenEntrada);
router.get('/getorden/:id', ordenes_1.default.GetOrden);
router.get('/orden/:id', ordenes_1.default.GetOrdenOpenOne);
router.get('/getordenopen', ordenes_1.default.GetOrdenOpen);
router.post('/getordenes', ingresos_1.default.GetOrdenes);
//TRABAJOS
router.get('/consecutivotrabajo', trabajo_1.default.GetConsecutivo);
router.post('/crearordentrabajo', trabajo_1.default.crear);
router.post('/ordeninstrumentos', trabajo_1.default.crear);
router.get('/getordentrabajo/:id', trabajo_1.default.GetOrden);
router.post('/addinstrumentos', trabajo_1.default.addInsOrdenes);
router.post('/condiciones', trabajo_1.default.pushCondiciones);
router.get('/getmedidor/:id', trabajo_1.default.GetMedidor);
router.get('/getmedidor2/:id', trabajo_1.default.GetMedidor2);
router.get('/getmedidor3/:id', trabajo_1.default.GetMedidor3);
router.post('/setclose', trabajo_1.default.CerrarOrden);
router.post('/asociarmedidores', trabajo_1.default.addMedidores);
// router.post('/crearordentrabajo',TrabajoController.crear);
router.get('/getordenopentrabajo', trabajo_1.default.GetOrdenesOpen);
router.post('/getordenclosetrabajo', trabajo_1.default.GetOrdenesClose);
router.get('/getordenclose/:id', trabajo_1.default.GetOrdenClose);
router.post('/crearother', normas_1.default.crearother);
router.get('/getallothers', normas_1.default.getAllOthers);
router.get('/getmedidorescalibracion/:id', trabajo_1.default.getmedidorestrabajo);
router.post('/iniciales', trabajo_1.default.iniciales);
router.post('/finales', trabajo_1.default.final);
router.post('/savetime', trabajo_1.default.savetime);
router.get('/getcorridas/:id', trabajo_1.default.getstate);
router.get('/getpruebas/:id', trabajo_1.default.getpruebas);
router.post('/updatepruebas', trabajo_1.default.updatePruebas);
router.post('/closeordentrabajo', trabajo_1.default.closeordentrabajo);
router.post('/generarinforme', corrida_1.default.informe);
router.get('/getresultados/:id', trabajo_1.default.getResultados);
router.get('/updatetest/:id/:orden', trabajo_1.default.updatetest);
router.post('/calibrados', medidor_1.default.getCalibrados);
//editar
router.post('/editarambientales', medidor_1.default.editarAmbientales);
router.post('/editarpropiedades', medidor_1.default.editarPrueba);
//Generar
router.get('/generarInforme', generate_1.default.generarInforme);
router.get('/getinstrumentosorden/:id', generate_1.default.getAll);
//OpcionesInstrumentos
router.get('/opcionesinstrumentos', o_instrumentos_1.default.getAll);
router.get('/deletehistoricocalibracion/:id', instrumentos_1.default.DeletehistoricoCalibracion);
//Instrumentos
router.post('/crearinstrumento', instrumentos_1.default.crear);
router.post('/updateinstrumento', instrumentos_1.default.update);
router.get('/getinstrumentos', instrumentos_1.default.getAll);
router.post('/saveinstrumentostrabajo', trabajo_1.default.addInstrumentos);
router.get('/getinstrumento/:id', instrumentos_1.default.getOne);
router.get('/getvolumen', instrumentos_1.default.getCaudal);
router.post('/updatecmc', cmc_1.default.update);
router.post('/crearcmc', cmc_1.default.crear);
router.get('/getcmc', cmc_1.default.getCMC);
router.post('/setcalibracion', instrumentos_1.default.setCalibracion);
router.get('/getcalibraciones/:id', instrumentos_1.default.getOneCalibracion);
//Default
router.post('/updatedefaultinstrumentos', instrumentos_1.default.default);
router.get('/getdefaultinstrumentos', instrumentos_1.default.getDefaultInstrumentos);
router.post('/updatedefaultparametros', instrumentos_1.default.defaultParametros);
router.get('/getdefaultparametros', instrumentos_1.default.getDefaultParametros);
//BancoEnsayos
router.post('/crearbanco', instrumentos_1.default.crearBanco);
router.post('/updatebanco', instrumentos_1.default.updateBanco);
router.get('/getbancos', instrumentos_1.default.getBancos);
//normas
router.get('/getnormas', normas_1.default.getAll);
//medidor
router.post('/crearmedidor', ingresos_1.default.nuevo);
router.get('/getmedidoresopen', ingresos_1.default.GetMedidoresOpen);
router.get('/getmedidoresave', ingresos_1.default.GetMedidoresSave);
router.post('/updateingreso', ingresos_1.default.updateOrden);
router.get('/deletemedidor/:id', ingresos_1.default.DeleteMedidor);
router.post('/setmedidor', trabajo_1.default.SetMedidor);
router.post('/seteditmedidor', trabajo_1.default.SetEditMedidor);
//modelos
router.get('/getmodelo', ordenes_1.default.GetModelos);
router.post('/crearmodelo', ordenes_1.default.crearModelo);
//marcas
router.get('/getmarcas', ordenes_1.default.GetMarcas);
router.post('/crearmarca', ordenes_1.default.crearMarca);
//incidencias
router.get('/getincidencias', ordenes_1.default.GetIncidencias);
router.post('/crearincidencia', ordenes_1.default.crearIncidencia);
router.get('/getordencertificado/:id', ordenes_1.default.GetOrden);
router.get('/gettrabajocertificado/:id', ordenes_1.default.GetOrdenTrabajo);
router.get('/getmedidores3/:id', download_1.default.getmedidores);
router.get('/getmedidores4/:id', download_1.default.getmedidoresTrabajo);
router.post('/getcertificadotrabajo', ingresos_1.default.GetOrdenesTrabajo);
router.post('/deletecalibracion', trabajo_1.default.deleteResultMedidor);
//VALORES NOMINALES 
router.post('/addnormauno', medidor_1.default.addnominal);
router.post('/nominaluno', medidor_1.default.pushvalor);
router.post('/addnormados', medidor_1.default.addnominaldos);
router.post('/nominaldos', medidor_1.default.pushvalordos);
router.get('/getnominaluno/:clase/:diametro', medidor_1.default.getNominaluno);
router.get('/getnominaldos/:clase/:diametro', medidor_1.default.getNominaldos);
//updatemedidor
router.post('/updatemedidor', ingresos_1.default.updateMedidor);
router.post('/updatemedidor2', ingresos_1.default.updateMedidor2);
router.post('/derogar', ingresos_1.default.derogarCertificado);
//Tutoriales
router.post('/createtutorial', turorial_1.default.crearTutorial);
router.get('/gettutorials', turorial_1.default.getTutoriales);
router.get('/xxx', generate_1.default.generarInforme);
exports.default = router;
