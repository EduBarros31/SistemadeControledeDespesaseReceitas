const prompt = require ("prompt-sync")();

const { criarTransaçao } = require("./despesas-receitas/criarTransaçao");
const { lerTransaçao } = require("./despesas-receitas/lerTransaçao");
const { atualizarTransaçao } = require("./despesas-receitas/atualizarTransaçao");
const { deletarTransaçao } = require("./despesas-receitas/deletar.Transaçao");




criarTransaçao("12","água","50","10/10/2024")
criarTransaçao("21","luz","250","15/10/2024")
criarTransaçao("35","internet","100","20/10/2024")



lerTransaçao()
atualizarTransaçao("13","iptu","300","21/10/2024")
deletarTransaçao()


