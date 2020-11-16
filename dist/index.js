"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const routes_1 = __importDefault(require("./routes/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const environment_1 = require("./global/environment");
const backup_1 = __importDefault(require("./controllers/backup"));
const server = server_1.default.Instance;
mongoose_1.default.Promise = global.Promise;
//BodyParser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
server.app.use(express_1.default.static(__dirname + '/public'));
//cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
server.app.use('/api', routes_1.default);
mongoose_1.default.connect(environment_1.DBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
    server.start(() => {
        console.log("Servidor inicializado");
        setInterval(() => {
            backup_1.default.dbAutoBackUp();
        }, 86500000);
    });
})
    .catch(err => console.log(err));
