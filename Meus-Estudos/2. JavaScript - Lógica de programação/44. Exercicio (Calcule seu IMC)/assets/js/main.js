/**
 * IMC = peso/altura**2
 */
//selecionando o formulário e a div resultado
const form = document.querySelector('#form')
const resultado = document.querySelector('#res')


form.addEventListener('submit', function (e) {
    e.preventDefault()

    const inputPeso = e.target.querySelector('#peso')
    const inputAltura = e.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

   if(!peso){
    setResultado('Peso inválido.', false)
    return
   }

   if(!altura){
    setResultado('Altura inválida.', false)
    return
   }

   setResultado(`Seu IMC é: ${calculoImc(peso, altura)}, você
   está ${getNivelImc(calculoImc(peso, altura))}`, true)
})

//criando um paragrafo dinamicamente
function criaP(){
    const p = document.createElement('p')
    return p 
}


//escrevendo no paragrafo dinamicamente
function setResultado(msg, isValid){
    resultado.innerHTML = ''

    const p = criaP()

    if(isValid) {
        p.classList.add('paragrafo-resultado')
    } else {
        p.classList.add('bad')
    }

    p.innerHTML = msg
    resultado.appendChild(p)

}

//calculando o imc
function calculoImc(peso, altura){
    const imc = peso/altura**2
    return imc.toFixed(2)
}

function getNivelImc(imc){
    const nivelImc = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 
    'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivelImc[5]
    if (imc >= 34.9) return nivelImc[4]
    if (imc >= 29.9) return nivelImc[3]
    if (imc >= 24.9) return nivelImc[2]
    if (imc >= 18.5) return nivelImc[1]
    if (imc < 18.5) return nivelImc[0]
}