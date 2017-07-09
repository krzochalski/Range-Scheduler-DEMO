require('shelljs/global');
const appConfig = require('./stack-config');

const cleaningComand = 'rm -rf ./.awspublish-hosting.backand.io';

const deployCommand = `./node_modules/.bin/backand sync --app ${appConfig.appName} --master ${appConfig.masterKey} --user ${appConfig.userKey} --folder ${appConfig.projectFolder}`;

console.log(deployCommand);

exec(cleaningComand);
exec(deployCommand);
