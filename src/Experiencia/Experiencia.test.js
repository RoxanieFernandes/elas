const Qualificacoes = require("../Qualificacoes/Qualificacoes.js");
const Experiencia = require("./Experiencia.js")

describe("teste da classe Experiencia", () => {
    test("deve retornar se a instância Experiencia está sendo criada", () => {
        const experiencia = new Experiencia();
        expect(experiencia instanceof Experiencia).toBe(true)
    })

    test("deve retornar se a instância Experiencia está sendo criada", () => {
        const qualificacoes = new Qualificacoes("Júnior", "Front-End");

        const experiencia = new Experiencia(
        "BR Reciclagem",
        "Analista Financeiro",
        "01/2021",
        "03/2023",
        "realização de pagamentos em geral",
        qualificacoes
        );
        expect(qualificacoes instanceof Qualificacoes).toBe(true)
    })

   
})