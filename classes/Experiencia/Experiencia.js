const Qualificacoes = require("../Qualificacoes/Qualificacoes");
class Experiencia  extends Qualificacoes{
  nomeEmpresa
  cargo
  dataInicio
  dataSaida

  constructor(nomeEmpresa, cargo, dataInicio, dataSaida, nivel, area, descricao) {
    super (nivel, area, descricao)
    this.nomeEmpresa = nomeEmpresa;
    this.cargo = cargo;
    this.dataInicio = dataInicio;
    this.dataSaida = dataSaida;
  }
}

module.exports = Experiencia;

