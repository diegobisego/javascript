/*
Solicitar al usuario cinco (5) nombres pertenecientes a integrantes de una familia. 
Luego, concatenar dichas entradas y efectuar una salida por alerta.
*/

let nombre1 = prompt('Escribe el nombre numero 1: ');
let nombre2 = prompt('Escribe el nombre numero 2: ');
let nombre3 = prompt('Escribe el nombre numero 3: ');
let nombre4 = prompt('Escribe el nombre numero 4: ');
let nombre5 = prompt('Escribe el nombre numero 5: ');

let familia = nombre1 + " " + nombre2 + " " + nombre3 + " " + nombre4 + " " + nombre5;

alert(familia);