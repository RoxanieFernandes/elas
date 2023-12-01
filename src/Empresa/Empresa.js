const Usuario = require("../Usuario/Usuario");

class Empresa{
  #cnpj;
  listaDeVagas;

  constructor(usuario, nomeEmpresa, cnpj, localizacao, categoriaEmpresa, site, descricao, responsavel) {

    if (!(usuario instanceof Usuario)) {
      throw new Error("Erro no cadastro. Usuário deve ser do tipo Usuario")
    }
    if ((usuario.getTipoUsuario() !== "Empresa" )) {
      throw new Error("Erro no cadastro. Usuário deve ser do tipo Empresa")
    }
      this.usuario = usuario
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
    this.listaDeVagas.push(vaga);
  }

  listarVagas() {}

  encerrarVaga() {}
}

module.exports = Empresa;

