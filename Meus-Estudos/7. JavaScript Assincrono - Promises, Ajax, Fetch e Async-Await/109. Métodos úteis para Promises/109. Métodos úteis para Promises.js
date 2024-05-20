/* Código assíncrono em JavaScript é aquele em que certas operações 
podem 
ocorrer independentemente do fluxo principal do programa. Isso é comum 
em situações como requisições de rede, acesso a banco de dados, leitura 
de arquivos, entre outros. */

function rand(min = 1000, max = 5000){
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
    //retorna uma promise, que recebe um Cb
    return new Promise((resolve, reject) => {
        

        setTimeout(() => {
            if(typeof msg !== 'string'){
                reject(false)
                return
            } 

            resolve(msg + ' - Passei na Promise')
        }, tempo)
    })
}

//métodos úteis
//Promise.all

//imagine um array de promessas
const promessas = [
    /* 'Pimeiro valor', */
    esperaAi('Promise 1', rand()),
    esperaAi('Promise 2', rand()),
    esperaAi('Promise 3', rand()),
   /*  'Fim' */
]

//promise.all recebe o array e retorna todas as promises
//then recebe os valores de cada promessa.
//catch captura o erro caso alguma promise nao seja valida e rejeitada
//se promise.all rejected retorna o reject
Promise.all(promessas).then(valor => console.log(valor)).catch(e => console.log(e))

Promise.race(promessas).then(valor => console.log(valor + ' / Primeiro Valor a retornar')).catch(e => console.log(e))
