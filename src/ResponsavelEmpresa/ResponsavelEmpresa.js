class ResponsavelEmpresa {
  nome;
  cargo;
  #email;
  #telefone;

  constructor(nome, cargo, email, telefone) {
    this.nome = nome;
    this.cargo = cargo;
    this.#email = email;
    this.#telefone = telefone;
  }
  getEmail() {
    return this.#email;
  }

  getTelefone() {
    return this.#telefone;
  }
}

module.exports = ResponsavelEmpresa;

const responsavel = new ResponsavelEmpresa("Maria Fernanda", "Gerente", "mariafernanda@email.com", "(11)91111-1111")