const Vaga = require("./Vaga.js")

describe("teste da classe Vaga", () => {
    test("Deve retornar se a instância Vaga está sendo criada", () => {
        const vaga = new Vaga();
        expect(vaga instanceof Vaga).toBe(true)
    })

    test("deve cadastrar uma habilidade com sucesso", () => {
        const vaga = new Vaga();
        vaga.adicionarHabilidade("Javascript")
        expect(vaga.habilidades).toStrictEqual(["Javascript"])
    })

    test("deve cdastrar um beneficio com sucesso", () => {
        const vaga = new Vaga()
        vaga.cadastrarBeneficio("Vale Alimentação")
        expect(vaga.beneficios).toStrictEqual(["Vale Alimentação"])
    })
})