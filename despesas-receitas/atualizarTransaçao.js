const { despesas } = require ("./despesas")


function atualizarTransaçao (numero,novoTipo,novoValor,novaData){
      try {
        const novaDespesa = despesas.findIndex(outradespesa =>
            outradespesa.numero === numero)
            if(novaDespesa){
                despesa.nome = novoTipo
                despesa.valor = novoValor
                despesa.data = novaData
                console.log("despesa atualizada com sucesso")

      }
      else console.log("despesa não encontrada")
 
} catch (error){
    console.error("Erro ao atualizar despesa", error.message)

}}


module.exports = { atualizarTransaçao }

