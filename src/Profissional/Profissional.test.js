const Profissional = require("./Profissional.js");

describe("teste da classe Profissional", () => {
  test("Deve retornar se a instância Profissional está sendo criada", () => {
    const profissional = new Profissional();
    expect(profissional instanceof Profissional).toBe(true);
  });

  test("deve cadastrar uma experiencia com sucesso", () => {
    const profissional = new Profissional();
    profissional.adicionarExperiencia({
      nivel: "Senior",
      competencia: "Full stack",
      habilidades: ["Javascript", "CSS"],
      empresa: "BR Servicos",
      cargo: "Financeiro",
      dataInicio: "01/2021",
      dataSaida: "03/2023",
    });

    expect(profissional.experiencias).toEqual([
      {
        nivel: "Senior",
        competencia: "Full stack",
        habilidades: ["Javascript", "CSS"],
        empresa: "BR Servicos",
        cargo: "Financeiro",
        dataInicio: "01/2021",
        dataSaida: "03/2023",
      },
    ]);
  });
});
