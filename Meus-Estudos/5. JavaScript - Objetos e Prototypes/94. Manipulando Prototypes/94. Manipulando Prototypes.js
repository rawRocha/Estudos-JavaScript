const objA = {
    chaveA: 'A'
    //contem __proto__
    //objA.__proto__ === Object.protoype
    //contem o prototype de seua função construtora
    //sua função contrutora é Object
}

function ObjB() {
    this.chaveB = 'B'
}

const objB = new ObjB()
//instancia do objB / objB.__proto__ === ObjB.prototype

Object.setPrototypeOf(objA, objB)

console.dir(objA.chaveB)
console.dir(objB)

// !Não é recomendado utilizar a propriedade __proto__

function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function (percentual) {
    return this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function (percentual) {
    return this.preco = this.preco + (this.preco * percentual / 100)
}
const camisa = new Produto('Camisa', 50)
camisa.aumento(100)
console.log(camisa)

//camisa contem o prototype de sua função construtura, que contem os métodos desconto e aumento

const xicara = {
    nome: 'Xicara',
    preco: 5.5
}

//xicara é um objeto literal, nao contem Produto.prototype
//logo, aumento e desconto nao funcionam em xicara

//adicionando o Produto.prototype ao obj xicara
Object.setPrototypeOf(xicara, Produto.prototype)

console.log(xicara.aumento(100))

//exemplo relogio:

const relogio = Object.create(Produto.prototype, {
    nome: {
        writable: true,
        configurable:true,
        enumerable: true,
        value: 'Relogio'
    },

    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 150
    }
})
relogio.aumento(10)
console.log(relogio)

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
}
//linkando o prototype de produto ao prototype de camiseta
Object.setPrototypeOf(Camiseta.prototype, Produto.prototype)

const camiseta = new Camiseta('Regata', 49)
camiseta.aumento(10)
console.dir(camiseta)

//criando obj caneca
function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoque
        },
        set: function(valor){
            if (typeof valor !== 'number') return
            estoque = valor
        }
    })
}
// setando prototype de produtos
Object.setPrototypeOf(Caneca.prototype, Produto.prototype)

const caneca = new Caneca('Caneca', 5.99, 'Plastico')
caneca.estoque = 5
console.dir(caneca)
