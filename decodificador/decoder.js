const resJson = require('../answer.json')
const construirObjetoDec = require('./objetoDec')
const textoCifrado = resJson.cifrado.toLowerCase()

function decodificar(textoCifrado){
    return textoCifrado.replace(/\w/g ,function(c){
        return construirObjetoDec(resJson.numero_casas)[c]
    })
}

// console.log(decodificar(textoCifrado))
















