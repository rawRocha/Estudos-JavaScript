//Usar o fetch dispensa a função request *****
/* const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.statusText)
            }
        })
    })

} */

document.addEventListener('click', e => {
    const el = e.target
    //preciso selecionar a tag link que vai trazer os dados da pagina de forma assincrona
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    //preciso selecionar o endereço do link
    const href = el.getAttribute('href')
    console.log(href)

    try {
        //utilizando o async e await se torna menos verboso a requisição 
        //e o retorno das promises
        const response = await fetch(href)

        if (response.status !== 200) throw new Error('Nosso ERRO 404!')

        const html = await response.text()
        carregaResultado(html)
    } catch (error) {
        console.log(error)
    }



    //O fetch a baixo realiza a requisição assincrona
    /* fetch(href)
        .then(response => response.text())
        .then(html => carregaResultado(html))
 */
    //Por não utilizar a função request o obj não é mais útil
    //configurando o objeto request
    /*  const objConfig = {
         method: 'GET',
         url: href
     } */
    /* try {
        const response = await request(objConfig)
        carregaResultado(response)
    } catch (error) {
        console.log(error)
    }    */

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}



/* fetch('pagina1.html')
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO!')
        return resposta.text() //que também retorna uma promise
    })
    .then(html => console.log(html)) */

/* Em resumo, este código faz uma requisição HTTP para a página 'pagina1.html', verifica se a resposta foi 
bem-sucedida (status 200), e se sim, imprime o conteúdo da página no console. Se a resposta não for bem-sucedida, 
ele lança um erro indicando que a página não foi encontrada.
 */