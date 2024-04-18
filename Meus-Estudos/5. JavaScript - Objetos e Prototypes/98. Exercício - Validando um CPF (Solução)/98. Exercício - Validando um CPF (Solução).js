//CRÉDITOS AO PROFESSOR Luiz Otávio Miranda - Udemy - Curso de JavaScript e TypeScript

//705.484.450-52
/*
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
somar todos os valores

primeiro digito igual 11 - (somaValoresMultiplicados % 11)
se o numero digito for maior que 9, digito igual a 0

segundo digito
7x 0x 5x 4x 8x 4x 4x 5x 0x primeiroDigitox
11 10 9  8  7  6  5  4  3  2
somar todos os valores
segundo digito igual 11 - (somaValoresMultiplicados % 11)

se o numero digito for maior que 9, digito igual a 0
*/

function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        get: function () {
            return cpfEnviado.replace(/\D+/g, '')
        }
    })
}

ValidaCpf.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false // caso cpf enviado nao seja enviado retorna falso
    if (this.cpfLimpo.length !== 11) return false
    if (this.isSequence()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial + digito1)

    const novoCpf = cpfParcial + digito1 + digito2
    return novoCpf === this.cpfLimpo
}

ValidaCpf.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial)

    let regressivo = cpfArray.length + 1
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val))
        regressivo--
        return ac
    }, 0)

    const digito = 11 - (total % 11)
    return digito >= 10 ? 0 : digito
}

ValidaCpf.prototype.isSequence = function () {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)
    return sequencia === this.cpfLimpo
}

const cpf = new ValidaCpf('705.484.450-52') //String

if (cpf.valida()){
    console.log('CPF Válido!')
} else {
    console.log('CPF Inválido!')
}