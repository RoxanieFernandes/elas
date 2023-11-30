class Profissional {
  constructor(usuario, nomeCompleto, telefone, localizacao, sobre, curriculo, qualificacoes) {
    if (!(usuario instanceof Usuario)) {
      throw new Error("Erro no cadastro. Usuário deve ser do tipo Usuario")
    }
      this.usuario = usuario
      this.nomeCompleto = nomeCompleto;
      this.telefone = telefone;
      this.localizacao = localizacao;
      this.sobre = sobre;
      this.curriculo = curriculo;
      this.redesSociais = [];
      this.qualificacoes = qualificacoes;
      this.experiencias = [];
      this.listaDeCandidaturas = [];
  }

  adicionarRedeSocial(link) {
    this.redesSociais.push(link);
  }

  adicionarExperiencia(novaExperiencia) {
    this.experiencias.push(novaExperiencia);
  }

  candidatarEmVaga() {}
  listarCandidaturas() {}
}

module.exports = Profissional;
