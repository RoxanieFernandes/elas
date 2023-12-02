const Qualificacoes = require("./Qualificacoes.js");

describe("teste da classe Qualificacoes", () => {
  let qualificacoes;

  beforeEach(() => {
    qualificacoes = new Qualificacoes();
  });

  test("Deve retornar se a instância Qualificacoes está sendo criada", () => {
    expect(qualificacoes instanceof Qualificacoes).toBe(true);
  });

  test("deve cadastrar uma habilidade com sucesso", () => {
    qualificacoes.adicionarHabilidade("Javascript");
    expect(qualificacoes.habilidades).toEqual(["Javascript"]);
  });
});
