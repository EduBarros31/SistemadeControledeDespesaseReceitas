const { despesas } = require ("./despesas")

function deletarTransaçao(numero,tipo,valor,data){

try {
    const indice = despesas.findIndex(outradespesa =>
        outradespesa.numero === numero
    )
if (indice === -1) {
    console.log("despesa não encontrada")
} else {
    despesas.splice(indice,1)
    console.log("despesa deletada com sucesso ")
}


} catch (error) {
   console.error("erro ao deletar despesa", error.message)
    
}

} 

module.exports = {deletarTransaçao }