const CronJob = require('cron').CronJob;
import dbauto from '../controllers/backup';

new CronJob(
    '0 0 *  * 0',
    function() {
        dbauto.dbAutoBackUp();
    },
    null,
    true,
    'America/New_York'
  );