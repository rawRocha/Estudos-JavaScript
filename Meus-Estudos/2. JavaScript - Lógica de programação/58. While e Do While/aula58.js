//While e Do While
const nome = 'Rawlinson'
let controle = 0;

while(controle < nome.length){
    console.log(nome[controle])
    controle++
}

console.log('Segue a vida...')

function random(min, max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50
let rand = random(min, max)

while(rand !== 10){
    rand = random(min, max)
    console.log(rand)
}

console.log('###############');

do{
    rand = random(min, max)
    console.log(rand)
} while(rand !== 10);