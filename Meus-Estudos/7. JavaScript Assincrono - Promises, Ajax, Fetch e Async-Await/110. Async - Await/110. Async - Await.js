/* Função promise:

Esta função recebe dois parâmetros: msg (uma mensagem) e tempo (um 
período de tempo em milissegundos).

Ela retorna uma nova Promise que executa a seguinte lógica:

1 -> Usa setTimeout para agendar a execução de uma função após o tempo 
especificado em tempo.

2 -> Dentro dessa função, verifica se o tipo de msg não é uma string.

3 -> Se msg não for uma string, a promessa é rejeitada com um erro 
indicando que a mensagem deveria ser uma string.

4 -> Se msg for uma string, a promessa é resolvida com a própria mensagem. */

function promise(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') reject(e => console.log(e))
            resolve(msg)
        }, tempo)
    })
}

//função gera numero aleatório para o tempo.
const rand = () => Math.floor(Math.random() * (3000 - 1000) + 1000)

/* Função executa:

Esta é uma função assíncrona (async) que aguarda a resolução da promessa 
retornada pela função promise.
Dentro dessa função:

1 -> A variável promessa aguarda a resolução da promessa retornada pela 
função promise com a mensagem 'Promessa 1' e um tempo de espera 
Aleatório milissegundos.

2 -> Em seguida, o valor resolvido é exibido no console. */

async function executa() {
    const promessa = await promise('Promessa 1', rand())
    console.log(promessa)
}

/* Chamada de função executa:

Finalmente, a função executa é chamada para iniciar o processo. Ela 
aguardará a promessa ser resolvida e então imprimirá o resultado no 
console.
Basicamente, este código é uma demonstração de como usar promessas e 
funções assíncronas em JavaScript para controlar o fluxo de execução, 
especialmente quando há operações assíncronas, como esperar por um 
determinado período de tempo. */

executa()