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
