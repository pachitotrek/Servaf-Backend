import fs from 'fs';
import _ from 'lodash';
var exec = require('child_process').exec;
import path from 'path';
import rimraf from 'rimraf';
import { FOLDER } from '../global/environment';



export default class BackupController {
    static stringToDate = (dateString: any) => {
        return new Date(dateString);
    };

    static empty = (mixedVar: any) => {
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

    static dbAutoBackUp = () => {
      

        // let backupDirPath = path.resolve(__dirname, `../../backups/`);
        let backupDirPath = path.join(__dirname, '../../backups/');

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
            let beforeDate: any, oldBackupDir: any, oldBackupPath: any;

            // Current date
            const currentDate = BackupController.stringToDate(date);
            let newBackupDir =
                currentDate.getFullYear() +
                '-' +
                (currentDate.getMonth() + 1) +
                '-' +
                currentDate.getDate();

            // New backup path for current backup process
            let newBackupPath = dbOptions.autoBackupPath + 'backup-' + newBackupDir;
            // check for remove old backup after keeping # of days given in configuration
            if (dbOptions.removeOldBackup == true) {
                beforeDate = _.clone(currentDate);
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
            let cmd =
              `cd ${FOLDER} && mongodump --db servaf --out ${newBackupPath}`;            

          exec(cmd, (error:any, stdout:any, stderr:any) => {                       
              // check for remove old backup after keeping # of days given in configuration.             
                if (fs.existsSync(oldBackupPath)) {
                    rimraf(oldBackupPath, function () { console.log("done"); });   
                    console.log("Backup Realizado")           
                }
              
          });
        }
    };

    static crearBackuo(){
    }

}



