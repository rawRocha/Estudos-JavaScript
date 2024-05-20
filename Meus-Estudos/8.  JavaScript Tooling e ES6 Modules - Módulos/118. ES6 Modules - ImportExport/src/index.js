// Importando todo o módulo1 e armazenando-o em um objeto chamado meuModulo
import * as meuModulo from './modulo1';

// Importando a exportação padrão do módulo1 e atribuindo-a à variável padrao
import padrao from './modulo1';

// Importando exportações específicas do módulo1
import { nome2, sobrenome, idade, soma, enderecoObj } from './modulo1';

// Definindo uma variável local
const nome = 'Joana';

// Imprimindo no console informações pessoais
console.log(nome, nome2, sobrenome, idade);

// Imprimindo a soma de dois números
console.log(soma(10, 5));

// Imprimindo informações de endereço
console.log(enderecoObj);

// Imprimindo todo o módulo1
console.log(meuModulo);

// Criando uma nova instância da classe Pessoa utilizando a exportação padrão do módulo1
const pessoa = new padrao(nome2, sobrenome, enderecoObj);
console.log(pessoa);