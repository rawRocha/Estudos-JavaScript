//função que retorna o maio numero

function max (x, y){
    if(x > y){
        return x
    } else {
        return y
    }
}

console.log(max(10, 20))

//melhorando

function max1 (x, y){
    if (x > y){
        return x
    }

    return y
}

console.log(max1(10,20))

//tbm funciona

function max2 (x, y){
    if (x > y) return x
    return y
}

console.log(max2(10, 20))

//com operador ternario

function max3(x, y){
    return x > y ? x : y
}

console.log(max3(10, 20))

//com arrow function

const max4 = (x, y) => {return x > y ? x : y}

console.log(max4(10, 20))