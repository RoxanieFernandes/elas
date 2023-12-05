const Qualificacoes = require("../Qualificacoes/Qualificacoes.js");
class Vaga {
  // #id;

  static listaGeralDeVagas = [];

  constructor(
    id,
    cnpjEmpresa,
    cargo,
    salario,
    modalidade,
    descricaoDoCargo,
    qualificacoes
  ) {
    if (!(qualificacoes instanceof Qualificacoes)) {
      throw new Error(
        "Erro na criação de Vaga, qualificacoes deve ser instância da classe Qualificacoes"
      );
    }
    this.id = id;
    this.cnpjEmpresa = cnpjEmpresa;
    this.cargo = cargo;
    this.salario = salario;
    this.modalidade = modalidade;
    this.beneficios = [];
    this.descricaoDoCargo = descricaoDoCargo;
    this.qualificacoes = qualificacoes;
    this.status = "Vaga em andamento";
    this.constructor.listaGeralDeVagas.push({ id: this.id, qtdCandidatos: 0 });
  }

  // getId() {
  //   return this.#id;
  // }

  getStatus() {
    return this.status;
  }

  setStatus(novoStatus) {
    this.status = novoStatus;
  }

  cadastrarBeneficio(beneficio) {
    this.beneficios.push(beneficio);
  }
}

module.exports = Vaga;
