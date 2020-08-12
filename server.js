const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket');
const db = require('./db');
const router = require ('./network/routes');

//Hay que espicicar la ruta de DB
db('');
                                        

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

socket.connect(server);

router(app);

app.use('/app',express.static('public'));

server.listen(3000,function(){
    console.log('La aplicacion esta escuchando en http://localhost:3000');
});
