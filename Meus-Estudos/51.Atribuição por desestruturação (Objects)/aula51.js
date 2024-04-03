const pessoa = {
    nome: 'Rawlinson',
    sobrenome: 'Junior',
    idade: 28,
    endereco: {
        rua:'Av Brasil',
        numero: 320
    }
};


//atribuição via desestruturação
const {nome, sobrenome,
endereco:{rua: r = 1234, numero}} = pessoa;

console.log(nome, sobrenome, r, numero)