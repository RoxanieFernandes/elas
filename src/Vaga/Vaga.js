class Vaga {

  constructor(cargo, salario, modalidade, descricaoDoCargo, qualificacoes, status) {
    this.cargo = cargo;
    this.salario = salario;
    this.modalidade = modalidade;
    this.beneficios = [];
    this.descricaoDoCargo = descricaoDoCargo
    this.qualificacoes = qualificacoes
    this.status = status
  }

  cadastrarBeneficio(beneficio){
    this.beneficios.push(beneficio)
  }
}

module.exports = Vaga;

