"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const medidor = new mongoose_1.Schema({
    certificado: {
        type: Number
    },
    orden: {
        type: Number
    },
    consecutivo: String,
    year: String,
    numero: {
        type: Number
    },
    cliente: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'cliente'
    },
    banco: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'banco'
    },
    orden_entrada: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'entrada'
    },
    orden_trabajo: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'trabajo'
    },
    type: String,
    datos: {
        fabricacion: String,
        marca: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'marca'
        },
        modelo: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'modelo'
        },
        serie: String,
        lectura: String
    },
    metrologicas: {
        q1: Number,
        q2: Number,
        q3: Number,
        q4: Number,
        pperdida: String,
        rango: String,
        aguasabajo: String,
        escala: Number,
        aguasarriba: String,
        norma: String,
        tipo: String,
        precision: String,
        principio: String,
        clasetemp: String,
        posicion: String,
        diametro: Number,
        pmaxp: Number,
        identificador: Number,
        clase: String,
        pnominal: Number,
        relacion: Number
    },
    parametros: {
        repeticiones: Number,
        coef_rvm: Number,
        coef_agua: Number,
        compre_agua: Number,
        incertidumbre_rvm: Number,
        incertidumbre_agua: Number,
        incertidumbre_compre_agua: Number
    },
    incidencias: [],
    ambientales: [
        {
            temp_ambiente: Number,
            humedad: Number,
            prueba: String
        }
    ],
    instrumentos: [{
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        }],
    instrumentos_q1: {
        humedad: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        presion_entrada: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        presion_salida: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        rvm: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        t_entrada_agua: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        temp_ambiente: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        tiempo: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        caudal: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        temprvm: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        }
    },
    instrumentos_q2: {
        humedad: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        presion_entrada: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        presion_salida: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        rvm: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        t_entrada_agua: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        temp_ambiente: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        tiempo: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        caudal: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        temprvm: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        }
    },
    instrumentos_q3: {
        humedad: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        presion_entrada: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        presion_salida: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        rvm: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        t_entrada_agua: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        temp_ambiente: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        tiempo: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        caudal: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        temprvm: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        }
    },
    instrumentos_q4: {
        humedad: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        presion_entrada: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        presion_salida: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        rvm: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        t_entrada_agua: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        temp_ambiente: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        tiempo: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        caudal: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        },
        temprvm: {
            type: mongoose_1.Schema.Types.ObjectId, ref: 'instrumento'
        }
    },
    q1: [{
            inicial: Number,
            final: Number,
            repeticion: Number,
            caudal: Number,
            pentrada: Number,
            psalida: Number,
            tempagua: Number,
            temprvm: Number,
            volumenrvm: Number,
            time: Number
        }],
    q2: [{
            inicial: Number,
            final: Number,
            repeticion: Number,
            caudal: Number,
            pentrada: Number,
            psalida: Number,
            tempagua: Number,
            temprvm: Number,
            volumenrvm: Number,
            time: Number
        }],
    q3: [{
            inicial: Number,
            final: Number,
            repeticion: Number,
            caudal: Number,
            pentrada: Number,
            psalida: Number,
            tempagua: Number,
            temprvm: Number,
            volumenrvm: Number,
            time: Number
        }],
    q4: [{
            inicial: Number,
            final: Number,
            repeticion: Number,
            caudal: Number,
            pentrada: Number,
            psalida: Number,
            tempagua: Number,
            temprvm: Number,
            volumenrvm: Number,
            time: Number
        }],
    imagenes: [{
            imagen: String
        }],
    q1_resultados: {
        prueba: String,
        nominal: String,
        vx: String,
        Dvx: String,
        Error_promedio: String,
        Ue: String
    },
    q2_resultados: {
        prueba: String,
        nominal: String,
        vx: String,
        Dvx: String,
        Error_promedio: String,
        Ue: String
    },
    q3_resultados: {
        prueba: String,
        nominal: String,
        vx: String,
        Dvx: String,
        Error_promedio: String,
        Ue: String
    },
    q4_resultados: {
        prueba: String,
        nominal: String,
        vx: String,
        Dvx: String,
        Error_promedio: String,
        Ue: String
    },
    status: { type: String, default: "OPEN" },
    estado: { type: String },
    ingreso: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'usuario'
    },
    calibro: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'usuario'
    },
    fecha_creacion: {
        type: Date,
        default: Date.now
    },
    observaciones: String,
    derogado: {
        type: String,
        default: "false"
    },
    oldcertificado: String,
}, {
    versionKey: false // You should be aware of the outcome after set to false
});
exports.default = mongoose_1.model('medidor', medidor);
