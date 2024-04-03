const nome = 'Rawlinson'

function falaNome(){
    console.log(nome)
}
falaNome()

//a function procura a variavel nome dentro de sua função 
//caso nao encontre ele busca a variavel dentro de seu pai
//até chegar ao escopo global, caso nao exista a variavel 
//um erro será emitido

//Por exemplo:
function usaFalaNome(){
    falaNome()
}
usaFalaNome()

//a função usa fala nome chama a função fala nome, que busca
//a constante nome, em seu escopo, nao encontra e busca no
//escopo global

//closures é a habilidade da função em acessar seu escopo léxico
function retornFunção(sobrenome){
    return function(){
        return sobrenome
    }
}

const funcao = retornFunção('Rocha')
const funcao2 = retornFunção('Santos')
console.log(funcao())
console.log(funcao2())

