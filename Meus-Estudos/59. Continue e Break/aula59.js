const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

  if (numero === 2) {
    console.log('numero 2 encontrado e pulado.')
    continue
  }

  if (numero === 5) {
    console.log('numero 5 fim do laço com break')
    break
  }

  console.log(numero)
}

for (let i in numeros) {
  let num = numeros[i]

  if (num === 2) {
    console.log('Numero 2 encontrado. continue')
    continue
  }

  if (num === 5) {
    console.log('numero 5 encontraddo fim do laço')
    break
  }

  console.log(num)


}

for (let c = 0; c < numeros.length; c++) {
  let nume = numeros[c]

  if (nume === 2) {
    console.log('numero 2 encontrado, continue')
    continue
  }

  if (nume === 5) {
    console.log('numero 5 encontrado')
    break
  }
  console.log(nume)
}

let n = 0
while (n < numeros.length) {
  let nu = numeros[n]

  if (nu === 2) {
    console.log('numero 2 encontrado continue')
    n++
    continue
  }

  if (nu === 5) {
    console.log('numero 5 encontrado break')
    n++
    break
  }
  console.log(nu)
  n++
}


let idx = 0
do {
  let number = numeros[idx]

  if (number === 2) {
    console.log('numero 2 encontrado continue')
    idx++
    continue
  }

  if (number === 5) {
    console.log('numero 5 encontrado break')
    idx++
    break
  }

  console.log(number)
  idx++
} while (idx < numeros.length);

