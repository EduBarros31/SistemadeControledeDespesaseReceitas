const prompt = require ("prompt-sync")();

const { criarTransaçao } = require("./despesas-receitas/criarTransaçao");
const { lerTransaçao } = require("./despesas-receitas/lerTransaçao");
const { atualizarTransaçao } = require("./despesas-receitas/atualizarTransaçao");
const { deletarTransaçao } = require("./despesas-receitas/deletar.Transaçao");




criarTransaçao("12","despesa","água",50,"10/10/2024")
criarTransaçao("21","despesa","luz","250,15/10/2024")
criarTransaçao("35","despesa","internet","100,20/10/2024")



lerTransaçao()
atualizarTransaçao(13,"despesa","iptu",300,"21/10/2024")
deletarTransaçao()


