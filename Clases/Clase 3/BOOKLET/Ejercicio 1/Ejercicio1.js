let palabra = prompt('Ingrese una palabra a repetir')
let numero = Number(prompt('Ingrese el numero de veces que se va a repetir'));


for (let i = 1; i <= numero; i++) {
    alert(palabra + ' ' + i);   
}
