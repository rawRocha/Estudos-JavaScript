//funções que retornam objetos
//Factory function (Função fábrica
function criaPessoa(nome, sobrenome, peso, altura){
    return{
        nome,
        sobrenome,
        
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        set nomeCompleto(valor){
            valor = valor.split(' ')
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(valor)
        },

        peso,
        altura,
        //uma função dentro de um obj é um método
        fala(assunto){
            return `${this.nome} está falando sobre ${assunto}, ele pesa ${this.peso} kilos.`
        },

        //Getter, imc agora nao se comporta como uma função, e sim como um atributo
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
    }
}

//criando uma pessoa
const p1 = criaPessoa('Rawlinson', 'Rocha', 75, 1.73)
p1.nomeCompleto = 'Rawlinson Rocha Santos Junior'
console.log(p1.nome)
console.log(p1.sobrenome)