const relogio = document.querySelector('.relogio')
const btnIniciar = document.querySelector('.iniciar')
const btnPausar = document.querySelector('.pausar')
const btnZerar = document.querySelector('.zerar')

let segundos = 0
let timer;


//função para mostrar hora
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'gmt'
    })
}

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++
        relogio.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
}

btnIniciar.addEventListener('click', function(event){
    relogio.classList.remove('pausado')
    clearInterval(timer)
    iniciaRelogio()
})

btnPausar.addEventListener('click', function(event){
    clearInterval(timer)
    relogio.classList.add('pausado')
})

btnZerar.addEventListener('click', function (event) {
    relogio.classList.remove('pausado')
    clearInterval(timer)
    segundos = 0
    relogio.innerHTML = criaHoraDosSegundos(segundos)
})

//console.log(criaHoraDosSegundos(10))

//Podemos selecionar um só qualquer elemento da pagina ao clicar

document.addEventListener('click', function(e){
    const el = e.target

    console.log(el)
    
    //assim podemos adicionar um evento a um elemento
    if(el.classList.contains('zerar')){
        alert('voce clicou em zerar')
        //posso aqui, colocar o clearInterval e zerar a variavel
        //dispensando o evento da linha 37
        //e dispensando a seleção da linha 4
    }
})