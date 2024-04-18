//function possui um objeto que sustenta todos os argumentos, 'arguments'.
function funcao(){
  console.log(arguments[0])
}

funcao('valor', 1, 2, 3, 4, 5)

//-------------------------------------//

//exemplo de uso do objeto arguments.
//a função sem parâmetros soma os argumentos recebidos.
function somaTodosArgumentos(){
  let total = 0
  for(let argumentos of arguments){
    total += argumentos
  }
  
  console.log(total)
}

somaTodosArgumentos(1, 2, 3, 4, 5)

//setando valor padrão para um parâmetro
function soma(a = 0, b = 0){
  return console.log (a + b)
}//caso os valores não sejam definidos pelos argumentos os parâmetros assumiram o valor 0

soma(2, 2)

//caso queira que o parâmetro 'a' assuma o valor padrão deve setar o valor undefined para o argumento 'a'

//por exemplo
soma(undefined, 2)

//atribuição via desestruturação por parâmetro

//a função pode receber um objeto por parametro

function pessoa({nome, sobrenome, idade}){
  console.log(nome, sobrenome, idade)
}

//atribuindo os argumentos aos parâmetros.
//chamada da função com os argumentos associando os valores as chaves
pessoa({nome: 'Rawlinson', sobrenome: 'Rocha', idade: 28})

//atribuição via desestruturação de um array 
const frutas = ['Maça', 'Banana', 'Melancia']


function listaFrutas([fruta1, fruta2, fruta3]){
  console.log(fruta1, fruta2, fruta3)
}

listaFrutas(frutas)

//exemplo de função que realize uma conta, ela recebera um operador um acumulador e numeros

//para que o parâmetro numeros sustente todos os ultimos argumetos podemos utilizar o rest operator

function conta(operador, acumulador, ...numeros){
  //console.log(operador, acumulador, numeros)
  for(let numero of numeros){
    if(operador === '+')acumulador += numero
    if(operador === '-')acumulador -= numero
    if(operador === '/')acumulador /= numero
    if(operador === '*')acumulador *= numero

  }
  
  console.log(acumulador)
}

conta('/', 0, 20, 30, 40)

//o rest operator deve ser o ultimo parametro formal da função 

