const ResponsavelEmpresa = require("./ResponsavelEmpresa/ResponsavelEmpresa.js");
const Empresa = require("./Empresa/Empresa.js");
const Qualificacoes = require("./Qualificacoes/Qualificacoes.js");
const Experiencia = require("./Experiencia/Experiencia.js");
const Profissional = require("./Profissional/Profissional.js");
const Vaga = require("./Vaga/Vaga.js");

const responsavel = new ResponsavelEmpresa(
  "Maria Fernanda",
  "Gerente",
  "mariafernanda@email.com",
  "(11)91111-1111"
);

const empresaX = new Empresa(
  "XYZ Tecnologia",
  "11.111.111/0001-00",
  "São Paulo/SP",
  "Startup",
  "www.xyztecnologia.com",
  "Empresa de tecnologia de aplicativos financeiros",
  responsavel
);

const qualificacoes1 = new Qualificacoes("Júnior", "Front-End");
qualificacoes1.adicionarHabilidade("Javascript");
qualificacoes1.adicionarHabilidade("CSS");

const experiencia1 = new Experiencia(
  "BR Reciclagem",
  "Analista Financeiro",
  "01/2021",
  "03/2023",
  "realização de pagamentos em geral",
  qualificacoes1
);

const profissional1 = new Profissional(
  "Roxanie Fernandes",
  "(11)917383003",
  "Arujá/SP",
  "Profissional com XX anos de experiência, etc",
  "link do curriculo",
  qualificacoes1
);
profissional1.adicionarRedeSocial(
  "https://www.linkedin.com/in/roxanie-fernandes/"
);
profissional1.adicionarRedeSocial("https://github.com/RoxanieFernandes/");
profissional1.adicionarExperiencia(experiencia1);

const vaga1 = new Vaga(
  "Desenvolvedor",
  4000,
  "Remoto",
  "Desenvolver páginas web com equipe colaborativa",
  qualificacoes1
);
const vaga2 = new Vaga(
  "Pessoa Desenvolvedora de Software",
  8000,
  "Remoto",
  "Desenvolver páginas web com equipe colaborativa",
  qualificacoes1
);
vaga1.cadastrarBeneficio("Vale-Alimentação");
vaga1.cadastrarBeneficio("GimPass");

empresaX.criarVaga(vaga1)
empresaX.criarVaga(vaga2)



console.log(empresaX);
console.log(profissional1);
