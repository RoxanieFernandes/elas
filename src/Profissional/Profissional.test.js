const Qualificacoes = require("../Qualificacoes/Qualificacoes.js");
const Usuario = require("../Usuario/Usuario.js");
const Profissional = require("./Profissional.js");

describe("teste da classe Profissional", () => {
  let profissional;
  let usuario;
  let qualificacao;

  beforeEach(() => {
    usuario = new Usuario("email@email", "12345", "Profissional");
    qualificacao = new Qualificacoes("junior","front-end");
    profissional = new Profissional(
      usuario,
      "Laura Sampaio",
      "(11)11122223",
      "Arujá/SP",
      "sobre profissional",
      "link cv",
      qualificacao
    );
  });

  test("Deve retornar se a instância Profissional está sendo criada com dados válidos", () => {
    expect(profissional instanceof Profissional).toBe(true);
    expect(profissional.usuario instanceof Usuario).toBe(true);
  });

  test("Erro ao tentar instanciar Profissional com dados inválidos", () => {
    expect(
      () =>
        (profErrado = new Profissional(
          "usuario",
          "Laura Sampaio",
          "(11)11122223",
          "Arujá/SP",
          "sobre profissional",
          "link cv",
          qualificacao
        ))
    ).toTrow("Erro no cadastro, usuario deve ser instância da classe Usuario");
  });

  // test("deve cadastrar uma experiencia com sucesso", () => {
  //   profissional.adicionarExperiencia({
  //     nivel: "Senior",
  //     competencia: "Full stack",
  //     habilidades: ["Javascript", "CSS"],
  //     empresa: "BR Servicos",
  //     cargo: "Financeiro",
  //     dataInicio: "01/2021",
  //     dataSaida: "03/2023",
  //   });

  //   expect(profissional.experiencias).toEqual([
  //     {
  //       nivel: "Senior",
  //       competencia: "Full stack",
  //       habilidades: ["Javascript", "CSS"],
  //       empresa: "BR Servicos",
  //       cargo: "Financeiro",
  //       dataInicio: "01/2021",
  //       dataSaida: "03/2023",
  //     },
  //   ]);
  // });
});
