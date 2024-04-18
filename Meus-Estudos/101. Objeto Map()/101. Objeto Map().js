// Objeto MAP

//Observerve a lista de objetos pessoas
const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'},
]

//o problema é pegar o id e inserir como a chave de cada objeto.

//novo objeto vazio
const novasPessoas = {}


for (const {id, nome} of pessoas){
    //novasPessoas recebe id como chave
    //e valor um objeto com id e nome pra cada pessoa

    // nova chave    =    valor
    novasPessoas[id] = { id, nome}
}

console.log(novasPessoas)
/* como podemos observar a saida nao preservou a 
ordem, e typeof da chave id é uma string por padrão
em objetos. */

//objeto map pode resolver nosso problema.

/* Em JavaScript, Map é uma estrutura de dados que 
armazena pares chave-valor, permitindo que você 
associe valores a chaves específicas. A principal
diferença entre um Map e um objeto JavaScript 
padrão é que as chaves em um Map podem ser de 
qualquer tipo, enquanto em objetos JavaScript 
tradicionais, as chaves são sempre strings ou 
símbolos. */

const novasPessoas2 = new Map()
for (const pessoa of pessoas){
    //para cada pessoa criar chave id
    const { id } = pessoa
    // setando /     ( chave, {valor}  )
    novasPessoas2.set(id, { ...pessoa })
}

console.log(novasPessoas2)