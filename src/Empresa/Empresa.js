const Usuario = require("../Usuario/Usuario");
const ResponsavelEmpresa = require("../ResponsavelEmpresa/ResponsavelEmpresa");
const Qualificacoes = require("../Qualificacoes/Qualificacoes");
const Vaga = require("../Vaga/Vaga");

class Empresa{
  #cnpj;
  listaDeVagas;

  constructor(usuario, nomeEmpresa, cnpj, localizacao, categoriaEmpresa, site, descricao, responsavel) {

    if (!(usuario instanceof Usuario)) {
      throw new Error("Erro no cadastro, usuario deve ser do tipo Usuario")
    }
    if ((usuario.getTipoUsuario() !== "Empresa" )) {
      throw new Error("Erro no cadastro, usuario deve ser do tipo Empresa")
    }
    if (!(responsavel instanceof ResponsavelEmpresa)) {
      throw new Error("Erro no cadastro, responsavel deve ser instância da classe ResponsavelEmpresa")
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

  encerrarVaga(vaga) {
    if(vaga.getStatus() !== "Vaga em andamento") {
      throw new Error ("Erro: vaga já consta como encerrada")
    }
    console.log("Vaga encerrada com sucesso");
    return vaga.setStatus("Encerrada")
  }
}

module.exports = Empresa;

