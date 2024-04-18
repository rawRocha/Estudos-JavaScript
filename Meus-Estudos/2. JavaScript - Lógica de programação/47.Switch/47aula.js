//Switch

const data = new Date()
const dayWeek = data.getDay()
let dayWeekText

console.log(dayWeek)
/*
if (dayWeek === 0){
    dayWeekText = 'Domingo'
} else if (dayWeek === 1 ){
    dayWeekText = 'Segunda'
} else if (dayWeek === 2 ){
    dayWeekText = 'Terça'
} else if (dayWeek === 3 ){
    dayWeekText = 'Quarta'
} else if (dayWeek === 4 ){
    dayWeekText = 'Quinta'
} else if (dayWeek === 5 ){
    dayWeekText = 'Sexta'
} else if (dayWeek === 6 ){
    dayWeekText = 'Sabado'
} else {
    ''
}

console.log(dayWeekText)
*/
//usando o switch

switch (dayWeek){
    case 0:
        dayWeekText = 'Domingo'
        break
    case 1:
        dayWeekText = 'Segunda'
        break
    case 2:
        dayWeekText = 'Terça'
        break
    case 3:
        dayWeekText = 'Quarta'
        break
    case 4:
        dayWeekText = 'Quinta'
        break
    case 5:
        dayWeekText = 'Sexta'
        break
    case 6:
        dayWeekText = 'Sabado'
        break
    default:
        dayWeekText = ''
        break
}

console.log(dayWeekText)


/*
const mesesAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const diasSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta',
'Sexta-feira', 'Sabado']

const mesAtual = mesesAno[data.getMonth()]
const diaSemana = diasSemana[data.getDay()]
const dataAtual = data.getDate()
const horas = data.getHours()
const minutos = data.getMinutes()
const segundos = data.getSeconds()
const horaFormat = `${horas}:${minutos}:${segundos}`

console.log(dataAtual, mesAtual, diaSemana, horaFormat)
*/



