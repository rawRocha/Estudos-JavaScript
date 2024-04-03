let a = 'A';
let b = 'B';
let c = 'C';

const letras = [b, c, a];
[a, b, c] = letras;

console.log(a, b, c);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [um, dois, , quatro, ...resto] = numeros;
console.log(um, dois, quatro, resto)

const listaDeNumeros = [[1, 2, 3], [4, 5, 6]];
const numeroSeis = listaDeNumeros[1][2]
console.log(numeroSeis)

//ou por desestruturação

const [,[, numeroCinco]] = listaDeNumeros
console.log(numeroCinco)

//para atribuir as listas individualmente por desestruturação
const [lista1, lista2] = listaDeNumeros
console.log(lista2)

//pegar o segundo elemento da lista dois 

const segundoElemen = lista2[1]
console.log(segundoElemen)

//as variaveis numeroCinco e segundoElemen apontam para 
//o mesmo endereço na memómria.