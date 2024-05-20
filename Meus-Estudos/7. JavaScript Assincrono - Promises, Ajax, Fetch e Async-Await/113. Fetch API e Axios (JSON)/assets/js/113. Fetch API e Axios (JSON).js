/* fetch('pessoas.json')
    .then(response => response.json())
    .then(json => carregaElementos(json)) */

axios('pessoas.json')
    .then(resposta => carregaElementos(resposta.data))

const carregaElementos = json => {
    const res = document.querySelector('.res')
    const table = document.createElement('table')
    const th = document.createElement('th')

    for(let pessoa of json){
        //cria linha e coluna para cada elemento
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        td.innerHTML += pessoa.nome
        tr.appendChild(td)

        //criar coluna para receber email de cada elemento
        const tdEmail = document.createElement('td')
        tdEmail.innerHTML += pessoa.email
        //adiciona a sua propria linha
        tr.appendChild(tdEmail)

        table.appendChild(tr)
    }
    res.appendChild(table)
}

