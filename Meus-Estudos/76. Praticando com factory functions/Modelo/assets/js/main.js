//criando a calculadora como se fosse um objeto
//this referencia um atributo ou método dentro do objeto
//arrow function nao altera o comportamento do this
//cria calculadora é minha factory function (uma função que retorna um objeto)
function criaCalculadora() {
    return {
        //selecionar o display como atributo
        display: document.querySelector('.display'),

        //métodos abaixo \/ atributos acima /\ 


        inicia() {
            //alert('oi, iniciei')
            this.cliqueBotoes();
            this.pressionaEnter()
        },

        realizaConta() {
            let conta = this.display.value

            try {
                conta = eval(conta)

                if (!conta) {
                    alert('Conta Inválida')
                    return
                }

                this.display.value = conta
            } catch (e) {
                alert('Conta Inválida')
                return
            }
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        clearDisplay() {
            this.display.value = '';
        },


        pressionaEnter() {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        cliqueBotoes() {
            document.addEventListener('click', e => {
                const el = e.target;
                console.log(el)

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },
    }
}

//calculadora é meu objeto
const calculadora = criaCalculadora()
calculadora.inicia()
