// Definindo variáveis para armazenar informações pessoais
const nome = 'Jonh'; // Primeiro nome da pessoa
const sobrenome = 'Doe'; // Sobrenome da pessoa
const idade = 28; // Idade da pessoa
const cpf = '103.198.128 - 00'; // CPF da pessoa

// Exportando um objeto com informações de endereço
export const enderecoObj = {
    rua: 'Rua tal',
    numero: 344
};

// Definindo uma função de soma
function soma(x, y) {
    return x + y;
}

// Exportando a classe Pessoa
export default class Pessoa {
    constructor(nome, sobrenome, endereco){
        this.nome = nome; // Nome da pessoa
        this.sobrenome = sobrenome; // Sobrenome da pessoa
        this.endereco = endereco; // Endereço da pessoa
    }
}

// Exportando variáveis adicionais e renomeando uma delas
export {nome as nome2, sobrenome, idade, soma};