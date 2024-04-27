//Criando a classe responsavel por validar o formulario
class ValidaFormulario {
    constructor() {
        //selcionando o formulario
        this.formulario = document.querySelector('.formulario')

        //assim que a classe for chamada, eventos e chamado.
        this.eventos()
    }

    //métodos que vai receber os eventos 
    eventos() {
        //capturar o evento de submit
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)

        })
    }

    /*  Um evento handleSubmit é comumente utilizado em
        formulários web. Ele é acionado quando um formulário é 
        enviado, geralmente por meio de um botão de envio (submit). 
        Quando o evento handleSubmit é acionado, você pode executar 
        uma função específica que lida com os dados do formulário, 
        como validação, envio para um servidor, atualização de 
        estado ou qualquer outra operação necessária. */


    handleSubmit(e) {
        //previne o recarregamento da pagina por padrão
        e.preventDefault()
        console.log(`formulario não enviado...`)

        //checar se os campos são validos
        const camposValidos = this.camposSaoValidos()
        //checar os campos senhas a parte
        const senhasValidas = this.senhasSaoValidas()

        if (camposValidos && senhasValidas) {
            alert('Fomulario valídado com sucesso!')
            this.formulario.submit()
        }
    }

    senhasSaoValidas() {
        let valid = true

        //selecionar os campos senhas
        const senha = document.querySelector('.senha')
        const repetirSenha = document.querySelector('.repetir-senha')

        if (senha.value !== repetirSenha.value) {
            valid = false
            this.criaErro(senha, 'Senhas devem ser iguais.')
            this.criaErro(repetirSenha, 'Senhas devem ser iguais.')
        }

        //checar os requisitos minimos da senha ter entre 6 e 12 caracteres
        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false
            this.criaErro(senha, 'Senha não atende aos requisitos.')
        }

        return valid
    }

    camposSaoValidos() {
        let valid = true

        //remover os erros sempre que tentar validar 
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        //for para selecionar todos os campos do form
        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerText

            if (!campo.value) {
                //se campos vazios escrevaErro
                this.criaErro(campo, `Campo "${label}" não pode estar em branco.`)
                valid = false
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false
            }
        }

        return valid
    }

    validaUsuario(campo) {
        const usuario = campo.value
        let valid = true
        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário deve ter entre 3 e 12 caracteres.')
            valid = false
        }
        return true
    }

    validaCPF(campo) {
        const cpf = new ValidaCpf(campo.value)

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.')
            return false
        }

        return true
    }

    criaErro(campo, msg) {
        const div = document.createElement('div')
        div.innerHTML = msg
        div.classList.add('error-text')
        campo.insertAdjacentElement('afterend', div)
    }
}

//instanciando a classe
const validaFormulario = new ValidaFormulario()