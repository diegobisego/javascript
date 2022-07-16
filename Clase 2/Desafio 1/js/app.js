let someInput = prompt("Ingrese una palabra o un numero")

if (!isNaN(someInput)) {
    if (someInput > 1000) {
        alert('El numero es Mayor a mil!')
    } else if(someInput >= 10 && someInput <= 50){
        alert('Esta entre 10 y 50!')
    } else {
        alert(`Tu numero es el numero ${someInput}`)
    }
} else if(isNaN(someInput) && someInput == "Hola"){
    alert('Escribiste Hola')
} else {
    alert(`Ingresaste el texto ${someInput}`);
}