console.log('Olá "Mundo"')
console.log("Olá 'Mundo'")
console.log(`"Olá" 'Mundo'`)

//Exercício 
//Exibir - Meu nome é "NOME". Estou aprendendo Javascript às 10 da manhã.

var nome = 'Rawlinson'
var now = new Date
var hora = now.getHours()
if(hora < 12){
    var turno = 'Manhã'
    console.log(`Meu nome é "${nome}". Estou aprendendo JavaScript às ${hora}hrs da ${turno}.`)
}else if(hora >= 12 && hora < 18){
    var turno = 'Tarde'
    console.log(`Meu nome é "${nome}". Estou aprendendo JavaScript às ${hora}hrs da ${turno}.`)
}else {
    var turno = 'Noite'
    console.log(`Meu nome é "${nome}". Estou aprendendo JavaScript às ${hora}hrs da ${turno}.`)
}