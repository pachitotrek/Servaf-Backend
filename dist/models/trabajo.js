"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const trabajo = new mongoose_1.Schema({
    orden: Number,
    ordenante: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'usuario'
    },
    encargado: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'usuario'
    },
    tipo: String,
    banco: {
        type: mongoose_1.Schema.Types.ObjectId, ref: 'banco'
    },
    fecha_programacion: String,
    hora_programacion: String,
    fecha_inicio: String,
    hora_inicio: String,
    duracion: Number,
    pruebas: [{}
    ],
    medidores: [{
            type: mongoose_1.Schema.Types.ObjectId, ref: 'medidor'
        }],
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
    status: { type: String, default: "OPEN" },
    fecha: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false // You should be aware of the outcome after set to false
});
exports.default = mongoose_1.model('trabajo', trabajo);
