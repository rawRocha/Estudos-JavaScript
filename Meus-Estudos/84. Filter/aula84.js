//filter
//retorne os numeros maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27]

//--------- Minha solução antes de conhecer o Filter---------
const maiorQueDez = []

for (let numero of numeros ){
    if (numero > 10) maiorQueDez.push(numero) 
}

console.log(maiorQueDez)

//-------------Solução com o método Filter---------------
//retornando numeros filtrados com filter
//variavel numFiltrados recebe uma função que retorna os numeros maiores
//que dez, numeros filtrados em uma linha!!!!!!
const numFiltrados = numeros.filter(valor => valor > 10)

console.log(numFiltrados)

const arrayNumeros = numeros.filter((valor, indice, array) => {
    console.log(valor, indice)
    return array
})

console.log(arrayNumeros)

//Retorneas pessoas que tem o nome com 5 letras ou mais 
//Retorne as pessoas com mais de 50 anos 
//Retorne as pessoas cujo nome termina com a 
const pessoas = [
    {nome:'Luiz', idade: 62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade: 55},
    {nome:'Letícia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47}
]

const nomesGrandes = pessoas.filter(obj => obj.nome.length > 5)
const maisDeCinquenta = pessoas.filter(obj => obj.idade > 50)
const nomesQueTerminamComA = pessoas.filter(obj => obj.nome.endsWith('a'))
console.log(nomesGrandes)
console.log(maisDeCinquenta)
console.log(nomesQueTerminamComA)

//map 

//função gera id aleatório
const rand = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
} 
const numeroAleatório = rand(1, 50)

//para cada elemento
//retorne apenas uma string com o nome da pessoa
//remova apenas a chave nome do obj
//adicione uma chave id em cada objeto
const nomePessoa = pessoas.map(obj => obj.nome)
const removeNome = pessoas.map(obj => ({idade: obj.idade}))
const adicionaID = pessoas.map((obj) => {
    const newObj = {...obj}
    newObj.id = rand(1000, 9999)
    return newObj
})

console.log(nomePessoa)
console.log(removeNome)
console.log(adicionaID)
console.log(pessoas)
