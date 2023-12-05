const Usuario = require("../Usuario/Usuario.js");
const Vaga = require("../Vaga/Vaga.js");
const Candidatura = require("../Candidatura/Candidatura.js");

const Qualificacoes = require("../Qualificacoes/Qualificacoes.js");

class Profissional {
  constructor(
    usuario,
    nomeCompleto,
    telefone,
    localizacao,
    sobre,
    qualificacoes
  ) {
    if (!(usuario instanceof Usuario)) {
      throw new Error(
        "Erro no cadastro, usuario deve ser instância da classe Usuario"
      );
    }
    if (usuario.getTipoUsuario() !== "Profissional") {
      throw new Error(
        "Erro no cadastro, usuario deve ser do tipo Profissional"
      );
    }
    if (!(qualificacoes instanceof Qualificacoes)) {
      throw new Error(
        "Erro no cadastro, qualificacoes deve ser instância da classe Qualificacoes"
      );
    }
    this.usuario = usuario;
    this.nomeCompleto = nomeCompleto;
    this.telefone = telefone;
    this.localizacao = localizacao;
    this.sobre = sobre;
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

  encontrarCandidatura(vaga) {
    return (
      this.listaDeCandidaturas.find(
        (candidatura) => candidatura.getVaga().id === vaga.id
      ) !== undefined
    );
  }

  candidatarEmVaga(vaga) {
    if (!(vaga instanceof Vaga)) {
      throw new Error("Erro: Informe uma vaga válida");
    }

    if (this.encontrarCandidatura(vaga)) {
      throw new Error("Erro: profissional já se candidatou nesta vaga");
    }
    const novaCandidatura = new Candidatura(vaga);
    this.listaDeCandidaturas.push(novaCandidatura);

    const vagaIndex = Vaga.listaGeralDeVagas.findIndex(
      (element) => element.id === vaga.id
    );
    if (vagaIndex !== -1) {
      Vaga.listaGeralDeVagas[vagaIndex].qtdCandidatos++;
    }
  }
}

module.exports = Profissional;
