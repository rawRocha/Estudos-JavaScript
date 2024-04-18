/*
Primitivos (imutáveis) - string, number,
 boolean, undefined, null (bigint, symbol)

 Referência (mutável) - array, object, function
*/

// valores primitivos imutáveis
let nome = 'Junior'
nome[0] = 'R'
console.log(nome[0])

let a = 'A'
let b = a
console.log(a, b)

a = 'Outra coisa'
console.log(a, b)

//valores mutaveis por referência
let c = [1, 2, 3] //object array
let d = c // b aponta para o endereço de memoria de a 

console.log(c, d)

c.push(4)
console.log(c, d)

d.pop()
console.log(c, d)

// observe que c e d referenciam o mesmo valor apontam para um mesmo endereço
// para fazer uma copia de c em d fazemos:

d = [...c]
d.push(4) // teste
console.log(c, d)

//observando objetos
const pessoa = {
    nome: 'Rawlinson',
    sobrenome: 'junior'
}

//passando objeto pessoa para pessoa2
const pessoa2 = pessoa

pessoa2.nome = 'Jose' //atributos dos objetos alterados
console.log(pessoa, pessoa2)

//criando uma acopia do objeto pessoa para pessoa3

const pessoa3 = {...pessoa}
pessoa3.nome = 'Cecilia'
pessoa3.sobrenome = 'Marcolino'
console.log(pessoa, pessoa2, pessoa3)




