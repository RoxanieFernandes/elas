class Usuario {
  #email;
  #senha;
  #tipo;

  getEmail() {
    return this.#email;
  }

  getSenha() {
    return this.#senha;
  }

  setSenha(novaSenha) {
    this.#senha = novaSenha;
  }

  getTipoUsuario() {
    return this.#tipo;
  }

  criarUsuario(email, senha, tipo) {
    const tipoValido = tipo === "Profissional" || tipo === "Empresa";
    if (tipoValido) {
      this.#email = email;
      this.#senha = senha;
      this.#tipo = tipo;
      return "Usuário criado com sucesso";
    } else {
      throw new Error(
        "Erro na criação do usuário, o tipo deve ser PROFISSIONAL ou EMPRESA"
      );
    }
  }
}

module.exports = Usuario;

