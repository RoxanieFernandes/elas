const ResponsavelEmpresa = require("./ResponsavelEmpresa.js");

describe("teste da classe ResponsavelEmpresa", () => {
  test("deve retornar se a instância ResponsavelEmpresa está sendo criada", () => {
    const responsavelEmpresa = new ResponsavelEmpresa();
    expect(responsavelEmpresa instanceof ResponsavelEmpresa).toBe(true);
  });
});
