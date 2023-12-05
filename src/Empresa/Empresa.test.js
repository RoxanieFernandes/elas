const Empresa = require("./Empresa.js");
const ResponsavelEmpresa = require("../ResponsavelEmpresa/ResponsavelEmpresa.js");
const Usuario = require("../Usuario/Usuario.js");
const Vaga = require("../Vaga/Vaga.js");
const Qualificacoes = require("../Qualificacoes/Qualificacoes.js");

describe("Teste da classe Empresa", () => {
  let usuario;
  let responsavel;
  let empresa;
  let empresa2;
  let qualificacao;
  let vaga;
  let vaga2;

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
    empresa2 = new Empresa(
      usuario,
      "XYZ Tecnologia",
      "22.222.222/0001-00",
      "São Paulo/SP",
      "Startup",
      "www.xyztecnologia.com",
      "Empresa de tecnologia de aplicativos financeiros",
      responsavel
    );
    qualificacao = new Qualificacoes("Junior", "Front-end");
    vaga = new Vaga(
      1,
      "11.111.111/0001-00",
      "Desenvolvedor",
      5000,
      "remoto",
      "descricao",
      qualificacao
    );
    vaga2 = new Vaga(
      2,
      "22.222.222/0001-00",
      "Desenvolvedor",
      5000,
      "remoto",
      "descricao",
      qualificacao
    );
  });

  test("Deve verificar se a instâcia Empresa está sendo criada", () => {
    expect(empresa instanceof Empresa).toBe(true);
  });

  test("Erro ao fornecer usuario que não é instância da classe Usuario", () => {
    const usuarioInvalido = {};
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
    }).toThrow(
      "Erro no cadastro, usuario deve ser instância da classe Usuario"
    );
  });

  test("Erro ao fornecer usuario com tipo diferente de EMPRESA", () => {
    const usuarioInvalido2 = new Usuario(
      "email@email",
      "12456788",
      "Profissional"
    );

    expect(() => {
      new Empresa(
        usuarioInvalido2,
        "Nome Empresa",
        "12345678901234",
        "Localização",
        "Categoria",
        "site.com",
        "Descrição",
        responsavel
      );
    }).toThrow("Erro no cadastro, usuario deve ser do tipo Empresa");
  });

  test("Erro ao fornecer responsavel que não é instância da classe ResponsavelEmpresa", () => {
    const responsavelInvalido = {};
    expect(() => {
      new Empresa(
        usuario,
        "Nome Empresa",
        "12345678901234",
        "Localização",
        "Categoria",
        "site.com",
        "Descrição",
        responsavelInvalido
      );
    }).toThrow(
      "Erro no cadastro, responsavel deve ser instância da classe ResponsavelEmpresa"
    );
  });

  test("deve retornar dados privados com sucesso", () => {
    expect(empresa.getCnpj()).toBe("11.111.111/0001-00");
  });

  test("deve criar vaga com sucesso", () => {
    empresa.criarVaga(vaga);
    expect(empresa.listaDeVagas).toContain(vaga);
  });

  test("Erro ao tentar criar vaga com objeto que não é instância de Vaga", () => {
    const vagaInvalida = {};
    expect(() => {
      empresa.criarVaga(vagaInvalida);
    }).toThrow("Erro: vaga não é instância da classe Vaga");
  });

  test("deve encerrar vaga com sucesso", () => {
    empresa.encerrarVaga(vaga);
    expect(vaga.status).toEqual("Encerrada");
  });

  test("Erro ao tentar encerrar vaga cadastrada por outra empresa", () => {
    expect(() => {
      empresa.encerrarVaga(vaga2);
    }).toThrow("Erro: cadastrada por outra empresa");
  });

  test("Erro ao tentar encerrar vaga já encerrada", () => {
    empresa.encerrarVaga(vaga);
    expect(() => {
      empresa.encerrarVaga(vaga);
    }).toThrow("Erro: vaga já consta como encerrada");
  });
});
