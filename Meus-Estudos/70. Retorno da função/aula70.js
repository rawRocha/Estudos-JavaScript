// return, retorna um valor, e encerra a função

//ex:
function soma(a, b){
    return console.log(a + b)
}

soma(2, 2)

//existem funções que nao retorna nada porem é útil
//ex:
/*
document.addEventListener('click', function(){
    document.body.style.backgroundColor = 'red'
})
*/

//a função nao retorna nada porem altera a cor
//de fundo da pagina.

//exemplo de função que cria um objeto e retorna as chaves.
function criaPessoa(nome, sobrenome){
    return {nome, sobrenome}
}

const pessoa = criaPessoa('Rawlinson', 'Rocha')
console.log(pessoa)

//exemplo de funções aninhadas
//a seguinte função fala uma frase recebe o começo 
//por parametro, em seu corpo chama a função 
//fala resto que retorna o resto

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }
    return falaResto
}

const fala = falaFrase('Olá')
const resto = fala('mundo!')
console.log(resto)

//outro exemplo:
function criaMultiplicador(multiplicador){
    return function(n){
        return n * multiplicador
    }
}

const multPorDois = criaMultiplicador(2);

console.log(multPorDois(5))