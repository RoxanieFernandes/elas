const Qualificacoes = require("../Qualificacoes/Qualificacoes");
const Experiencia = require("../Experiencia/Experiencia");


class Profissional{
   
  constructor(nomeCompleto, telefone, localizacao, sobre, curriculo, qualificacoes) {
    this.nomeCompleto = nomeCompleto;
    this.telefone = telefone;
    this.localizacao = localizacao;
    this.sobre = sobre;
    this.curriculo = curriculo;
    this.redesSociais = [];
    this.qualificacoes = qualificacoes
    this.experiencias = [];
    this.listaDeCandidaturas = []
  }

  adicionarRedeSocial(link) {
    this.redesSociais.push(link);
  }

  adicionarExperiencia(novaExperiencia) {
    this.experiencias.push(novaExperiencia);
  }
}

module.exports = Profissional;

const qualificacoes1 = new Qualificacoes("Júnior", "Front-End")
qualificacoes1.adicionarHabilidade("Javascript")
qualificacoes1.adicionarHabilidade("CSS")
const experiencia1 = new Experiencia("BR Reciclagem", "Analista Financeiro", "01/2021", "03/2023", "realização de pagamentos em geral", qualificacoes1)

const profissional1 = new Profissional("Roxanie Fernandes", "(11)917383003", "Arujá/SP", "Profissional com XX anos de experiência, etc", "link do curriculo", qualificacoes1)
profissional1.adicionarRedeSocial("https://www.linkedin.com/in/roxanie-fernandes/")
profissional1.adicionarRedeSocial("https://github.com/RoxanieFernandes/")
profissional1.adicionarExperiencia(experiencia1)


console.log(profissional1);