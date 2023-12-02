const Qualificacoes = require("../Qualificacoes/Qualificacoes");

class Experiencia {

  constructor(nomeEmpresa, cargo, dataInicio, dataSaida, descricao, qualificacoes) {
    if (!(qualificacoes instanceof Qualificacoes)) {
      throw new Error("Erro na criação de Experiencia, qualificacoes deve ser instância da classe Qualificacoes")
    }
    this.nomeEmpresa = nomeEmpresa;
    this.cargo = cargo;
    this.dataInicio = dataInicio;
    this.dataSaida = dataSaida;
    this.descricao = descricao
    this.qualificacoes = qualificacoes
  }
}

module.exports = Experiencia;

