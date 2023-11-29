const Qualificacoes = require("../Qualificacoes/Qualificacoes");

class Vaga {

  constructor(cargo, salario, modalidade, descricaoDoCargo, qualificacoes) {
    this.cargo = cargo;
    this.salario = salario;
    this.modalidade = modalidade;
    this.beneficios = [];
    this.descricaoDoCargo = descricaoDoCargo
    this.qualificacoes = qualificacoes
  }

  cadastrarBeneficio(beneficio){
    this.beneficios.push(beneficio)
  }
}

module.exports = Vaga;

const qualificacoes1 = new Qualificacoes("Júnior", "Front-End")
qualificacoes1.adicionarHabilidade("Javascript")
qualificacoes1.adicionarHabilidade("CSS")

const vaga1 = new Vaga("Desenvolvedor", 4000, "Remoto", "Desenvolver páginas web com equipe colaborativa", qualificacoes1 )
vaga1.cadastrarBeneficio("Vale-Alimentação")
vaga1.cadastrarBeneficio("GimPass")

console.log(vaga1);
