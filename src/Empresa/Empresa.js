const ResponsavelEmpresa = require("../ResponsavelEmpresa/ResponsavelEmpresa.js");
class Empresa {
  nome;
  #cnpj;
  localizacao;
  tipo;
  site;
  descricao;
  #email;
  #senha;
  responsavel;

  constructor(nome, cnpj, localizacao, tipo, site, descricao, responsavel) {
    this.nome = nome;
    this.#cnpj = cnpj;
    this.localizacao = localizacao;
    this.tipo = tipo;
    this.site = site;
    this.descricao = descricao;
    // this.#email = email ***** criar método para cadastrar usuário e senha com verificação de senha e regex
    // this.#senha = senha
    this.responsavel = responsavel;
  }

  getCnpj() {
    return this.#cnpj;
  }

  getEmail() {
    return this.#email;
  }

  getSenha() {
    return this.#senha;
  }

  setSenha(novaSenha) {
    this.#senha = novaSenha;
  }
}

module.exports = Empresa;

const responsavel = new ResponsavelEmpresa(
  "Maria Fernanda",
  "Gerente",
  "mariafernanda@email.com",
  "(11)91111-1111"
);

const empresaX = new Empresa(
  "XYZ Tecnologia",
  "11.111.111/0001-00",
  "São Paulo/SP",
  "Startup",
  "www.xyztecnologia.com",
  "Empresa de tecnologia de aplicativos financeiros",
  responsavel
);

console.log(empresaX);
