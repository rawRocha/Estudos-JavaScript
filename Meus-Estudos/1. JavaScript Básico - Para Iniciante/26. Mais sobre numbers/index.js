let num1 = 0.7 // number
let num2 = 0.1 //number

num1 += num2 //0.8
num1 += num2 //0.9
num1 += num2 //1.0
num1 += num2

num1 = Number(num1.toFixed(2)) // resolve o problema de imprecisão, JavaScript segue o padrão IEEE 754-2008 

console.log(`Valor de num1: ${num1}, Valor de num2: ${num2}`)
console.log(`Soma de num1 e num2: ${num1 + num2}`)
console.log(`Convertendo temporariamente num1 para string, e concatenando com num2 -> ${num1.toString() + num2}`)
// num1 = num1.toString() -> essa linha converte permanentemente um number toString.
//console.log(num1.toString(16)) -> Também podemos utilizar o ToString para converter para binario, decimal ou hexadecimal...
console.log(`Fixando o num1 em duas casas decimais: ${num1.toFixed(2)}`)
//console.log(typeof num1)
console.log(`O num1 é um inteiro? ${Number.isInteger(num1)}`) //retorna true ou false
console.log(`O num1 é finito? ${Number.isFinite(num1)}`) //retorna true ou false
console.log(`O num1 é um NaN? ${Number.isNaN(num1)}`) //retorn true ou false

