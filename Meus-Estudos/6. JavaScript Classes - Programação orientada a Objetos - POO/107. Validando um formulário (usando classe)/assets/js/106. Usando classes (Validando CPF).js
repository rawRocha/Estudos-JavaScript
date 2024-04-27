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

class ValidaCpf {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpf', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: this.limpaCpf(cpfEnviado)
        })
    }

    //método para checar se o cpf é uma sequencia
    isSequence(){
        return this.cpf[0].repeat(this.cpf.length) === this.cpf
    }

    //método que cria o novo cpf, os primeiros 9 digitos + os 2 
    //verificadores
    criaCpf(){
        const cpfParcial = this.cpf.slice(0, -2)
        const digito1 = ValidaCpf.criaDV(cpfParcial)
        const digito2 = ValidaCpf.criaDV(cpfParcial + digito1)

        const novoCpf = cpfParcial + digito1 + digito2
        return novoCpf
    }

    limpaCpf(valor) {
        return valor.replace(/\D+/g, '')
    }

    valida() {
        //checando se o cpf foi definido.
        if (typeof this.cpf === 'undefined') return false
        //checando se o cpf tem 11 digitos
        if (this.cpf.length !== 11) return false
        //checando se o cpf é uma sequencia
        if (this.isSequence()) return false

        const novoCpf = this.criaCpf()

        //se o cpf cumprir os requisitos acima,
        //o método valida compara cpfEnviado com
        //o novoCpf, se o os cpfs coincidirem (forem iguais)
        //cpf cumpriu os requisitos e é válido.
        return this.cpf === novoCpf 
    }

    /*a lógica de criaDV (cria digito verificador),
    consiste em multiplicar os valor por 10, 9, 8 ... 2
    e somar os valores, acumulando em um total,
    o digito é igual a 11 - (o resto da divisão entre o total e 11) 
    se o resultado for 10 ou mais retorna 0, se não o digito.
    */

    /* criaDV é um método exclusivo da classe ValidaCpf,
    só é acessada pela propria classe, nao contém informações 
    sobre a instancia. */

    static criaDV(cpfParcial) {
        const arrayCpf = Array.from(cpfParcial)

        let regressivo = arrayCpf.length + 1

        let total = arrayCpf.reduce((ac, val) => {
            ac += (regressivo * Number(val))
            regressivo--
            return ac
        }, 0)

        const digito = 11 - (total % 11)
        return digito >= 10 ? 0 : digito
    }
}

/* const cpf = new ValidaCpf('150.683.720-48')

if(cpf.valida()){
    console.log(`CPF válido! -> ${cpf.cpf}`)
} else {
    console.log(`CPF inválido!`)
}

console.log(ValidaCpf) */


