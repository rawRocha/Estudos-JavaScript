/* O método Object.defineProperty() em JavaScript é usado para definir
 novas propriedades ou modificar propriedades existentes diretamente em
  UM objeto. Ele oferece controle detalhado sobre as propriedades do
   objeto, permitindo especificar descritores de propriedade. */

//Por exemplo:

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    //alterando as propriedades de estoque com object.defineProperty()
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave ou não
        value: estoque, // set valor
        writable: false, // pode alterar ou não
        configurable: true //configuravel ou não
    })
}

const p1 = new Produto('Camisa', 20, 3)
p1.estoque = 5000 // não altera o valor de estoque, estoque está como writable: false.
console.log(p1)

/* O método Object.defineProperties() em JavaScript é utilizado para 
definir novas propriedades ou modificar propriedades existentes em um 
objeto. Ele retorna o próprio objeto após a operação. */

const obj = {};

Object.defineProperties(obj, {
    property1: {
        enumerable: true,
        value: true,
        writable: true,
    },
    property2: {
        enumerable: true,
        value: "Hello",
        writable: false,
    },
    // Adicione mais propriedades conforme necessário
});

// Agora o objeto 'obj' possui as propriedades definidas

console.log(obj)

/* Descritores de Dados:
configurable: Define se o tipo deste descritor de propriedade pode ser 
modificado e se a propriedade pode ser apagada do objeto correspondente. 
O valor padrão é false.
enumerable: Define se a propriedade aparece durante a enumeração das
 propriedades do objeto correspondente. O valor padrão é false.
value: O valor associado à propriedade. Pode ser qualquer valor válido 
em JavaScript (número, objeto, função etc.). O valor padrão é undefined.
writable: Define se o valor associado à propriedade pode ser modificado 
com o operador de atribuição (=). O valor padrão é false. */

//para retornar as chaves do obj em um array usamos o object.keys

console.log(Object.keys(p1))
console.log(Object.keys(obj))