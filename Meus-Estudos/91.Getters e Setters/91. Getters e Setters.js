//defineProperty -> Getter e Setters
function Produto(nome, preco, estoque){
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        configurable: true, // configurável

        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                throw new TypeError('Bad Value!')
            }

            estoquePrivado = valor
        }
    })
}

const criaProduto = function(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            nome = valor
        }
    }
}

const p1 = new Produto('Camisa', 20, 3)
console.log(p1)
p1.estoque = 50
console.log(p1.estoque)

const p2 = criaProduto('Chocolate')
console.log(p2)
console.log(p2.nome)
p2.nome = 'Geleia'
console.log(p2.nome)