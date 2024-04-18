//Criando um objeto
/*
*
const objeto1 = {
    atributo1: valorAtrib1,
    atributo2: valorAtrib2,
    atributo3: valorAtrib3
}
*
*/

//exmplo pessoa
const pessoa1 = {
    nome: 'Rawlinson',
    sobrenome: 'Junior',
    idade: 28,

    apresentacao(){
        console.log(`Olá, sou a pessoa1! me chamo ${this.nome} ${this.sobrenome}, e tenho ${this.idade} anos.`)
    }
}
pessoa1.apresentacao()
console.log(pessoa1)
console.log(pessoa1.nome)

//criando uma função que crie um obj
function novaPessoa(nome, sobrenome, idade){
    return { nome, sobrenome, idade, apresentacao(){console.log(`Olá! me chamo ${this.nome} ${this.sobrenome}, e tenho ${this.idade} anos.`)} }
}

const pessoa2 = novaPessoa('Maria', 'Cecilia', 3)
pessoa2.apresentacao()
console.log(pessoa2)

