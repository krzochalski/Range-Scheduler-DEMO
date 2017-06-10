const connect = require('connect');
const serveStatic = require('serve-static');
const opn = require('opn');

connect().use(serveStatic(__dirname)).listen(8080, function(){
    console.log('Server running on 8080...');
});
opn('http://localhost:8080');
