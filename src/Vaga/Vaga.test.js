const Qualificacoes = require("../Qualificacoes/Qualificacoes.js");
const Vaga = require("./Vaga.js");

describe("teste da classe Vaga", () => {
  let qualificacao;
  let vaga;

  beforeEach(() => {
    qualificacao = new Qualificacoes("Junior", "Front-end");
    vaga = new Vaga("Desenvolvedor", 5000, "remoto", "descricao", qualificacao);
  });

  test("Deve retornar se a instância Vaga está sendo criada", () => {
    expect(vaga instanceof Vaga).toBe(true);
  });

  test("deve criar instancia com dados válidos", () => {
    expect(vaga.qualificacoes instanceof Qualificacoes).toBe(true);
  });

  test("Erro ao criar instância com dados inválidos", () => {
    expect(
      () =>
        (vaga = new Vaga(
          "Desenvolvedor",
          5000,
          "remoto",
          "descricao",
          "qualificacao"
        ))
    ).toThrow(
      "Erro na criação de Vaga, qualificacoes deve ser instância da classe Qualificacoes"
    );
  });

  test("deve cdastrar um beneficio com sucesso", () => {
    vaga.cadastrarBeneficio("Vale Alimentação");
    expect(vaga.beneficios).toEqual(["Vale Alimentação"]);
  });

  test("deve retornar dados privados com sucesso", () => {
    expect(vaga.getStatus()).toBe("Vaga em andamento");
  });

  test("deve alterar status corretamente", () => {
    vaga.setStatus("Encerrada");
    expect(vaga.getStatus()).toBe("Encerrada");
  });
});
