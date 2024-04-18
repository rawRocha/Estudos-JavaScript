/* CRÉDITOS ao professor Luiz Otávio Miranda
Instrutor / Desenvolvedor de Softwares 
Curso Udemy - Javascript e TypeScript - front-end e
 back-end (Full Stack) - Node, Express, noSQL, 
 React, hooks, Redux, Design Patterns
*/

//POLIMORFISMO

/* O polimorfismo é um conceito importante em 
programação orientada a objetos (POO). Ele se 
refere à capacidade de objetos de classes 
diferentes responderem ao mesmo método de maneira
 distinta. Em outras palavras, é a habilidade de um
  método ser chamado em diferentes objetos e 
  produzir comportamentos específicos para cada um 
  deles. */

//Conta é nossa Superclasse
function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(
            `Saque RECUSADO! | ` +
            `Ag/C.: ${this.agencia} / ${this.conta} | ` +
            `Saldo: R$${this.saldo.toFixed(2)} | ` +
            `Impossivel Sacar ${valor.toFixed(2)}R$`
        )
        return
    }
    this.saldo -= valor
    this.mostrarSaldo()
}

Conta.prototype.mostrarSaldo = function () {
    console.log(
        `Ag/C.: ${this.agencia} / ${this.conta} | ` +
        `Saldo: R$${this.saldo.toFixed(2)}`
    )
}

Conta.prototype.depositar = function (valor) {
    this.saldo += valor
    this.mostrarSaldo()
}

const conta1 = new Conta(11, 22, 0)
conta1.depositar(50)
conta1.sacar(100)

console.log()

//CC (Conta-Corrente) é filha de Conta
/* CC herda atributos de conta com Conta.call() + 
limite que pertence exclusivamente a CC. */
function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

/* CC.prototype recebe prototype de Conta, herdando os métodos. */
Object.setPrototypeOf(CC.prototype, Conta.prototype)

//Sobescrevendo o método sacar de conta para conta-corrente.

/* Polimorfismo de sobrescrita (Override): Esse
 tipo ocorre quando uma subclasse implementa um 
 método que já existe em sua superclasse, mas com 
 uma implementação diferente. Assim, quando um 
 objeto da subclasse chama esse método, a versão
  específica da subclasse é executada. Isso é 
  fundamental para a especialização de 
  comportamento em diferentes partes de uma 
  hierarquia de classes. */

CC.prototype.sacar = function (valor) {
    if (this.limite < valor) {
        console.log(
            `Saque RECUSADO! | ` +
            `Ag/C.: ${this.agencia} / ${this.conta} | ` +
            `Saldo/Limite: R$${this.saldo.toFixed(2)}/R$${this.limite.toFixed(2)} | ` +
            `Impossivel Sacar R$${valor.toFixed(2)} LIMITE EXCEDIDO!`
        )
        return
    }
    this.saldo -= valor
    this.mostrarSaldo()
}

//instanciando objeto de cc1 de CC
const cc1 = new CC(22, 11, 0, 100)
cc1.depositar(80)
cc1.sacar(80)
cc1.sacar(200)

console.log()

//CP (Conta-Poupança) é filha de Conta
//CP herda atributos de conta com Conta.call()
function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

//CP.prototype recebe prototype de Conta, herdando os métodos.
Object.setPrototypeOf(CP.prototype, Conta.prototype)

const cp1 = new CP(33, 44, 100)
cp1.sacar(100)



