/*
Declarar variables para representar la información de un carnet de conducir.
Luego, concatenarlas y asignar el resultado de la operación a una variable denominada carnet.
*/

let nombre,apellido,dni,categoria,edad,carnet;

nombre = "Diego";
apellido = "Bisego";
dni = "32.934.045";
categoria = "B2";
edad = 35;

nombreCompleto = `Carnet: \nNombre: ${nombre} \nApellido: ${apellido} \nDNI: ${dni} \nCategoria: ${categoria} \nEdad: ${edad}`;

console.log(nombreCompleto);
                  