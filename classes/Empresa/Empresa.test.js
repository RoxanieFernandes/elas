const Empresa = require ("./Empresa.js")

describe("Teste da classe Empresa", () => {
    test("Deve verificar se a instâcia Empresa está sendo criada", () => {
        const empresa = new Empresa();
        expect(empresa instanceof Empresa).toBe(true)
    })
})