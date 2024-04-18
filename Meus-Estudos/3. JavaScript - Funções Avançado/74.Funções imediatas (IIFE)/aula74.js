//IIFE - Immediately invoked function expression
//evita que a função toque o escopo global
//exemplo de função invocada imediatamente:

(function(idade, peso, altura){
    //Corpo da função
    const sobrenome = 'Rocha'
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }

    function falaNome(){
        console.log(criaNome('Rawlinson'), idade, peso, altura)
    }

    falaNome()
})(28, 75, 1.73);

const nome = 'Rawlinson'
console.log(nome)