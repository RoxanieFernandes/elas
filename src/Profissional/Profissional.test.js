const Qualificacoes = require("../Qualificacoes/Qualificacoes.js");
const Usuario = require("../Usuario/Usuario.js");
const Experiencia = require("../Experiencia/Experiencia.js");
const Vaga = require("../Vaga/Vaga.js");
const Profissional = require("./Profissional.js");

describe("teste da classe Profissional", () => {
  let profissional;
  let usuario;
  let qualificacao;
  let redeSocial;
  let experiencia;
  let vaga;

  beforeEach(() => {
    usuario = new Usuario("email@email", "12345", "Profissional");
    qualificacao = new Qualificacoes("junior", "front-end");
    profissional = new Profissional(
      usuario,
      "Laura Sampaio",
      "(11)11122223",
      "Arujá/SP",
      "sobre profissional",
      qualificacao
    );
    redeSocial = "www.linkedin.com/profissional";
    experiencia = new Experiencia(
      "EmpresaX",
      "Desenvolvedor",
      "01/2022",
      "01/2023",
      "descricao de cargo",
      qualificacao
    );
    vaga = new Vaga(
      1,
      "11.111.111/0001-00",
      "Desenvolvedor",
      5000,
      "remoto",
      "descricao",
      qualificacao
    );
  });

  test("Deve retornar se a instância Profissional está sendo criada com dados válidos", () => {
    expect(profissional instanceof Profissional).toBe(true);
    expect(profissional.usuario instanceof Usuario).toBe(true);
    expect(profissional.qualificacoes instanceof Qualificacoes).toBe(true);
  });

  test("Erro ao tentar instanciar Profissional com dados inválidos", () => {
    expect(() => {
      new Profissional(
        "usuario",
        "Laura Sampaio",
        "(11)11122223",
        "Arujá/SP",
        "sobre profissional",
        qualificacao
      );
    }).toThrow(
      "Erro no cadastro, usuario deve ser instância da classe Usuario"
    );
  });

  test("Erro ao tentar instanciar Profissional com dados inválidos", () => {
    const usuarioInvalido = new Usuario("email@email", "12345", "Estudande");
    expect(
      () =>
        new Profissional(
          usuarioInvalido,
          "Laura Sampaio",
          "(11)11122223",
          "Arujá/SP",
          "sobre profissional",
          qualificacao
        )
    ).toThrow("Erro no cadastro, usuario deve ser do tipo Profissional");
  });

  test("Erro ao tentar instanciar Profissional com dados inválidos", () => {
    expect(() => {
      new Profissional(
        usuario,
        "Laura Sampaio",
        "(11)11122223",
        "Arujá/SP",
        "sobre profissional",
        "qualificacao"
      );
    }).toThrow(
      "Erro no cadastro, qualificacoes deve ser instância da classe Qualificacoes"
    );
  });

  test("deve cadastrar rede social com sucesso", () => {
    profissional.adicionarRedeSocial(redeSocial);
    expect(profissional.redesSociais).toContain(redeSocial);
  });

  test("deve cadastrar uma experiencia com sucesso", () => {
    profissional.adicionarExperiencia(experiencia);
    expect(profissional.experiencias).toContain(experiencia);
  });

  test("deve encontra vaga corretamente", () => {
    profissional.candidatarEmVaga(vaga);
    profissional.encontrarCandidatura(vaga);
    expect(profissional.encontrarCandidatura(vaga)).toBe(true);
  });

  test("Erro ao se candidatar em vaga já aplicada", () => {
    profissional.candidatarEmVaga(vaga);
    expect(() => profissional.candidatarEmVaga(vaga)).toThrow(
      "Erro: profissional já se candidatou nesta vaga"
    );
  });

  test("Erro ao se candidatar em vaga inválida", () => {
    expect(() => profissional.candidatarEmVaga("vaga inexistente")).toThrow(
      "Erro: Informe uma vaga válida"
    );
  });

  test("deve adicionar candidados à vaga corretamente", () => {
    profissional.candidatarEmVaga(vaga);
    vagaPorID = Vaga.listaGeralDeVagas.find((value) => value.id === 1);
    expect(vagaPorID.qtdCandidatos).toBe(3);
  });
});
