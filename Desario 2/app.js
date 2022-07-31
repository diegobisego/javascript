/************************** CLASE ***************************** */ 

class Producto {
    constructor(id,nombre,precio,cantidad){
        this.id = id,
        this.nombre = nombre,
        this.precio = precio,
        this.cantidad = cantidad
    }
}

/************************** ARRAYS ***************************** */ 


let productos = [
    {
        id:1,
        nombre:'Aceite',
        precio: 200,
        cantidad: 400
    },
    {
        id:2,
        nombre:'Aceitunas',
        precio: 100,
        cantidad: 800
    },
    {
        id:3,
        nombre:'Vinagre',
        precio: 50,
        cantidad: 50
    }
]

//Variables tipo array para guardar los productos
let acumuladorId = 3
let carrito = []
let comentarios = []
let usuarios = []


/************************** FUNCIONES ***************************** */ 

//volver menu principal
const volver = (fn) => {
    debugger
    const respuesta = confirm('Confirme si desea volver a realizar el mismo procedimiento, \nen caso contrario cancele para volver al menu principal')

    seleccionFinal(respuesta,fn)
}

//seleccion tipo de gestion 
const tipoGestion = () => {

    const seleccion = Number(prompt('A Continuacion, seleccione en numero, que desea realizar \n 1) Agregar un Producto \n 2) Modificar un Producto \n 3) Listar los Productos \n 4) Salir'))
    debugger
    if (seleccion < 1 || seleccion > 4 || isNaN(seleccion)) {

        alert('Se ingreso una opcion invalida');
        tipoGestion();
        
    } else {

        switch (seleccion) {
            case 1:
                ingresarProducto();
                break;
            case 2:
                modificarProducto();
                break;
            case 3:
                listarProducto();
                break;    
            case 4:
                break;                  
        }  
    }
    
}

//ingresa un nuevo producto
const ingresarProducto = () => {
    debugger
    const nombre = prompt('Ingrese el nombre del producto');
    const precio = Number(prompt('ingrese el precio del producto'));
    const cantidad = prompt('Ingrese el stock del prducto');

    acumuladorId++

    const nuevoProdcuto = new Producto;

    nuevoProdcuto.id = acumuladorId
    nuevoProdcuto.nombre = nombre;
    nuevoProdcuto.precio = precio;
    nuevoProdcuto.cantidad = cantidad;

    productos.push(nuevoProdcuto);

    alert('PRODUCTO CARGADO CON EXITO')
    volver(ingresarProducto)   
}

//realiza proceso de seleccion final segun la respueta del usuario
const seleccionFinal = (bool,fn) => {
    debugger
    if (bool) {
        fn();
    } else {
        tipoGestion();
    }
}

const listarProducto = () => {
    debugger
    let listaProductos = []
    for (const i of productos) {
        listaProductos.push(`Nombre: ${i.nombre}  -- Precio: ${i.precio} -- Cantidad: ${i.cantidad} \n`);
    }
    alert(`La lista de productos actual es: \n ${listaProductos}`)
    tipoGestion()
}

const modificarProducto = () => {
    debugger
    const seleccion = prompt('Ingrese el nombre del producto que quiere modificar');
    const respuesta = Number(prompt('Ingrese que desea modificar:\n1) Nombre\n2) Precio\n3) Stock'));
    

   switch (respuesta) {
    case 1:
        const nombre = prompt('Ingrese el nuevo nombre para el producto');
        productos.map = (nombre) =>{

        }
        for (const i of productos) {
            if (i.nombre == seleccion) {
                i.nombre = nombre;
                alert('El nombre se ha cambiado con exito')
                volver(modificarProducto)
                break
            } else {
                alert('El nombre seleccionado no se encuentra dentro de la lista')
                modificarProducto()
            }
        }
        break;
    case 2:
        const precio = Number(prompt('Ingrese el nuevo precio del producto'))
        for (const i of productos) {
            if (i.nombre == seleccion) {
                i.precio = precio;
                alert('El precio se a modificado con exito')
                volver(modificarProducto)
                break
            } else {
                alert('El nombre seleccionado no se encuentra dentro de la lista')
                modificarProducto()
            }
        }
        break
    case 3:
        const stock = Number(prompt('Ingrese el nuevo Stock del producto'))
        for (const i of productos) {
            if (i.nombre == seleccion) {
                i.stock = stock;
                alert('El stock se ha modificado con exito')
                volver(modificarProducto)
                break
            } else {
                alert('El nombre seleccionado no se encuentra dentro de la lista')
                modificarProducto()
            }
        }
        break
    default:
        alert('Seleccion de propiedad incorrecta')
        modificarProducto()
        break;
   }

    
}

/************************** EJECUCION ***************************** */ 

alert('BIENVENIDO A LA GESTION DE CARGA DE PRODUCTOS')
tipoGestion();
alert('FIN DEL PROGRAMA');