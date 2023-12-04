const Usuario = require("../Usuario/Usuario");
const ResponsavelEmpresa = require("../ResponsavelEmpresa/ResponsavelEmpresa");
const Vaga = require("../Vaga/Vaga");

class Empresa {
  #cnpj;
  listaDeVagas;

  constructor(
    usuario,
    nomeEmpresa,
    cnpj,
    localizacao,
    categoriaEmpresa,
    site,
    descricao,
    responsavel
  ) {
    if (!(usuario instanceof Usuario)) {
      throw new Error("Erro no cadastro, usuario deve ser instância da classe Usuario");
    }
    if (usuario.getTipoUsuario() !== "Empresa") {
      throw new Error("Erro no cadastro, usuario deve ser do tipo Empresa");
    }
    if (!(responsavel instanceof ResponsavelEmpresa)) {
      throw new Error(
        "Erro no cadastro, responsavel deve ser instância da classe ResponsavelEmpresa"
      );
    }
    this.usuario = usuario;
    this.nomeEmpresa = nomeEmpresa;
    this.#cnpj = cnpj;
    this.localizacao = localizacao;
    this.categoriaEmpresa = categoriaEmpresa;
    this.site = site;
    this.descricao = descricao;
    this.responsavel = responsavel;
    this.listaDeVagas = [];
  }

  getCnpj() {
    return this.#cnpj;
  }

  criarVaga(vaga) {
    if (!(vaga instanceof Vaga)) {
      throw new Error("Erro: vaga não é instância da classe Vaga");
    }
    this.listaDeVagas.push(vaga);
  }

  encerrarVaga(vaga) {
    if (vaga.getStatus() !== "Vaga em andamento") {
      throw new Error("Erro: vaga já consta como encerrada");
    }
    return vaga.setStatus("Encerrada");
  }
}

module.exports = Empresa;
