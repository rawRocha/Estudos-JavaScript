const data = new Date() //Date() é uma função construtora, sempre 
//começa com uma letra maiuscula
//pra usar uma função construtora usamos o new antes

//obs: o javaScript conta as horas por milissegundos
//a data atual é baseada na quantidade de milissegundos 
//desde a época unix
//por exemplo um dia:
const umDia = 60 * 60 * 24 * 1000 //um dia em milesimos de segundos
console.log(umDia)
const tresHoras = 60 * 60 * 3 * 1000

const data0 = new Date(0 + tresHoras)// 01/01/1970 Timestamp unix ou época unix
console.log(data.toString())
console.log(data0.toString())

//para inserir uma data
const data1 = new Date('2024-01-31 19:43:59')
console.log('Dia', data1.getDate())
console.log('Mês', data1.getMonth()) //mes começa do zero
console.log('Ano', data1.getFullYear())
console.log('Hora', data1.getHours())
console.log('Minutos', data1.getMinutes())
console.log('Segundos', data1.getSeconds())
console.log('Ms', data1.getMilliseconds())
console.log('Dia semana', data1.getDay()) //semana começa do zero
console.log(data1.toString())
console.log('Milesimos de sugundos desde o Timestamp até a data atual'
, Date.now())

console.log(data1)

function zeroAEsquerda(num){
    return num < 10 ? `0${num}` : num
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate())
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const minuto = zeroAEsquerda(data.getMinutes())
    const segundos = zeroAEsquerda(data.getSeconds())

    return `${dia}/${mes}/${ano}  ${hora}:${minuto}:${segundos}`
    //obs: javascript nao retorna o zero a esquerda caso o numero 
    //seja menor que 10, podemos fazer uma função para corrigir.
}

const data2 = new Date()
const dataBrasil = formataData(data2)
console.log(dataBrasil)