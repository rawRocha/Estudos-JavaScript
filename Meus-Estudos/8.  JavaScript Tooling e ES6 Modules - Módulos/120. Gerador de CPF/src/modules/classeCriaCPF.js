export class CriaCPF {
    constructor(){
        this.inicia()
        this.res = document.querySelector('.res')
    }

    inicia(){
        document.addEventListener('click', e => {
            if (e.target.classList.contains('gerar')){
                const cpfParcial = this.criaCPFparcial()
                
                const digito1 = this.criaDigito(cpfParcial)

                const digito2 = this.criaDigito(cpfParcial + digito1)

                const novoCPF = cpfParcial + digito1 + digito2

                const cpfFormatado = this.formatarCPF(novoCPF)
                
                const textArea = this.criaTextArea(cpfFormatado)
                this.res.appendChild(textArea)
            }
        })
    }

    criaCPFparcial(){
        const criaCPFparcial = Math.floor(Math.random() * (999999999 - 100000000) + 100000000)

        return criaCPFparcial.toString()
    }

    criaDigito(cpfParcial){
        let cpfString = cpfParcial.toString()
        let regressivo = cpfString.length + 1
        let total = 0

        for (let valor of cpfString){
            total = total + (valor * regressivo)
            regressivo--
        }

        let digito = 11 - (total % 11)
        if (digito > 9) digito = 0

        return digito
    }

    criaTextArea(cpfFormatado){
        let textArea = document.createElement('textarea')
        textArea.setAttribute('class', 'saida')
        textArea.innerHTML = cpfFormatado

        return textArea
    }

    formatarCPF(novoCPF){
        if(novoCPF.length === 11){
            return novoCPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
        }
    }
}