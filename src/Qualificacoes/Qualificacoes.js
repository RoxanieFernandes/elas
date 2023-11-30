class Qualificacoes {
  nivel
  competencia
  
  constructor(nivel, competencia) {
    this.nivel = nivel;
    this.competencia = competencia;
    this.habilidades = [];
  }

  adicionarHabilidade(habilidade) {
    this.habilidades.push(habilidade);
  }
}

module.exports = Qualificacoes;

const qualificacoes1 = new Qualificacoes("Júnior", "Front-End")
qualificacoes1.adicionarHabilidade("Javascript")
qualificacoes1.adicionarHabilidade("CSS")
console.log(qualificacoes1);