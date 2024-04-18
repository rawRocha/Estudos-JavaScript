//Factory Functions + prototype

/* Uma factory function, em programação, é uma
função que retorna um novo objeto ou instância de 
algum tipo. Em vez de usar construtores 
diretamente, como em muitas linguagens orientadas 
a objetos, você chama uma função que cria e 
retorna um novo objeto para você.

Isso é útil em situações onde você precisa criar 
múltiplas instâncias de um objeto com configurações 
similares, mas não quer repetir o código de 
construção toda vez. A factory function pode 
encapsular essa lógica de criação e fornecer uma 
interface mais simples para criar novos objetos. */

//Por Exemplo.: 
//Factory function com seus atributos e métodos.
function criaPessoa(nome, sobrenome) {
    return {
        //Atributos
        nome,
        sobrenome,

        //Métodos
        comer() {
            console.log(`${this.nome} está comendo.`)
        }
    }
}



const p1 = criaPessoa('Jhon', 'Doe')
p1.comer()
console.log(p1)

//Refatorando criaPessoa, adicionando métodos ao prototype de criaPessoa.

//método beber é independente
const beber = {
    beber() {
        console.log(`${this.nome}, está bebendo.`)
    }
}

function criaPessoa2(nome, sobrenome) {
    //criando um objeto pessoaProtoype,
    //que contém os metódos.
    const pessoaProtoype2 = {
        comer() {
            console.log(`${this.nome} ${this.sobrenome}, está comendo.`)
        },

        falar() {
            console.log(`${this.nome} ${this.sobrenome}, está falando.`)
        },

        dormir() {
            console.log(`${this.nome} ${this.sobrenome}, está dormindo.`)
        },

        //espalhando o método beber em pessoaPrototype
        ...beber
    }

    //retornando objeto com pessoaPrototype2
    return Object.create(pessoaProtoype2, {
        //pode definir diretamente a propriedade ao atributo.
        nome: { value: nome, enumerable: true },
        sobrenome: { value: sobrenome, enumerable: true },
    })
}

const p2 = criaPessoa2('Joana', 'Does')
console.log(p2)

//outro exemplo.:

//criando métodos sorrir, cantar
const sorrir = {
    sorrir() {
        console.log(`${this.nome}, está sorrindo`)
    }
}

const cantar = {
    cantar() {
        console.log(`${this.nome}, está cantando.`)
    }
}

//criando o prototype para pessoa3
const pessoaPrototype3 = Object.assign({}, sorrir, cantar)

//função fabrica criaPessoa3
function criaPessoa3(nome, sobrenome) {
    return Object.create(pessoaPrototype3, {
        nome: { value: nome, enumerable: true },
        sobrenome: { value: sobrenome, enumerable: true}
    })
}

const p3 = criaPessoa3('Jonh3', 'Do')
console.log(p3)
