const Qualificacoes = require("../Qualificacoes/Qualificacoes.js");
const Experiencia = require("./Experiencia.js");

describe("teste da classe Experiencia", () => {
  let qualificacao;
  let experiencia;

  beforeEach(() => {
    qualificacao = new Qualificacoes("junior", "front-end");
    experiencia = new Experiencia(
      "BR Reciclagem",
      "Analista Financeiro",
      "01/2021",
      "03/2023",
      "realização de pagamentos em geral",
      qualificacao
    );
  });
  test("deve retornar se a instância Experiencia está sendo criada", () => {
    expect(experiencia instanceof Experiencia).toBe(true);
  });

  test("Erro: deve retornar exceção ao criar experiencia com dados inválidos", () => {
    expect(() => {
      const experienciaInvalida = new Experiencia(
        "BR Reciclagem",
        "Analista Financeiro",
        "01/2021",
        "03/2023",
        "realização de pagamentos em geral",
        "qualificacao"
      );
    }).toThrow(
      "Erro na criação de Experiencia, qualificacoes deve ser instância da classe Qualificacoes"
    );
  });
});
