const connect = require('connect');
const serveStatic = require('serve-static');
const opn = require('opn');

const mainDirectory = __dirname.replace('/tasks', '');

connect().use(serveStatic(mainDirectory)).listen(8080, function(){
    console.log('Server running on 8080...');
});
opn('http://localhost:8080');
