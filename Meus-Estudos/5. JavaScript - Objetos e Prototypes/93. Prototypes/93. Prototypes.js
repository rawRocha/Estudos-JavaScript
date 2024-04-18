/*
JavaScript é baseado e protótipos para passar 
propriedades e métodos de um objeto para outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que 
foi criado pela primeira vez, servindo de modelo ou 
molde para futuras produções.

Todos os objetos tem uma referência interna para um
 protótipo (__proto__) que vem da propriedade 
 prototype da função construtora que foi usada para 
 criá-lo. Quando tentamos acessar um membro de um 
 objeto, primeiro o motor do JS vai tentar 
 encontrar este membro no próprio objeto e depois a 
 cadeia de protótipos é usada até o topo (null) até 
 encontrar (ou não) tal membro.
*/

//Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
    
}

Pessoa.prototype.falaOi = () => 'Oi!'

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

//Instância
const p1 = new Pessoa('Rawlinson', 'Rocha')
const p2 = new Pessoa('Maria', 'Cecilia')

const data =  new Date()

console.dir(p1.falaOi() + 'Eu sou a pessoa' + ' ' + p1.nomeCompleto())
console.dir(data)

/* Usar o `prototype` em JavaScript para criar 
métodos tem várias vantagens em comparação com a 
definição direta de métodos em objetos individuais.
Aqui estão algumas razões pelas quais é geralmente 
considerado melhor usar o `prototype`:


1. **Economia de Memória**: Quando você adiciona 
métodos diretamente a cada objeto, uma cópia desse 
método é criada para cada instância do objeto. Isso 
pode consumir mais memória, especialmente se você 
estiver lidando com muitas instâncias. Em 
contraste, quando você define métodos no 
`prototype`, todas as instâncias compartilham o 
mesmo método, economizando memória.

2. **Desempenho**: Definir métodos no `prototype` 
pode melhorar o desempenho, especialmente em casos 
onde muitas instâncias do objeto são criadas. Como 
mencionado anteriormente, isso ocorre porque as 
instâncias compartilham o mesmo método no 
`prototype`, em vez de cada instância ter sua 
própria cópia.


3. **Facilidade de Manutenção**: Se você precisar 
modificar um método, fazê-lo no `prototype` 
garantirá que todas as instâncias desse objeto se 
beneficiem dessa modificação. Se você definir 
métodos diretamente em objetos individuais, terá 
que modificar cada objeto individualmente, o que 
pode ser propenso a erros e é muito menos eficiente.

4. **Herança e Encadeamento de Protótipos**: Usar o
 `prototype` facilita a implementação de herança em 
 JavaScript. Você pode definir um objeto como 
 protótipo de outro, permitindo que o segundo objeto herde propriedades e métodos do primeiro. 
 Além disso, o encadeamento de protótipos permite 
 criar uma cadeia de herança, onde um objeto pode 
 herdar propriedades e métodos de vários protótipos.

5. **Clareza e Boas Práticas**: Usar o `prototype` 
para definir métodos é considerado uma prática 
recomendada em JavaScript. Isso porque separa 
claramente a definição de métodos da criação de 
instâncias de objetos, o que torna o código mais 
organizado e legível.

Em resumo, usar o `prototype` para criar métodos em 
JavaScript oferece benefícios significativos em 
termos de desempenho, economia de memória, 
facilidade de manutenção e práticas recomendadas de
 codificação. */