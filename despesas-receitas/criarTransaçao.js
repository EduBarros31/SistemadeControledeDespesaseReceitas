const { despesas } = require ("./despesas")

function criarTransaçao(numero,tipo,valor,data){
    try {
        const novaDespesa = {
            numero,
            tipo,
            valor,
            data
        }
      despesas.push(novaDespesa);
      

    } catch (error) {
        console.error("Erro ao cadastrar despesas ",error.message)

    }


}

module.exports = { criarTransaçao };