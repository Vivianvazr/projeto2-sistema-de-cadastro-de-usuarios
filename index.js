const prompt = require("prompt-sync")()
const Usuario = require("./class/Usuario")

const usuarios = []

let continuar = "S"

while (continuar === "S") {
const nome = prompt("digite seu nome: ");
const idade = parseInt(prompt("digite sua idade: "));
const email = prompt("digite seu email: ");

let resposta = prompt("usuario ativo? [S/N]: ");
let ativo1 = (resposta === "S") ? true : false
if (resposta === "S" ) {
        ativo1 = true;
} else if (resposta === "N" ) {
        ativo1 = false;
}


const usuario = new Usuario(nome, idade, email)
usuario.ativo = ativo1;
 usuarios.push(usuario)


 continuar = prompt("Deseja adicionar outro usuário? [S/N]: ")

 
console.log(usuario.boasVindas);
console.log(usuario.mostrarDados())
}
console.log(`Total de usuários cadastrados: ${Usuario.contarUsuarios()}`)