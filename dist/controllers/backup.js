"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const lodash_1 = __importDefault(require("lodash"));
var exec = require('child_process').exec;
const path_1 = __importDefault(require("path"));
const rimraf_1 = __importDefault(require("rimraf"));
const environment_1 = require("../global/environment");
class BackupController {
    static crearBackuo() {
    }
}
exports.default = BackupController;
BackupController.stringToDate = (dateString) => {
    return new Date(dateString);
};
BackupController.empty = (mixedVar) => {
    let undef, key, i, len;
    const emptyValues = [undef, null, false, 0, '', '0'];
    for (i = 0, len = emptyValues.length; i < len; i++) {
        if (mixedVar === emptyValues[i]) {
            return true;
        }
    }
    if (typeof mixedVar === 'object') {
        for (key in mixedVar) {
            return false;
        }
        return true;
    }
    return false;
};
BackupController.dbAutoBackUp = () => {
    // let backupDirPath = path.resolve(__dirname, `../../backups/`);
    let backupDirPath = path_1.default.join(__dirname, '../../backups/');
    let dbOptions = {
        user: '',
        pass: '',
        host: 'localhost',
        port: 27017,
        database: 'servaf',
        autoBackup: true,
        removeOldBackup: true,
        keepLastDaysBackup: 15,
        autoBackupPath: backupDirPath
    };
    // check for auto backup is enabled or disabled
    if (dbOptions.autoBackup == true) {
        let date = new Date();
        let beforeDate, oldBackupDir, oldBackupPath;
        // Current date
        const currentDate = BackupController.stringToDate(date);
        let newBackupDir = currentDate.getFullYear() +
            '-' +
            (currentDate.getMonth() + 1) +
            '-' +
            currentDate.getDate();
        // New backup path for current backup process
        let newBackupPath = dbOptions.autoBackupPath + 'backup-' + newBackupDir;
        // check for remove old backup after keeping # of days given in configuration
        if (dbOptions.removeOldBackup == true) {
            beforeDate = lodash_1.default.clone(currentDate);
            // Substract number of days to keep backup and remove old backup
            beforeDate.setDate(beforeDate.getDate() - dbOptions.keepLastDaysBackup);
            oldBackupDir =
                beforeDate.getFullYear() +
                    '-' +
                    (beforeDate.getMonth() + 1) +
                    '-' +
                    beforeDate.getDate();
            // old backup(after keeping # of days)
            oldBackupPath = dbOptions.autoBackupPath + 'backup-' + oldBackupDir;
        }
        // Command for mongodb dump process
        let cmd = `cd ${environment_1.FOLDER} && mongodump --db servaf --out ${newBackupPath}`;
        exec(cmd, (error, stdout, stderr) => {
            // check for remove old backup after keeping # of days given in configuration.             
            if (fs_1.default.existsSync(oldBackupPath)) {
                rimraf_1.default(oldBackupPath, function () { console.log("done"); });
                console.log("Backup Realizado");
            }
        });
    }
};
