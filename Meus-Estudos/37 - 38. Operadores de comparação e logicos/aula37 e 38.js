/**
 * operadores de comparação
 * > maior que
 * >= maior que ou igual
 * < manor que 
 * <= menor que ou igual
 * == igual
 * === igualdade estrita
 * != diferente 
 * !== diferente estrito
 */
const num1 = 10
const num2 = 10.5
const str = 'string'
const comp = 
//podemos comparar ...

console.log(10 > 9)

/**
 * aula 38 - operadores lógicos
 * && -> and -> e 
 * || -> or -> ou
 * ! -> not -> não
 * 
 */

/**
 * aula 39 avaliação de curto circuito
 * && -> quando a condição esta baseada no and todas as expressoes 
 * devem ser verdadeiras, a partir do momento que uma expresão é falsa 
 * o javaScript retorna a expresão falsa.
 * por exemplo: const expreAnd = true && true && false && true -> retorna false
 * finalizando a analise da variavel expreAnd.
 * Existem tipo de dados de são falsos por padrão os FALSY
 * false, 0, '' "" `` (strings vazias), null/undefined, NaN
 * se todas as expresões forem verdadeiras, a linguagem retorna a ultima expresão.
 *  
 * || -> operador lógico OR -> Precisa que apenas uma expresão seja
 * verdadeira para retornar true, encontra e encerra a busca e retorna a expresão
 * por exemplo: console.log(false || 0 || 'Rawlinson' || 'uva') -> retorna Rawlinson
 * 
 * 
 */

const expreAnd = `Rawlinson` && 8 && `Maria`
console.log(expreAnd)

console.log(`Ba${2*'oi'}a`) // brincadeiras a parte

console.log(false || 0 || 'Rawlinson' || 'uva')