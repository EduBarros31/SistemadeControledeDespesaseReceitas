const { despesas } = require ("./despesas")

var validator = require('validator');


function criarTransaçao(numero,tipo,valor,data){
    
    const novaDespesa = {numero,tipo,valor,data}
    
    try {
        
    if   ( validator.isEmpty(numero)||
            validator.isEmpty(tipo)||
            validator.isEmpty(valor)||
            validator.isEmpty(data)
    )  
    { 
        
        
        console.error("Todos os campos deve serem preenchidos")
        return
        
    
      }
      despesas.push(novaDespesa)
      
      } 
   
   
        catch (error) {
        console.error("Erro ao cadastrar despesas ",error.message)

    }


}

module.exports = { criarTransaçao };