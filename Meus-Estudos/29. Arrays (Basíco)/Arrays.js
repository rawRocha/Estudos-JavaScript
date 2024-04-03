//               0       1        2
const alunos = ['joao', 'Maria', 'Luiz']

//Adiciona ou altera um indice do array
alunos[0] = 'Otavio'
alunos[alunos.length] = 'Junior'
alunos.push('luiza') //adiciona ao fim
alunos.unshift('Harry') //adiciona no começo

//Remover elementos do array
const removido = alunos.pop() // remove a o ultimo indice do array
const removido2 = alunos.shift() //remove o primeiro indice

//Fatiar o array
console.log(alunos.slice(0, 3))

//verificar se é um array
console.log(typeof alunos)
console.log(alunos instanceof Array)

console.log(alunos)
console.log(alunos[0])
console.log(alunos.length)
console.log(removido, removido2)

