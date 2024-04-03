/*try{
    console.log(naoExisto)
} catch (error){
    console.log('naoExisto, não existe!')
    console.log(error)
}
*/

function soma(x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser números.')
    }

    return x + y
}
try{
    console.log(soma('1', 2))
} catch(e){
    console.log(e)
}


/**
 * try{
 *  É executada quando não há erros.
 * } catch (e){
 *  É executada quando há erro.
 * } finally {
 *  Sempre é executada.
 * }
 */

function retornaHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date.')
    }

    if (!data){
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try{
    const data = new Date('08-09-1995 12:58:12')
    const hora = retornaHora(data)
    console.log(hora)
} catch(err){
    //tratar erro
} finally{
    console.log('Consegui, meus parabens!')
}
