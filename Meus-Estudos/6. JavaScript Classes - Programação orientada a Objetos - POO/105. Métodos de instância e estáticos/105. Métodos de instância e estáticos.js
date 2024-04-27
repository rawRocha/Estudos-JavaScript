class ControleRemoto {
    constructor(tv) {
        this.tv = tv
        this.volume = 0
    }

    /* Os métodos de instância são funções definidas dentro de uma
    classe que podem ser chamadas em instâncias específicas dessa
    classe. Em outras palavras, eles são funções que operam em
    instâncias individuais da classe e podem acessar e manipular
    os dados específicos de cada instância por meio da palavra-chave this. */

    //aumentarVolume e diminuir volume são métodos de instância
    aumentarVolume() {
        this.volume += 2
    }

    diminuirVolume() {
        this.volume -= 2
    }

    /* Os métodos estáticos em JavaScript são métodos definidos em uma classe
    que podem ser chamados diretamente na própria classe, em vez de em uma 
    instância dessa classe. Isso significa que eles não são chamados em objetos
    individuais criados a partir da classe, mas sim na classe em si. */
    //idClass é um método estático.
    //Um método estático não tem acesso aos dados da instância!
    static idClass(){
        const idAleatorio = Math.floor(Math.random() * (10 - 1) + 1)
        return idAleatorio
    }
}

const controle = new ControleRemoto('LG')
controle.aumentarVolume()
console.log(controle)

console.log(ControleRemoto.idClass())

//gera um numero aleatorio entre o numero min e max definido = Math.random() * (max - min) + min

console.log(Math.round(Math.random()))