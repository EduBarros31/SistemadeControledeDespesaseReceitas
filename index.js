const prompt = require ("prompt-sync")();

const { criarTransaçao } = require("./despesas-receitas/criarTransaçao");
const { lerTransaçao } = require("./despesas-receitas/lerTransaçao");
const { atualizarTransaçao } = require("./despesas-receitas/atualizarTransaçao");
const { deletarTransaçao } = require("./despesas-receitas/deletar.Transaçao");




criarTransaçao("12","Agua","","10/10/2024")
criarTransaçao("21","Luz","123","15/10/2024")
criarTransaçao("35","internet","100","20/10/2024")



lerTransaçao()
// atualizarTransaçao("3","compra","5000","21/10/2024")
// deletarTransaçao()


