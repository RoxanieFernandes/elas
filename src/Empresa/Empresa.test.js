const Empresa = require("./Empresa.js");
const ResponsavelEmpresa = require("../ResponsavelEmpresa/ResponsavelEmpresa.js");
const Usuario = require("../Usuario/Usuario.js");

describe("Teste da classe Empresa", () => {
  let usuario;
  let responsavel;
  let empresa;

  beforeEach(() => {
    usuario = new Usuario("email@email", "12456788", "Empresa");
    responsavel = new ResponsavelEmpresa(
      "Maria Fernanda",
      "Gerente",
      "mariafernanda@email.com",
      "(11)91111-1111"
    );
    empresa = new Empresa(
      usuario,
      "XYZ Tecnologia",
      "11.111.111/0001-00",
      "São Paulo/SP",
      "Startup",
      "www.xyztecnologia.com",
      "Empresa de tecnologia de aplicativos financeiros",
      responsavel
    );
  });

  test("Deve verificar se a instâcia Empresa está sendo criada", () => {
    const empresa = new Empresa();
    expect(empresa instanceof Empresa).toBe(true);
  });

  test("Erro ao fornecer usuario que não é instância da classe Usuario", () => {
    const usuarioInvalido = "Maria";
    expect(() => {
      new Empresa(
        usuarioInvalido,
        "Nome Empresa",
        "12345678901234",
        "Localização",
        "Categoria",
        "site.com",
        "Descrição",
        responsavel
      );
    }).toThrow("Erro no cadastro, usuario deve ser do tipo Usuario");
  });

  test("Erro ao fornecer usuario com tipo diferente de EMPRESA", () => {
    const usuarioInvalido2 = new Usuario(
      "email@email",
      "12456788",
      "Profissional"
    );

    expect(() => usuarioInvalido2.getTipoUsuario()).toThrow(
      "Erro no cadastro, usuario deve ser do tipo Empresa"
    );
  });
});
