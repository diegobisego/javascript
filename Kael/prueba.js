function ingresarNombre() {
	let nombre = prompt("Ingrese su nombre");
	alert("Hola" + " " + nombre + "." + "Bienvenidx a nuestra Tienda online!");
}

class producto {
	constructor (nombre, precio, id, stock){
		this.nombre = nombre,
		this.precio = precio,
		this.id = id,
		this.stock = stock
	}
}

const productos = [                               //cada vez que se pone const o let es porq voy a retornar algo?
	new producto ("In rainbow", 2500, 1, 3),
	new producto ("Piramid song", 2300, 2, 1),
	new producto ("Paranoid android", 2600, 3, 5),
]

productos.push(new producto("Nude",2500,4,4))

// console.log(productos)


const carrito = [];
let totalAcumulado = 0
  
function elegirProducto() {
	debugger
    const producto = Number(prompt("Ingrese el ID del producto"))
	const cantidad = Number(prompt("Ingrese la cantidad"))
  
	if (cantidad < 1 || isNaN(cantidad)) {
	  alert("cantidad invalida")
	  elegirProducto();
	}
  
	const productoElegido = productos.find( item  => item.id == producto)

    if (productoElegido != undefined) {
        if (cantidad > productoElegido.cantidad) {
            console.log('stock insuficiente');
            return;
        } else {
            productoElegido.cantidad = cantidad;
            carrito.push(productoElegido);
        }  	 
	} else {
	  alert('no encontrado');
      elegirProducto()
	}

    totalAcumulado += productoElegido.precio

    sumarProductos()
  }




  
//   function buscarProducto(producto, idAEncontrar) {
//     debugger
// 	if (producto.id == idAEncontrar) {
// 	  return true;
// 	} else {
// 	  return false;
// 	}
//   }



function sumarProductos() {
debugger
	let pregunta = confirm("Desea sumar otro producto?"); // pedimos confirmacion para agregar otro producto

	while (pregunta) {
		// ejecutamos elegirProducto siempre que pregunta === true
        elegirProducto();     
	}

	alert("El monto de su compra es :" + totalAcumulado); // valor acumulado guarda todos los resultados sumados.
	alert("Gracias por su compra");
}



// * EJECUCION  

// saluda al user
ingresarNombre();   
  
// Ofrece productos disponibles  
productos.forEach((producto) => alert(`Producto: ${producto.nombre} id:${producto.id}` ))

// user elige
elegirProducto()

// // user elige de nuevo
// sumarProductos();