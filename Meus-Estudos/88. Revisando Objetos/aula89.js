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

//adicionando idade a pessoa1
pessoa1.idade = 04

//adicionando metodo getAnoDeNascimento
pessoa1.getAnoDeNascimento = function(){
    const now = new Date()
    return now.getFullYear() - this.idade
}

console.log(`${pessoa1.nome} tem ${pessoa1.idade} anos, nasceu em 
${pessoa1.getAnoDeNascimento()}.`)

//iterando sobre chaves de pessoa1
for (let chave in pessoa1){
    console.log(chave)
}

//iterando sobre valores de pessoa1
for (let valor in pessoa1){
    console.log(pessoa1[valor])
}

//Factory function (padrão de projeto)
/*
Função Fábrica:
Uma função fábrica é essencialmente um gerador de objetos. Em JavaScript, qualquer função pode retornar um objeto.
Quando uma função não é uma classe ou um construtor, ela é considerada uma função fábrica.
Em outras palavras, a função fábrica cria e retorna objetos sem a necessidade do operador new.
*/
const criaPessoa = function(nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

const pessoaFactory = criaPessoa('Lucas Gabriel', 'Marcolino', 16)
console.log(pessoaFactory)
console.log(pessoaFactory.nomeCompleto)

//Constructor function (padrão de projeto)

/* Função Construtora:
Uma função construtora é uma função que pode ser executada diretamente ou utilizada para instanciar um objeto usando a palavra reservada new.
Quando usamos o new, o this dentro da função se refere ao objeto criado.
Funções construtoras são frequentemente usadas para criar múltiplas instâncias de objetos no mesmo contexto. */

function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`
    }
}

const pessoaConstruida = new Pessoa('Fulano', 'De Tal')
console.log(pessoaConstruida)

pessoaConstruida.nome = 'Outra Coisa'

//obs: pessoaConstruida.nome está alterando o valor da chave no mesmo endereço de memória, pessoaConstruida.ENDERECOMEMORIA = {nome: 'Outra Coisa'}, para evitar a alteração do valor da chave podemos travar o this,
//Object.freeze(this)

console.log(pessoaConstruida.nomeCompleto())