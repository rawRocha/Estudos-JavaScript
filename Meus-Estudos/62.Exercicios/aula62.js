//Escreva uma função que recebe um número e 
//retorne o seguinte:
//Numero divisível por 3 = Fizz
//Número é divisivél por 5 = Buzz
//Número é divisivel por 3 e 5 = FizzBuzz
//Número não é divisivél por 3 e 5 = Retorna o próprio número
//Checar se o número é realmente um número 

const FizzBuzz = (x) => {
    if(typeof x !== 'number') return 'Não é um Número'
    if(x % 3 === 0 && x % 5 === 0) return 'FizzBuzz'
    if(x % 3 === 1 || x % 5 === 1) return x 
    return x % 3 === 0 ? 'Fizz' : 'Buzz'
}

for (let i = 0; i <= 100; i++){
    console.log(i, FizzBuzz(i))
}