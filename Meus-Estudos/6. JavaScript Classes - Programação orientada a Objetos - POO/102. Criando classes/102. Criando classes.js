/* Classes em JavaScript são uma forma de criar objetos com comportamentos e 
propriedades específicas, seguindo o paradigma de programação orientada a objetos
(OOP). Elas foram introduzidas no ECMAScript 6 (também conhecido como ES6) e 
oferecem uma sintaxe mais amigável para trabalhar com objetos e herança em 
comparação com as técnicas anteriores baseadas em protótipos. */

//Ex de classe:

class Pessoa{
    /* constructor é um método especial que é chamado automaticamente quando você
     instancia um objeto dessa classe. Ele é usado para inicializar as
     propriedades do objeto. */
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    //Método da Classe Pessoa, esse método existe no prototype da classe Pessoa. 
    falar (){
        console.log(`${this.nome}, está falando!`)
    }
}

const p1 = new Pessoa('Jhon', 'Doe')
console.dir(p1)

//Mesmo Objeto definido com o constructor function.

function Pessoa1(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

//Crindo o método falar e setando no prototype de Pessoa1
Pessoa1.prototype.falar = function(){
    console.log(`${this.nome}, está falando`)
}

const p2 = new Pessoa1('Joana', 'Doe')
console.dir(p2)

