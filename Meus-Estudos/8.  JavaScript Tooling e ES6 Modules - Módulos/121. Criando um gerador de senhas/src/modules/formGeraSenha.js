import geraSenha from "./geradores";

const qtdChar = document.querySelector('.qtdCaracteres')
const chkNumeros = document.querySelector('.checkNumeros')
const chkMaiusculas = document.querySelector('.checkMaiusculas')
const chkMinusculas = document.querySelector('.checkMinusculas')
const chkSimbolos = document.querySelector('.checkSimbolos')
const res = document.querySelector('.res')
const gerar = document.querySelector('.gerar')

export default () => {
    gerar.addEventListener('click', () => {
        res.innerHTML = novaSenha()
    })
}

function novaSenha(){
     const senha = geraSenha(
        qtdChar.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    )

    return senha || 'Nada selecionado'
}


