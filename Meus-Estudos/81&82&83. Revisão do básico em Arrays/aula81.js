//exemplo de array criado com função construtora
//const nomes = new Array('Maria', 'Joao', 'Jose')

const frutas = ['Maça', 'Melão', 'Abacate', 'Uva', 'Morango']
const novo = [...frutas]
let removidos


//Revisando o básico de arrays
console.log(frutas)

//alterando o segundo indice e deletando o segundo 
//ITEM do segundo indice.
frutas[2] = 'Abacaxi'
console.log(frutas)
delete frutas[2]
console.log(frutas)
console.log(novo)

//se uma variavel receber um array, 
//este está sendo passado por referencia por exemplo
//const novo = frutas ---->> novo recebe o endereço de frutas
//significa que frutas e novo compartilham do mesmo valor e endereço
//logo qualquer alteração em novo, é refletida em frutas
//e vice-versa.
//para contornar e termos todos os valores de um array em um novo array
//usamos o spread operator por exemplo [...frutas]

//pegando o tamanho do array com o atributo lenght
console.log(frutas.length)

//remover o ultimo elemento do array com pop
removidos = frutas.pop()
console.log(frutas)
console.log(removidos)


//remover o primeiro atributo com shift, desloca todos os elementos -1
removidos = frutas.shift()
console.log(frutas)
console.log(removidos)

//adicionando um elemento ao final do array com push
//ao indice vazio adicionado graviola
frutas.push('Maçã')
frutas.push('Abacaxi')
frutas[1] = 'Graviola'
console.log(frutas)

//adicionando um elemento ao inicio do array com unshift
frutas.unshift('Tomate')
console.log(frutas)

//fatiando o array com slice, de primeiro indice ao penultimo indice
//(-1 tira um do final)
const fatiado = frutas.slice(1, -1)
console.log(fatiado)

//jogar uma string num array
//por exemplo nome
const nome = 'Rawlinson Rocha Santos Júnior'
console.log(nome)
const nomes = nome.split(' ')
console.log(nomes)

// devolvendo nomes para string
const novoNome = nomes.join(' ')
console.log(novoNome)

//concatenando arrays
const a1 = [1,2,3]
const a2 = [4,5,6]

//concatenado a1 e a2 e adicionando elementos
const a3 = a1.concat(a2, [7,8,9], 'Rawlinson')
console.log(a3)

//também podemos usar o spread operator para concatenar
const a4 = [...a1, ...a2, ...[7,8,9], 'Rawlinson']
console.log(a4)

//método splice, adciona e remove elementos em qualquer parte do array
//a partir dos indices
//removendo rawlinson de a4, rawlinson está no ultimo indice ou -1
//posso adicionar outro nome no lugar de rawlinson colocando um terceiro 
//parametro
//a4 ira conter maria e removidos tera 'rawlinson'
//metodo splice (sintaxe) -> array.splice(indice, delete, elem1, elem2)
const removido = a4.splice(-1, 1, 'Maria')
console.log(a4, removido)


