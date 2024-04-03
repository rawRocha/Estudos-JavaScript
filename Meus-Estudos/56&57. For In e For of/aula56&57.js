const frutas = ['Pera', 'Maça', 'Uva'];
const pessoas = {
    nome: 'Rawlinson',
    sobrenome: 'Rocha',
    idade: 28
};


//Retorna os Indices do Array
for (let indice in frutas){
    console.log(frutas[indice])
}

//em objetos retorna as chaves
for (let chave in pessoas){
    console.log(chave, pessoas[chave])
}

//For Of

const nome = ['Rawlinson', 'Junior']

//for of retorna o valor de um objeto iteravel
for (let valor of nome){
    console.log(valor)
}

nome.forEach(function(el) {
    console.log(el)
})

//For classico - Geralmente com iteraveis (Arrays ou strings)
//For in - Retorna o ídice ou chave (strings, Array ou objetos)
//for of - Retorna o valor em si (iteráveis, arrays ou strings)



