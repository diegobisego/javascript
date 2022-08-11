let nombres = '';
let nombre = '';

while (true) {
    nombre = prompt('Ingrese un nombre')
    if (nombre !== 'Voldemort') {
        nombres += nombre + ' ';
    } else {
        break;
    }
}

alert('Los nombres son: ' + nombres);