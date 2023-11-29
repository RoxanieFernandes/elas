const ResponsavelEmpresa = require ("../ResponsavelEmpresa/ResponsavelEmpresa.js")
class Empresa {
    nome
    cnpj
    localizacao
    tipo
    site
    descricao
    #email
    #senha
    responsavel

    constructor(nome, cnpj, localizacao, tipo, site, descricao, email, senha){
        this.nome = nome
        this.cnpj = cnpj
        this.localizacao = localizacao
        this.tipo = tipo
        this.site = site
        this.descricao = descricao
        this.#email = email
        this.#senha = senha
        this.responsavel = new ResponsavelEmpresa ()
    }

    getEmail(){
        return this.#email
    }

    getSenha(){
        return this.#senha
    }

    setSenha(novaSenha){
        this.#senha = novaSenha
    }
}

module.exports = Empresa