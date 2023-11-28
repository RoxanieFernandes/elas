const Qualificacoes = require("../Qualificacoes/Qualificacoes");

class Profissional extends Qualificacoes {
  nomeCompleto
  telefone
  localizacao
  sobre
  curriculo
  
  constructor(nomeCompleto, telefone, localizacao, sobre, curriculo, nivel, competencia) {
    super(nivel, competencia);
    this.nomeCompleto = nomeCompleto;
    this.telefone = telefone;
    this.localizacao = localizacao;
    this.sobre = sobre;
    this.curriculo = curriculo;
    this.redesSociais = [];
    this.experiencias = [];
  }

  adicionarRedeSocial(link) {
    this.redesSociais.push(link);
  }

  adicionarExperiencia(novaExperiencia) {
    this.experiencias.push(novaExperiencia);
  }
}

module.exports = Profissional;
