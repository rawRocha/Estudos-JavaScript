//crinado uma função

function saudacao(nome){
    //corpo da função
    //console.log(`Bom dia ${nome}!`)
    return `Bom dia ${nome}!`
}

saudacao('Junior') //chamada pra função saudacao()
const variavel = saudacao('Luiz')
console.log(variavel)

function soma(x = 1, y = 1){
    const resultado = x + y
    return resultado
}

console.log(soma(2, 2))
console.log(soma())
const resultado = soma(4, 4)
console.log(resultado)

const raiz = function (n){
    return n ** 0.5
}

console.log(raiz(9))

//arrow function
const raiz1 = (n) => n ** 0.5

console.log(raiz1(16))