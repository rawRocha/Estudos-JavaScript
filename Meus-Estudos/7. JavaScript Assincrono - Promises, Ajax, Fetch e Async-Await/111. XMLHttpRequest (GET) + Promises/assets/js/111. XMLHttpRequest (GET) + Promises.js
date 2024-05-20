//Get - XMLHttpRequest (Antigo)
/* const request = obj => {
    const xhr = new XMLHttpRequest()
    xhr.open(obj.method, obj.url, true)
    xhr.send()

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300){
            //se sucesso retorna função CB
            obj.success(xhr.responseText)
        } else {
            obj.error(xhr.statusText)
        }
    })
}

document.addEventListener('click', e => {
    const el = e.target
    //preciso selecionar a tag link que vai trazer os dados da pagina de forma assincrona
    const tag = el.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()
        carregaPagina(el)
    }
})

function carregaPagina(el){
    //preciso selecionar o endereço do link
    const href = el.getAttribute('href')
    console.log(href)

    //configurando o objeto request
    request({
        method: 'GET',
        url: href,
        success (response) {
            carregaResultado(response)
        },
        error (errorText) {
            console.log(errorText)
        }
    })
}

function carregaResultado(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
} */

//------------------------------------------------------------------

//Refatorando o código adicionando Promises
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

}

document.addEventListener('click', e => {
    const el = e.target
    //preciso selecionar a tag link que vai trazer os dados da pagina de forma assincrona
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
})

function carregaPagina(el) {
    //preciso selecionar o endereço do link
    const href = el.getAttribute('href')
    console.log(href)

    //configurando o objeto request
    request({
        method: 'GET',
        url: href
    })
        .then(response => carregaResultado(response))
        .catch(e => console.log(e))
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
} */

//Agora com Async Await
const request = obj => {
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

}

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

    //configurando o objeto request
    const objConfig = {
        method: 'GET',
        url: href
    }
    try {
        const response = await request(objConfig)
        carregaResultado(response)
    } catch (error) {
        console.log(error)
    }   
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}