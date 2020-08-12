exports.success = function (req,res, message, status){
    res.status(status || 200).send({ //Hace que podamos ver el status de la peticion y poder diferencias
        error:'',
        body:message
    });
}

exports.error = function (req,res, message, status, details){
    console.error('[response_error]: '+ details);
    res.status(status || 500).send({ //Estatus del error el que venga o 500
        error:message,
        body:''
    });
}