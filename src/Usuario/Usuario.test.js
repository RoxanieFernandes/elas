const Usuario = require("./Usuario.js");

describe("teste da classe Usuario", () => {
  let usuario;

  beforeEach(() => {
    usuario = new Usuario();
  });

  test("Deve retornar se a instância Usuario está sendo criada", () => {
    expect(usuario instanceof Usuario).toBe(true);
  });

  test("Deve criar usuario com tipo válido", () => {
    expect(usuario.criarUsuario("email@email", "12345", "Profissional")).toBe(
      "Usuário criado com sucesso"
    );
  });

  test("Deve retornar dados corretamente ", () => {
    usuario.criarUsuario("email@email", "12345", "Profissional");

    expect(usuario.getEmail()).toBe("email@email");
    expect(usuario.getSenha()).toBe("12345");
    expect(usuario.getTipoUsuario()).toBe("Profissional");
  });

  test("Deve alterar senha corretamente ", () => {
    usuario.criarUsuario("email@email", "12345", "Profissional");
    usuario.setSenha("54321");

    expect(usuario.getSenha()).toBe("54321");
  });

  test("Erro ao tentar criar usuario com tipo invalido", () => {
    expect(() =>
      usuario.criarUsuario("email@email", "12345", "Usuario")
    ).toThrow(
      "Erro na criação do usuário, o tipo deve ser PROFISSIONAL ou EMPRESA"
    );
  });
});
