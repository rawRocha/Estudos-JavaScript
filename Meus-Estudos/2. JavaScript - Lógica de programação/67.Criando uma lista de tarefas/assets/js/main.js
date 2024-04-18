const inpTarefa = document.querySelector('.inp-tarefa')
const btnAddTarefa = document.querySelector('.btn-tarefa')
const listaTarefas = document.querySelector('.lista-tarefas')

function criaBtn(li){
    const btnApagar = document.createElement('button')
    btnApagar.innerText = 'Apagar'
    btnApagar.setAttribute('class', 'apagar')
    li.innerText += ' '
    li.appendChild(btnApagar)
}

function criaLi(){
    const li = document.createElement('li')
    listaTarefas.appendChild(li)
    return li
}

inpTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if (!inpTarefa.value) return
        criaTarefa(inpTarefa.value)
    }
})

function limpaInput(){
    inpTarefa.value = ''
    inpTarefa.focus()
}

function criaTarefa(textoInput){
    const li = criaLi()
    li.innerText = textoInput
    limpaInput()
    criaBtn(li)
    salvarTarefas()
}

btnAddTarefa.addEventListener('click', function(){
    if (!inpTarefa.value) return
    criaTarefa(inpTarefa.value)
})

//capturar o evento de click no document
//selecionar o botao apagar 
//remover o elemento.

document.addEventListener('click', function(e){
    const el = e.target
    if(el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas(){
    //selecionando todas as tarefas de listaTarefas
    const liTarefas = listaTarefas.querySelectorAll('li')

    //criando um array vazio que vai armazenar as tarefas
    const listaDeTarefas = []

    for (let tarefas of liTarefas){
        let tarefasTexto = tarefas.innerText
        tarefasTexto = tarefasTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefasTexto)
    }

    //crinado e convertendo e salvando um arquivo JSON
    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
    
    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()