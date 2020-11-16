"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CronJob = require('cron').CronJob;
const backup_1 = __importDefault(require("../controllers/backup"));
new CronJob('0 0 *  * 0', function () {
    backup_1.default.dbAutoBackUp();
}, null, true, 'America/New_York');
