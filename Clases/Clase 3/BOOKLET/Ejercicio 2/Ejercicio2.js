let numero = Number(prompt('ingrese un numero'))

for (let i = 1; i <= numero; i++) {
    if (numero > 4) {
        alert('se paso del 4')
        break
    }
    alert('Lado ' + i )
}