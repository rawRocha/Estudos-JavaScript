//TIPOS DE DADOS PRIMITIVOS STRINGS, NUMBER, UNDEFINED, NULL, BOOLEAN
//STRINGS
const nome = 'Jr'
const nome1 = "Jr"
const nome2 = `Jr`

//NUMBER
const num1 = 10
const num2 = 10.25
console.log('A variavel num1 e num2 possui o tipo e valor: ' + typeof num1, num1 + ', ' + typeof num2, num2)
//console.log('E os valores: ' + num1 + ', ' + num2 + '. Respectivamente')

//EXEMPLO DE UNDEFINED
let aluno // undefined = não aponta para local na memória.
let aluno1 = null
console.log(`A variável aluno1 posusi o tipo: ${typeof aluno1}`)
console.log('A variavél aluno possui o tipo: ' + typeof(aluno))

//BOOLEAN 
let aprovado = false
    if(aprovado == true){
        console.log(`Parabéns APROVADO.`)
    } else if(aprovado == false){
        console.log(`Infelizmente, REPROVADO.`)
    }