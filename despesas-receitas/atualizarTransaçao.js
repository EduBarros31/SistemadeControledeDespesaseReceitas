const { despesas } = require ("./despesas")


function atualizarTransaçao (numero,novoTipo,novoValor,novaData){
      try {

        if ( validator.isEmpty(numero)||
        validator.isEmpty(novoTipo)||
        validator.isEmpty(novoValor)||
        validator.isEmpty(novaData))
        
        
        {
            console.error("Todos os campos deve serem preenchidos")
            return
        }




        const novaDespesa = despesas.findIndex(outradespesa =>
            outradespesa.numero === numero)
            if(novaDespesa){
                despesas.nome = novoTipo
                despesas.valor = novoValor
                despesas.data = novaData
                console.log("despesa atualizada com sucesso")

      }
      else console.log("despesa não encontrada")
 
      despesas.push(novaDespesa)



} catch (error){
    console.error("Erro ao atualizar despesa", error.message)

}}
 

  


module.exports = { atualizarTransaçao }

