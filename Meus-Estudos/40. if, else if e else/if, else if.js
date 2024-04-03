/**
 * Condições 
 * Bom dia de 0 a 12
 * Boa tarde de 12 as 18
 * boa noite de 18 as 0
 * 
 * NOTAS: 
 * If pode ser usado sozinho
 * Sempre que utilizo a palavra else, preciso de um if antes
 * Eu posso ter vários Else If na checagem
 * Podemos usar condições sem else if, utilizando apenas o if e else
 */

const agora = new Date()
const hora = agora.getHours()

console.log(hora)

if (hora >= 0 && hora <= 11){
    console.log(`Bom Dia! são ${hora} horas.`)
} else if (hora >= 12 && hora <= 17) {
    console.log(`Boa Tarde! agora são ${hora} horas.`)
} else if (hora >= 18 && hora <= 23) {
    console.log(`Boa Noite! agora são ${hora} horas.`)
}

