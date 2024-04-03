//Revisando objetos

//Objeto literal 
const pessoa = {
    nome: 'Rawlinson',
    sobrenome: 'Rocha'
}

console.log(pessoa.nome)
console.log(pessoa['sobrenome'])

//Objeto criado com construtor
const pessoa1 = new Object()
console.log(pessoa1) // objeto vazio

pessoa1.nome = 'Maria Cecilia' // adicionando a chave nome ao objeto
pessoa1.sobrenome = 'Marcolino'
console.log(pessoa1.nome, pessoa1.sobrenome)
delete pessoa1.sobrenome //deletando sobrenome
console.log(pessoa1)

//adicionando método a pessoa1
pessoa1.falaNome = function(){
    console.log(`Oi, meu nome é ${this.nome}.`)
}

pessoa1.falaNome()


