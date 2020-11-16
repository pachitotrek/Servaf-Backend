"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
class Usuario {
    constructor(id) {
        this.id = id;
        this.nombre = 'Sin-nombre';
        this.email = "";
        this.apellido = "";
        this.sala = 'Sin-sala';
        this.token = "";
    }
}
exports.Usuario = Usuario;
