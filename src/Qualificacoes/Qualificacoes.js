class Qualificacoes {
 
  constructor(nivel, area) {
    this.nivel = nivel;
    this.area = area;
    this.habilidades = [];
  }

  adicionarHabilidade(habilidade) {
    this.habilidades.push(habilidade);
  }
}

module.exports = Qualificacoes;

