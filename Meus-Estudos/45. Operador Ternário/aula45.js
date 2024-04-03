/**
 * Operador ternário
 * ? :
 * (condição) ? 'Valor para verdadeiro' : 'Valor para falso'
 * segue o exemplo:
 */

//o trecho a seguir retorna se o usuario é ou nao vip
const pontuacaoUSuario = 500

if(pontuacaoUSuario >= 1000){
    console.log('Usuário VIP')
} else {
    console.log('Usuário normal')
}

//com o operador ternario

const pontuacaoUSuario2 = 999
const nivelUsuario2 = pontuacaoUSuario2 >= 1000 ? 'Usuário VIP' : 'Usuário normal'
console.log(nivelUsuario2)

