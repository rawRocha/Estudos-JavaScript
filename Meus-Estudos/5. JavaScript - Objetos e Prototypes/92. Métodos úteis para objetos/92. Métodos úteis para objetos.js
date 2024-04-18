//Objetos são valores passados por referência 

const produto = {nome:'Caneca', preco: 1.99}
const outraCoisa = produto

//outraCoisa recebe o endereço de memória de produto, por exemplo adicionar estoque em outraCoisa adiciona em produto.
//outraCoisa e produto apontam para o mesmo endereço de memória.

outraCoisa.estoque = 5

console.log(outraCoisa)
console.log(produto)

//para espalhar o produto em um novo objeto, ...produto (spread operator)


//espalhando, sobescrevendo nome, e adicionando atributo material.
const novoObj = {
  ...produto,
  material: 'Porcelana'
}
novoObj.nome = 'Xicara'
console.log(novoObj)

//O método Object.assign() é usado para copiar os valores de todas as propriedades próprias enumeráveis de um ou mais objetos de origem para um objeto de destino. Ele retorna o objeto de destino modificado.

//Object.assign(destino, origem1, origem2, ...)

const copiaNovoObj = Object.assign({}, novoObj)
console.log(copiaNovoObj)

//O método Object.keys() é usado para retornar um array contendo os nomes das propriedades próprias enumeráveis de um objeto JavaScript.

//Aqui está a sintaxe: Object.keys(objeto)

console.log(Object.keys(copiaNovoObj))

//O método Object.freeze() é usado para tornar um objeto imutável, ou seja, impede que suas propriedades sejam adicionadas, removidas ou alteradas.

//Quando um objeto é congelado, você não pode mais alterar suas propriedades existentes ou adicionar novas propriedades a ele.Além disso, as propriedades de objetos internos também são congeladas, tornando todo o objeto e seus objetos internos imutáveis.

//Aqui está a sintaxe: Object.freeze(objeto)

//por exemplo:
const objeto = { a: 1, b: 2 };
Object.freeze(objeto);

objeto.a = 5; // Isso não terá efeito
objeto.c = 3; // Isso não terá efeito

console.log(objeto); // Saída: { a: 1, b: 2 }

//O método Object.getOwnPropertyDescriptor() é usado para obter o descritor de uma propriedade específica de um objeto. O descritor da propriedade contém informações sobre a propriedade, como seu valor, se é enumerável, configurável, gravável (writable), etc.

//Aqui está a sintaxe:
//Object.getOwnPropertyDescriptor(objeto, propriedade)

Object.freeze(copiaNovoObj)
const descriptor = Object.getOwnPropertyDescriptor(copiaNovoObj, 'nome')
console.log(descriptor)

//O método Object.entries() é usado para retornar um array contendo pares chave/valor de todas as propriedades enumeráveis de um objeto JavaScript, na mesma ordem em que um loop for...in iteraria sobre elas.

//Aqui está a sintaxe:
//Object.entries(objeto)

console.log(Object.entries(copiaNovoObj))

for(let [chave, valor] of Object.entries(copiaNovoObj)){
    console.log(chave, valor)
}