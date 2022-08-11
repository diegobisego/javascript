let numero = Number(prompt('Ingrese un numero'));

if (numero >= 0 && numero <= 1000) {
    alert('Presupuesto bajo')
} else if(numero >= 1001 && numero <= 3000){
    alert('Presupuesto medio')
} else {
    alert('Presupuesto alto')
};