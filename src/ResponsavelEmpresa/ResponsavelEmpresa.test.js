const ResponsavelEmpresa = require("./ResponsavelEmpresa.js");

describe("teste da classe ResponsavelEmpresa", () => {
  let responsavelEmpresa;

  beforeEach(() => {
    responsavelEmpresa = new ResponsavelEmpresa("MAria Fernanda","Gerente", "email@email", "(11)91118222");
  })
  test("deve retornar se a instância ResponsavelEmpresa está sendo criada", () => {
    expect(responsavelEmpresa instanceof ResponsavelEmpresa).toBe(true);
  });

  test("deve retornar dados privados corretamente", () => {
    expect(responsavelEmpresa.getEmail()).toBe("email@email")
    expect(responsavelEmpresa.getTelefone()).toBe("(11)91118222")

  })
});
