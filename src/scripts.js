const ResponsavelEmpresa = require("./ResponsavelEmpresa/ResponsavelEmpresa.js");
const Empresa = require("./Empresa/Empresa.js");
const Qualificacoes = require("./Qualificacoes/Qualificacoes.js");
const Experiencia = require("./Experiencia/Experiencia.js");
const Profissional = require("./Profissional/Profissional.js");
const Vaga = require("./Vaga/Vaga.js");
const Usuario = require("./Usuario/Usuario.js");


//criação de usuarios
const usuarioEmpresa = new Usuario()
usuarioEmpresa.criarUsuario("empresa@empresa.com.br", "123456", "Empresa")

const usuarioProfissional = new Usuario()
usuarioProfissional.criarUsuario("profissional@profissional.com.br", "123456", "Profissional")


// criação de responsavel pela empresa
const responsavel1 = new ResponsavelEmpresa(
  "Maria Fernanda",
  "Gerente",
  "mariafernanda@email.com",
  "(11)91111-1111"
);

const responsavel2 = new ResponsavelEmpresa(
  "Laura Fernandes",
  "Recursos Humanos",
  "laurafernandes@email.com",
  "(11)9222-2222"
);

//criação de empresa
const empresa1 = new Empresa(
  usuarioEmpresa,
  "Tecnologia Web ABC",
  "22.222.222/0001-00",
  "São Paulo/SP",
  "Startup",
  "www.tecnologiaabc.com",
  "Empresa de tecnologia de aplicativos escolares",
  responsavel2
);

const empresa2 = new Empresa(
  usuarioEmpresa,
  "XYZ Tecnologia",
  "11.111.111/0001-00",
  "São Paulo/SP",
  "Startup",
  "www.xyztecnologia.com",
  "Empresa de tecnologia de aplicativos financeiros",
  responsavel1
);

// criação de qualificações
const qualificacoes1 = new Qualificacoes("Júnior", "Front-End");
qualificacoes1.adicionarHabilidade("Javascript");
qualificacoes1.adicionarHabilidade("CSS");

const qualificacoes2 = new Qualificacoes("Pleno", "Front-End");
qualificacoes2.adicionarHabilidade("Javascript");
qualificacoes2.adicionarHabilidade("React");
qualificacoes2.adicionarHabilidade("Angular");

//criação de vagas
const vaga1 = new Vaga(
  1,
  "11.111.111/0001-00",
  "Desenvolvedor",
  4000,
  "Remoto",
  "Desenvolver páginas web com equipe colaborativa",
  qualificacoes1
);

vaga1.cadastrarBeneficio("Vale-Alimentação");
vaga1.cadastrarBeneficio("GimPass");

const vaga2 = new Vaga(
  2,
  "11.111.111/0001-00",
  "Pessoa Desenvolvedora de Software",
  8000,
  "Remoto",
  "Desenvolver páginas web com equipe colaborativa",
  qualificacoes2
);

vaga2.cadastrarBeneficio("Vale-Alimentação");
vaga2.cadastrarBeneficio("GimPass");
vaga2.cadastrarBeneficio("Day off de aniversário")


const vaga3 = new Vaga(
  3,
  "22.222.222/0001-00",
  "Desenvolvedor",
  5500,
  "Remoto",
  "Desenvolver páginas web com equipe colaborativa",
  qualificacoes1
);

vaga3.cadastrarBeneficio("Vale-Alimentação");
vaga3.cadastrarBeneficio("Vale-Refeição");
vaga3.cadastrarBeneficio("Gimpass");
vaga3.cadastrarBeneficio("Day off de aniversário");


// empresas criando vagas
empresa1.criarVaga(vaga1)
empresa1.criarVaga(vaga2)
empresa2.criarVaga(vaga3)

// cadastrando experiência
const experiencia1 = new Experiencia(
  "BR Reciclagem",
  "Desenvolvedor",
  "01/2021",
  "03/2023",
  "realização de testes e criação de paginas",
  qualificacoes1
);

//cadastrando profissional
const profissional1 = new Profissional(
  usuarioProfissional,
  "Roxanie Fernandes",
  "(11)917383003",
  "Arujá/SP",
  "Profissional com XX anos de experiência, etc",
  qualificacoes1
);

profissional1.adicionarRedeSocial("https://www.linkedin.com/in/roxanie-fernandes/");
profissional1.adicionarRedeSocial("https://github.com/RoxanieFernandes/");
profissional1.adicionarExperiencia(experiencia1);

const profissional2 = new Profissional(
  usuarioProfissional,
  "Julia Barbosa",
  "(11)91222-222",
  "Arujá/SP",
  "Profissional com XX anos de experiência, etc",
  qualificacoes2
);

profissional2.adicionarRedeSocial("https://www.linkedin.com");
profissional2.adicionarRedeSocial("https://github.com");
profissional2.adicionarExperiencia(experiencia1);

//profissional se candidatando em vaga
profissional1.candidatarEmVaga(vaga1)
profissional1.candidatarEmVaga(vaga2)
profissional2.candidatarEmVaga(vaga3)
profissional2.candidatarEmVaga(vaga2)

//visualização em terminal
console.log("**************EMPRESAS**********************");
console.log(empresa1);
console.log(empresa2);

console.log("**************PROFISSIONAIS*****************");

console.log(profissional1);
console.log(profissional2);

//Encerramento de vaga
empresa2.encerrarVaga(vaga3)

//visualização em terminal
console.log("**************EMPRESAS**********************");
console.log(empresa2);

console.log((Vaga.listaGeralDeVagas));