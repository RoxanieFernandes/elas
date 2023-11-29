const Experiencia = require("./Experiencia.js")

describe("teste da classe Experiencia", () => {
    test("deve retornar se a instância Experiencia está sendo criada", () => {
        const experiencia = new Experiencia();
        expect(experiencia instanceof Experiencia).toBe(true)
    })

   
})