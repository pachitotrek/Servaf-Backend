"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosLista = void 0;
class UsuariosLista {
    constructor() {
        this.lista = [];
    }
    //agregar un usuario
    agregar(usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }
    actualizarNombre(id, nombre, apellido, email, token) {
        for (let usuario of this.lista) {
            if (usuario.id === id) {
                usuario.email = email;
                usuario.apellido = apellido;
                usuario.nombre = nombre;
                usuario.token = token;
                break;
            }
        }
        console.log('===== Actualizando Usuario =====');
        console.log(this.lista);
    }
    getLista() {
        return this.lista;
    }
    getUsuario(id) {
        return this.lista.find(usuario => usuario.id === id);
    }
    getUsuariosEnSala(sala) {
        return this.lista.filter(usuario => usuario.sala === sala);
    }
    borrarUsuario(id) {
        const tempUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => {
            return usuario.id !== id;
        });
        return tempUsuario;
    }
}
exports.UsuariosLista = UsuariosLista;
