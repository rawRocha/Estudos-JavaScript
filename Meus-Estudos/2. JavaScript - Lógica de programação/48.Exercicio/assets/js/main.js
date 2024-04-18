function setData() {
    const h1 = document.querySelector('h1')
    const data = new Date()

    const mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta',
        'Sexta-feira', 'Sabado']

    const ano = data.getFullYear()
    const mesAtual = zeroAEsquerda(mesesAno[data.getMonth()])
    const diaSemana = diasSemana[data.getDay()]
    const dataAtual = zeroAEsquerda(data.getDate())
    const horas = zeroAEsquerda(data.getHours())
    const minutos = zeroAEsquerda(data.getMinutes())
    const segundos = zeroAEsquerda(data.getSeconds())
    const horaFormat = `${horas}:${minutos}:${segundos}`

    h1.innerHTML = `Hoje é dia ${dataAtual} de ${mesAtual} de ${ano}, ${diaSemana}
    , Horas - > ${horaFormat}`
}

function zeroAEsquerda(num) {
    return num < 10 ? `0${num}` : num
}

setData()

/**
 * o trecho a seguir faz a mesma coisa...
 * 
 * const h1 = document.querySelector('h1')
 * const data = new Data()
 * const opcoes = {
 *  dataStyle:'full'
 * timeStyle:'short'
 * }
 * 
 * h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes)
 */