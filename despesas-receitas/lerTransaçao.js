const { despesas } = require ("./despesas")

function lerTransaçao(){
    try {
        despesas.forEach(despesa => {
         console.log(despesa)           
        
        
        });
    } catch (error) {
        console.error("erro ao listar despesa", error.message)
    }
}

module.exports = { lerTransaçao }