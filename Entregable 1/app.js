
/**********POTENCIA DE UN NUMERO **********/

/*
Ingresa por teclado un numero base.
Ingresar la potencia en numero a la que se elevara el numero base.
Mostrar por pantalla el resultado.
*/

alert('CALCULADOR DE POTENCIA DE UN NUMERO')
let numeroBase = Number(prompt('Ingrese el Numero Base para el calculo'));
let potencia = Number(prompt('Ingrese la Potencia'));
let resultado = 0;

while (isNaN(numeroBase) || isNaN(potencia)) {
    alert('Ustede ingreso una letra y no un numero, vuelva a intentarlo')
    numeroBase = Number(prompt('Ingrese el Numero Base para el calculo'));
    potencia = Number(prompt('Ingrese la Potencia'));
}

for (let i = 1; i < potencia; i++) {
    if (i === 1) {
        resultado = numeroBase * numeroBase;  
    } else {
        resultado = resultado * numeroBase;   
    }              
}

alert(`El resultado de la potencia de ${numeroBase} a la ${potencia} es: ${resultado}`);