const Usuario = require("./Usuario.js");

describe("teste da classe Usuario", () => {
  test("Deve retornar se a instância Usuario está sendo criada", () => {
    const usuario = new Usuario();
    expect(usuario instanceof Usuario).toBe(true);
  });
});
