/*
PRINTAR
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de ----
Luís Otávionasceu em ----
*/

const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 30
const peso = 84
const altura = 1.8
let imc = peso / (altura*altura)
let dat = new Date
const anoAtual = dat.getFullYear() 
let anoNasc = anoAtual - idade
console.log(`${nome + ' ' + sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNasc}`)

let name = 'luiz'
name = 'luz'
console.log(name)
