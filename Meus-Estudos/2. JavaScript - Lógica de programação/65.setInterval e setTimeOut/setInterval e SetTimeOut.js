
//mostra a hora atual
function mostraHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

console.log(mostraHora())

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)

setTimeout(() => {
    clearInterval(timer)
}, 5000);