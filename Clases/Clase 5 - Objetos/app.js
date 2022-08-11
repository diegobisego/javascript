//Contructor de la funcion
function Producto(id, nombre, stock, precio){
    this.id = id
    this.nombre = nombre
    this.stack = stock
    this.precio = precio

    this.saludar = function(){
        console.log('Hola ' + this.nombre)
    }

    this.aumentaStock = () => {
        this.stack++
    }
}

//creacion de la funcion
const producto1 = new Producto(1,"Aceite Comestible", 5000, 400)


//Clases
class Persona {
    //constructor
    constructor(nombre,apellido,edad){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.vivo = true;
    }

    //metodos
    saludar(){
        console.log(this.nombre + ' esta saludando');
    }

    cumplirAños(){
        this.edad++
    }
}

//creacion de objetos medante clases
const persona1 = new Persona('Diego','Bisego',35);
const persona2 = new Persona('Matias','Bisego',31);
const persona3 = new Persona('Jorge','Bisego',62);

console.log(persona1)
console.log(persona2)
console.log(persona3)