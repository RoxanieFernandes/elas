const Candidatura = require("./Candidatura");

describe("Teste da classe Candidatura", () => {
  test("deve instanciar a classe Candidatura corretamente", () => {
    const candidatura = new Candidatura();
    expect(candidatura instanceof Candidatura).toBe(true);
  });

  test("deve retornar dados privados corretamente", () => {
    const candidatura = new Candidatura("vaga1");
    expect(candidatura.getVaga()).toEqual("vaga1");
  });
});
