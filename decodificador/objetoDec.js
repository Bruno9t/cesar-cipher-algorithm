const alpha = require('../alpha')

function contruirObjetoDec(numero_casas){
    const decodObj = {}
    
    for(let i=0;i<alpha.length;i++){

        decodObj[alpha[i]] = alpha[

            i-numero_casas >= 0
            ?
            i-numero_casas
            :
            (alpha.length-numero_casas)+i

        ]

    }
    return decodObj
}

module.exports = contruirObjetoDec;