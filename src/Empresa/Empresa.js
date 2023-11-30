const Usuario = require("../Usuario/Usuario");

class Empresa{
  #cnpj;
  listaDeVagas;

  constructor(usuario, nomeEmpresa, cnpj, localizacao, categoriaEmpresa, site, descricao, responsavel) {
    if (!(usuario instanceof Usuario)) {
      throw new Error("Erro no cadastro. Usuário deve ser do tipo Usuario")
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

// const user = new Usuario();
// user.criarUsuario("email@email", "huahuishaiu", "Profissional");

// const empresa = new Empresa(user,"EmpresaX","1234564578", "Arujá/SP", "Startup", "www.empresa.com", "jjfkjsnfjksdfjksdfjsdjfsdjkfskdjhfjkshfjksdhf", "responsavel1")
// // console.log(empresa.usuario.getEmail());
// console.log(empresa);
