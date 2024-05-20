function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max + min) - min)
}


function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg)
    }, tempo)
}

/* esperaAi('Frase 1', rand(1, 5))
esperaAi('Frase 2', rand(1, 5))
esperaAi('Frase 3', rand(1, 5))
 */
//Assim não da para garantir a ordem.
//uma das soluções seria usar uma função callback na função esperaAi()
//porém não é o ideal.

/* Em JavaScript, as Promises são objetos usados para representar uma
operação assíncrona que pode ser concluída com sucesso (resolvida) ou
falha (rejeitada). Elas são usadas principalmente para lidar com
código assíncrono de forma mais limpa e fácil de entender,
especialmente em situações como requisições de rede, acesso a banco
de dados, leitura de arquivos, entre outros.

Uma Promise pode estar em um de três estados:

Pending (Pendente): Estado inicial, quando a operação assíncrona ainda
 está em andamento.
Fulfilled (Resolvida): A operação assíncrona foi bem-sucedida.
Rejected (Rejeitada): A operação assíncrona falhou.
As Promises têm dois métodos principais:

then(): É usado para manipular o resultado (valor resolvido) da Promise 
quando ela é bem-sucedida.
catch(): É usado para lidar com erros quando a Promise é rejeitada.
Além disso, há o método finally(), que é executado independentemente de
a Promise ser resolvida ou rejeitada. 

Acesse a documentação - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/

function esperaAiComPromises(msg, tempo) {
    //retorna uma função de callback passada para o construtor de promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') reject(new Error('ERRO'))
            /* O método resolve() é uma função fornecida pelo construtor 
            de Promise em JavaScript. Ele é usado para indicar que a 
            Promise foi resolvida com sucesso, ou seja, que a operação 
            assíncrona associada à Promise foi concluída com êxito e um 
            valor específico está disponível.


            Quando você chama resolve(valor) dentro de uma função de 
            callback passada para o construtor de Promise, o estado da 
            Promise muda de "pendente" para "resolvida", e o valor 
            passado para resolve() se torna o valor resolvido da 
            Promise. */
            resolve(msg)
        }, tempo)
    })
}

esperaAiComPromises('Promise 1', rand(1, 5))
    /*  método then() é usado para definir o que deve acontecer após a 
    conclusão bem-sucedida de uma Promise. */
    .then(resposta => {
        console.log(resposta)
        return esperaAiComPromises(1234, rand(1, 5))
    })
    .then(resposta => {
        console.log(resposta)
        return esperaAiComPromises('Vai para o outro Then', rand(1, 5))
    })
    .then(resposta => {
        console.log(resposta)
    })
    /* O método catch() é usado em Promises para lidar com erros que 
    ocorrem durante a execução de uma operação assíncrona. Ele permite 
    capturar e tratar qualquer erro que ocorra na cadeia de Promises, 
    proporcionando uma forma mais limpa e concisa de lidar com exceções 
    em código assíncrono. */
    .catch(e => {
        console.log(e)
    })
        

    /* Em resumo, as Promises são uma ferramenta poderosa em JavaScript 
    para lidar com código assíncrono de forma eficiente, legível e 
    organizada, contribuindo para um desenvolvimento mais robusto e 
    fácil de manter. */