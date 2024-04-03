// Retorne a soma do dobro de todos os pares
// -> Filtras Pares
// -> Dobrar os valores
// ->Reduzir (somar tudo)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

//filtrando os pares
const numerosPares = numeros.filter(function (valor) {
    if (valor % 2 === 0) return valor
})
console.log(numerosPares)

//dobrando os valores
const dobraValores = numerosPares.map(function (valor) {
    return valor * 2
})
console.log(dobraValores)

//somando todos os valores
const somaValores = dobraValores.reduce(function (ac, valor) {
    return ac += valor
})
console.log(somaValores)

const filtrandoDobrandoReduzindoImpares = numeros.filter(valor => valor % 2 !== 0).map(valor => valor * 2).reduce((ac, valor) => ac += valor)

console.log(filtrandoDobrandoReduzindoImpares)

let total = 0

numeros.forEach(valor => {
    total += valor
})
console.log(total)