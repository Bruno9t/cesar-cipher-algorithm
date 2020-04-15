const alpha = require('../alpha')

function contruirObjetoCod(numero_casas){
    const decodObj = {}
    
    for(let i=0;i<alpha.length;i++){

        decodObj[alpha[i]] = alpha[

            i + numero_casas < alpha.length 
            ?
            i+numero_casas
            :
            numero_casas-(alpha.length-i)
            
        ]

    }
    return decodObj
}

module.exports = contruirObjetoCod;