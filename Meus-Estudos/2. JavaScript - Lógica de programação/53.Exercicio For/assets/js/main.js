const elementos = [
    {tag: 'p',texto: 'texto do p'},
    {tag: 'div',texto: 'texto da div'},
    {tag: 'section',texto: 'texto da section'},
    {tag: 'footer',texto: 'texto do footer'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++){
    //console.log(elementos[i])
    let {tag, texto} = elementos[i];
    //console.log(tag)
    let elemento = document.createElement(tag)
    let textoNode = document.createTextNode(texto)
    elemento.appendChild(textoNode)
    div.appendChild(elemento)
};

container.appendChild(div);
