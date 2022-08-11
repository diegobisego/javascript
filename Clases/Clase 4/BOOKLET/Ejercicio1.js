

//entrada
function entrada(){
    const valor = prompt('ingrese algo por teclado')   
    return valor;
}

const param = entrada();

//intermedia
function procesamiento(x) {
    const valor2 = x + ' chau'
    return valor2
}


let valor3 = procesamiento(param);
console.log(valor3);

