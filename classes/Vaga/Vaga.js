const Qualificacoes = require("../Qualificacoes/Qualificacoes");

class Vaga extends Qualificacoes {
  cargo;
  salario;
  modalidade;
  beneficios;
  descricaoDoCargo;

  constructor(cargo, nivel, competencia, descricaoDoCargo, modalidade, salario) {
    super (nivel, competencia)
    this.cargo = cargo;
    this.descricaoDoCargo = descricaoDoCargo
    this.salario = salario;
    this.modalidade = modalidade;
    this.beneficios = [];
  }

  cadastrarBeneficio(beneficio){
    this.beneficios.push(beneficio)
  }
}

module.exports = Vaga;

