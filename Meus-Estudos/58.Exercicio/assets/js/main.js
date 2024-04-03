/**
 * Exercicio 
 * selecionar os paragrafos 
 * selecionar o background do body
 * iterar e adicionar o background selecionado aos paragrafos
 * 
 */
//selecionando os paragrafos

//selecionando e iterando sobre uma coleção de elementos
const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p')

//pegando os estilos que foram computados no body
const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor

for(let i of ps){
    i.style.backgroundColor = backgroundColorBody
    i.style.color = 'white'
}