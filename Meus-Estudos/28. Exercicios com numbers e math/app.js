//let num = Number(window.prompt('Digite um numero'))
console.log(typeof num)

const res = document.getElementById('resposta')

function gerar(){
    let num = Number(Math.random() * (100 - 1) + 1)
    res.innerHTML = `<h1>Seu número é: ${num}</h1>`
    res.innerHTML += `Raiz quadrada: ${num ** 0.5}<br>`
    res.innerHTML += `A RAIZ é um numero inteiro? ${Number.isInteger(num ** 0.5)}<br>`
    res.innerHTML += `${num} é um NaN? ${Number.isNaN(num)}<br>`
    res.innerHTML += `Arredondando para baixo: ${Math.floor(num)}<br>`
    res.innerHTML += `Arredondando para cima: ${Math.ceil(num)}<br>`
    res.innerHTML += `Com duas casas decimais: ${num.toFixed(2)}<br>`
}

