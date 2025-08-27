class Usuario {
    #ativo
    static totalUsuarios = 0

    constructor(nome, idade, email) {
        this.nome = nome
        this.idade = idade
        this.email = email
        Usuario.totalUsuarios++ 
    }

    get boasVindas() {
        return (`Bem-vindo, ${this.nome}!`)

    }
    get ativo() {
        return this.#ativo
    }

    set ativo(valor) {
        this.#ativo = valor
    }

    mostrarDados() {
        return ` 
         Nome: ${this.nome}.
         Idade: ${this.idade}.
         Email: ${this.email}. 
         Ativo: ${this.ativo}.`
    }

    static totalUsuarios() {
        console.log(``)
    }

    static contarUsuarios() {
        return Usuario.totalUsuarios
    }
}

module.exports = Usuario