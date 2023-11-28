const Qualificacoes = require("./Qualificacoes.js")

describe("teste da classe Qualificacoes", () => {
    test("Deve retornar se a instância Qualificacoes está sendo criada", () => {
        const qualificacoes = new Qualificacoes();
        expect(qualificacoes instanceof Qualificacoes).toBe(true)
    })

    test("deve cadastrar uma habilidade com sucesso", () => {
        const qualificacoes = new Qualificacoes();
        qualificacoes.adicionarHabilidade("Javascript")
        expect(qualificacoes.habilidades).toStrictEqual(["Javascript"])
    })
})