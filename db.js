const db = require('mongoose'); //Se realiza la conexion a la bbdd

db.Promise= global.Promise;

async function connect(url){
    await db.connect(url, {
    useNewUrlParser : true,
    useUnifiedTopology:true
    });

    console.log('[db] Conectada con exito')
}

module.exports = connect;

