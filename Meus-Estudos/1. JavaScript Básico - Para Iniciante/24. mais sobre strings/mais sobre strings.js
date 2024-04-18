let msg = "Olá mundo"

console.log(msg.concat(', bom dia!'))
//saida - Olá mundo, bom dia!
console.log(msg.charAt(4))
//saida - elemento do indice 4 é -> m (charAt encontra o elemento em um determinado indice.)
console.log(msg.indexOf('mundo'))
//saida - o elemento mundo inicia no indice -> 4 (indeOf() encontra o indice do elemento.)
console.log(msg.lastIndexOf('mundo'))
//saida - 4 (lastIndexOf() inicia a busca pelo indice a partir do ultimo elemento)
console.log(msg.match(/[a-z]/g))
//retorna por meio da expressão regular a-z todas as letras minusculas.
console.log(msg.search(/o/))
//retorna por meio da expressão regular a posição da letra 'o'.
console.log(msg.replace(/Olá/, 'Oi'))
// retorna por meio da expressão regular, a substituição do trecho 'Olá' por 'Oi'
console.log(msg.length)
// O atributo Length retorna a quantidade de caracteres que possui a string.
console.log(msg.slice(0, 3))
// a função slice recorta uma parte da string.
console.log(msg.split(' '))
// retorna um array com os elementos da string a partir de um caractere
