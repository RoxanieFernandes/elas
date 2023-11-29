const Qualificacoes = require("../Qualificacoes/Qualificacoes");
class Experiencia {

  constructor(nomeEmpresa, cargo, dataInicio, dataSaida, descricao, qualificacoes) {
    this.nomeEmpresa = nomeEmpresa;
    this.cargo = cargo;
    this.dataInicio = dataInicio;
    this.dataSaida = dataSaida;
    this.descricao = descricao
    this.qualificacoes = qualificacoes
  }
}

module.exports = Experiencia;

const qualificacoes1 = new Qualificacoes("Júnior", "Front-End")
qualificacoes1.adicionarHabilidade("Javascript")
qualificacoes1.adicionarHabilidade("CSS")
const experiencia1 = new Experiencia("BR Reciclagem", "Analista Financeiro", "01/2021", "03/2023", "realização de pagamentos em geral", qualificacoes1)

console.log(experiencia1);