const RedesSociais = require("./RedesSociais.js")

describe("teste da classe RedesSociais", () => {
    test("Deve retornar se a instância RedesSociais está sendo criada", () => {
        const redesSociais = new RedesSociais();
        expect(redesSociais instanceof RedesSociais).toBe(true)
    })
})