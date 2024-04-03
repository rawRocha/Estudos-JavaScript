// função meuEscopo existe para proteger minhas variaveis 
//usadas no programa.
function meuEscopo(){
    //as variaveis para selecionar o formulario foi criado uma 
    //variavel chamada form, que seleciona o form
    const form = document.querySelector('.form')
    //o array pessoa vai ser onde salvaremos as pessoas
    const pessoa = []
    // a div resultado foi selecionada com a variavel res
    const res = document.querySelector('.resultado')

    /* 
    a função recebeEvento() ira previnir por padrão o evento de atualizar
    a paginar ao dar submit no botão, será adicionado uma escuta ao form
    o parametro evento recebera preventDefault e nao irá recarregar a pagina

    Para selecionar os inputs foram criadas variaveis, nome, sobrenome, altura e peso
    pessoa.push adicionara um novo elemento do tipo objeto ao array
    com os valores de nome, sobrenome, altura e peso.


    */
    function recebeEvento (evento){
        evento.preventDefault()
        
        const nome = form.querySelector('.nome')
        const sobrenome = form.querySelector('.sobrenome')
        const altura = form.querySelector('.altura')
        const peso = form.querySelector('.peso')
        
        pessoa.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            altura: altura.value,
            peso: peso.value
        })

        console.log(pessoa)

        res.innerHTML += `${nome.value} ${sobrenome.value} ${altura.value} ${peso.value}<br>`
    }

    form.addEventListener('submit', recebeEvento)
}

meuEscopo()