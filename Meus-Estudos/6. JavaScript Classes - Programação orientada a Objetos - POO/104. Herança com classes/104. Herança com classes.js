class DispositivoEletronico {
    constructor(nome){
        this.nome = nome
        this.ligado = false
    }

    ligar(){
        if(this.ligado){
            console.log(`${this.nome} já está ligado`)
        }
        
        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está Desligado`)
        }
        this.ligado = false
    }
}

/* A herança é um conceito fundamental em programação orientada a objetos e permite 
que uma classe herde características (métodos e propriedades) de outra classe. */

//criando tv como classe filha de dispositivoEletronico
class Tv extends DispositivoEletronico {
    constructor(nome, fabricante, polegadas){

        /* O método super() é usado dentro de uma classe filha para chamar o construtor
        da classe pai. Ele é especialmente útil quando você quer adicionar funcionalidades
        ao construtor da classe filha, mas ainda precisa executar o construtor da classe pai. */
        super(nome)
        
        this.fabricante = fabricante
        this.polegadas = polegadas
    }
}

const sansungTv = new Tv('tv', 'Samsung', 35)
sansungTv.ligar()
sansungTv.ligar()
console.log(sansungTv)

const tv = new DispositivoEletronico('Tv')
tv.ligar()
console.log(tv)