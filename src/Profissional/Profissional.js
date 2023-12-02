const Usuario = require ("../Usuario/Usuario.js")
const Qualificacoes = require ("../Qualificacoes/Qualificacoes.js")

class Profissional {
  constructor(usuario, nomeCompleto, telefone, localizacao, sobre, curriculo, qualificacoes) {

    if (!(usuario instanceof Usuario)) {
      throw new Error("Erro no cadastro, usuario deve ser instância da classe Usuario")
    }
    if ((usuario.getTipoUsuario() !== "Profissional" )) {
      throw new Error("Erro no cadastro, usuario deve ser do tipo Profissional")
    }
    if (!(qualificacoes instanceof Qualificacoes)) {
      throw new Error("Erro no cadastro, qualificacoes deve ser instância da classe Qualificacoes")
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

