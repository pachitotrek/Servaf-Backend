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
exports.configurandoUser = exports.mensaje = exports.conectarCliente = exports.desconectar = exports.usuariosConectados = void 0;
const usuarios_lista_1 = require("../classes/usuarios-lista");
const usuario_1 = require("../classes/usuario");
const auth_1 = __importDefault(require("../controllers/auth"));
exports.usuariosConectados = new usuarios_lista_1.UsuariosLista();
exports.desconectar = (cliente) => {
    cliente.on('disconnect', () => {
        exports.usuariosConectados.borrarUsuario(cliente.id);
        console.log(' Cliente Desconectado');
    });
};
exports.conectarCliente = (cliente) => {
    const usuario = new usuario_1.Usuario(cliente.id);
    exports.usuariosConectados.agregar(usuario);
};
exports.mensaje = (cliente, io) => {
    cliente.on('mensaje', (payload) => {
        // console.log("Mensaje recibido",payload);  
        io.emit('mensaje-nuevo', payload);
    });
};
exports.configurandoUser = (cliente, io) => {
    cliente.on('configurar-usuario', (payload, callback) => __awaiter(void 0, void 0, void 0, function* () {
        let verify = yield auth_1.default.verificar(payload.token, cliente.id);
        if (verify) {
            let { nombre, apellido, email } = verify;
            exports.usuariosConectados.actualizarNombre(cliente.id, nombre, apellido, email, payload.token);
            callback({
                ok: true,
                mensaje: "Usuario Configurado"
            });
        }
        // console.log("Configurando Usuario",payload.nombre);  
    }));
};
// export const floculador = (cliente: Socket, io: SocketIO.Server) => {
//     cliente.on('flo', async (payload) => {
//         let datos = await FloculadorController.getDatos().then((data: any) => {
//             return data;
//         }).catch((error: any) => {
//             return false;
//         });
//         FloculadorController.SendDatos(cliente, io);
//         io.emit('flo-act', datos);
//     });
// }
// export const sedimentador = (cliente: Socket, io: SocketIO.Server) => {
//     cliente.on('sedi', async (payload) => {
//         let datos = await SedimentadorController.getDatos().then((data: any) => {
//             return data;
//         }).catch((error: any) => {
//             return false;
//         });
//         SedimentadorController.SendDatos(cliente, io);
//         io.emit('sedi-act', datos);
//     });
// }
// export const vertedero = (cliente: Socket, io: SocketIO.Server) => {
//     cliente.on('vert', async (payload) => {
//         let datos = await VertederoController.getDatos().then((data: any) => {
//             return data;
//         }).catch((error: any) => {
//             return false;
//         });
//         VertederoController.SendDatos(cliente, io);
//         io.emit('vert-datos', datos);
//     });
// }
// export const exteriores = (cliente: Socket, io: SocketIO.Server) => {
//     cliente.on('ext', async (payload) => {
//         let datos = await FiltroExtController.getDatos().then((data: any) => {
//             return data;
//         }).catch((error: any) => {
//             return false;
//         });
//         VertederoController.SendDatos(cliente, io);
//         io.emit('ext-act', datos);
//     });
// }
// export const interiores = (cliente: Socket, io: SocketIO.Server) => {
//     cliente.on('int', async (payload) => {
//         let uno = await FiltroIntController.getFiltro("1");
//         let dos = await FiltroIntController.getFiltro("2");
//         let tres = await FiltroIntController.getFiltro("3");
//         let cuatro = await FiltroIntController.getFiltro("4");
//         let cinco = await FiltroIntController.getFiltro("5");
//         let seis = await FiltroIntController.getFiltro("6");
//         let datos = {
//             uno,
//             dos,
//             tres,
//             cuatro,
//             cinco,
//             seis
//         }
//         FiltroIntController.SendDatos(cliente, io);
//         io.emit('int-act', datos);
//     });
// }
// export const tanques = (cliente: Socket, io: SocketIO.Server) => {
//     cliente.on('tanques', async (payload) => {
//         let uno = await TanquesController.getDatos("1");
//         let dos = await TanquesController.getDatos("2");
//         let tres = await TanquesController.getDatos("3");
//         let cuatro = await TanquesController.getDatos("4");
//         let cinco = await TanquesController.getDatos("5");
//         let actuador_uno= await PuntoController.getActuador("tanques","actuador","1");
//         let actuador_dos= await PuntoController.getActuador("tanques","actuador","2");
//         let actuador_tres= await PuntoController.getActuador("tanques","actuador","3");
//         let datos = {
//             uno,
//             dos,
//             tres,
//             cuatro,
//             cinco,
//             actuador_uno,
//             actuador_dos,
//             actuador_tres
//         }
//         TanquesController.SendDatos(cliente, io);
//         io.emit('tanques-datos', datos);
//     });
// }
// export const graphica = (cliente: Socket, io: SocketIO.Server) => {
//     cliente.on('graphic-vertedero', async (payload) => {
//         let query = payload;
//         let { id, value, numero } = payload.cuerpo; 
//         GraphicaController.sendDatos(id,value,numero,cliente.id);             
//     });
// }
// export const tanquesunit = (cliente: Socket, io: SocketIO.Server) => {
//     cliente.on('tanquesunit', async (payload) => {
//         let query = payload;
//         let { id, value} = payload.cuerpo; 
//         GraphicaController.sendTanque(id,value,cliente.id);             
//     });
// }
// export const interior = (cliente: Socket, io: SocketIO.Server) => {
//     cliente.on('interior', async (payload) => {
//         let query = payload;
//         let { id, value} = payload.cuerpo; 
//         GraphicaController.getInteriores(id,value,cliente.id);             
//     });
// }
// export const apoyo = (cliente: Socket, io: SocketIO.Server) => {
//     cliente.on('apoyo', async (payload) => {
//         let query = payload;
//         let { id} = payload.cuerpo; 
//         ApoyoController.getDatos(id,cliente.id);           
//     });
// }
