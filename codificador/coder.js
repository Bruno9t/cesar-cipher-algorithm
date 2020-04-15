const resJson = require('../answer.json')
const contruirObjetoCod = require('./objetoCod')
const textoDecifrado = resJson.decifrado.toLowerCase()

function codificar(textoDecifrado){
    return textoDecifrado.replace(/\w/g ,function(c){
        return contruirObjetoCod(resJson.numero_casas)[c]
    })
}

// console.log(codificar(textoDecifrado))