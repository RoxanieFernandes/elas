const Profissional = require("./Profissional.js")

describe("teste da classe Profissional", () => {
    test("Deve retornar se a instância Profissional está sendo criada", () => {
        const profissional = new Profissional();
        expect(profissional instanceof Profissional).toBe(true)
    })
})