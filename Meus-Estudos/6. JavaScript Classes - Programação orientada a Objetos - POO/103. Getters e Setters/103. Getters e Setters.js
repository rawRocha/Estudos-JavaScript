class Carro {
    constructor(nome) {
        this.nome = nome
        this.velocidade = 0
    }

    acelerar() {
        if(this.velocidade >= 100) return
        this.velocidade++
    }

    freiar() {
        if(this.velocidade === 0) return
        this.velocidade--
    }
}

const fusca = new Carro('Fusca')

for (let i = 0; i <= 200; i++) {
    fusca.acelerar()
}

console.log(fusca)

//Limite de velocidade foi protegido.
//Porém, a chave velocidade ainda não está protegida
//alterações diretas são possíveis.
//Por Exemplo.:
/* 
fusca.velocidade = 500
console.log(fusca)

precisamos privar a chave do nosso objeto */

/* Em JavaScript, Symbol é um tipo de dado introduzido no ECMAScript 6 (ES6) que
representa um identificador único e imutável. Cada valor Symbol retornado é
único, o que significa que dois símbolos nunca serão iguais, mesmo que tenham o
mesmo nome.
 */

const _velocidade = Symbol('velocidade') //privando a chave velocidade
const _ano = Symbol('ano') //privando a chave ano
class Carro2{
    constructor(nome) {
        this.nome = nome
        this[_velocidade] = 0
        this[_ano] = 'Set um ano VALÍDO!'
    }

    //o Set me permite acessar a chave e alterar o valor.
    set ano(valor){
        const data = new Date()
        const ano = data.getFullYear()
        if(valor > (ano + 1)) return
        this[_ano] = valor
        return this[_ano]
    }

    //Para retornar o valor de ano.
    get ano(){
        return this[_ano]
    }

    //o Get me permite acessar a chave dentro do objeto.
    get velocidade() {
        return this[_velocidade]
    }

    acelerar() {
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    freiar() {
        if(this[_velocidade] === 0) return
        this[_velocidade]--
    }    
}

const brasilia = new Carro2('Brasilia')
brasilia.velocidade = 98
brasilia.ano = 2025
//O for simula a chamada do método acelerar 100x
for (let i = 0; i <= 100; i++){
    brasilia.acelerar()
}
console.log(brasilia)
console.log(brasilia.velocidade)
console.log(brasilia.ano)

class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }    

    get nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`
    }

    set nomeCompleto(valor){
        valor = valor.split(' ')
        //retorna um array ['nome', 'sobrenome']
        this.nome = valor.shift()
        //nome recebe o primeiro valor do array
        this.sobrenome = valor.join(' ')
        //sobrenome recebe todo o restande do array como string separados por espaço
    }
}

const p1 = new Pessoa('Jonh', 'Doe')
console.log(p1.nomeCompleto)
p1.nomeCompleto = 'Joana Doe'
console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.nomeCompleto)