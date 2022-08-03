/************************** CLASE ***************************** */

class Producto {
	constructor(id, nombre, precio, stock) {
	  	this.id = id,
		this.nombre = nombre,
		this.precio = precio,
		this.stock = stock
	}
  }
  
  /************************** ARRAYS ***************************** */
  
  let productos = [
	new Producto(1, "Aceite", 200, 500),
	new Producto(2, "Aceitunas", 300, 200),
	new Producto(3, "Vinagre", 100, 50),
  ];
  
  /************************** VARIABLES ***************************** */
  let acumuladorId = 3;
  let flagPrincipal = true;
  let flagVolver = true;
  
  
  
  /************************** FUNCION AGREGAR PRODUCTO ***************************** */
  const ingresarProducto = () => {
	
	let flagIngresarProducto = true
  
	while (flagIngresarProducto) {
  
	  const nombre = prompt("Ingrese el nombre del producto");
  
	  if (nombre == null) {
		flagIngresarProducto = false;
		break;
	  }
  
	  const precio = Number(prompt("ingrese el precio del producto"));
	  const cantidad = Number(prompt("Ingrese el stock del producto"));
  
	  let existe;
  
	  //verifica que tanto precio como cantidad sean ingresos correctos
	  if (isNaN(precio) || isNaN(cantidad) || nombre == "") {
		alert("HA INGRESADO DATOS INVALIDOS");
		break
	  } else {
		existe = productos.some((item) => item.nombre == nombre);
	  }
  
	  if (existe) {
		alert("EL PRODUCTO QUE QUIERE CARGAR YA SE ENCUENTRA EN LA BASE DE DATOS");
	  } else {
		acumuladorId++;
  
		const nuevoProdcuto = new Producto(acumuladorId, nombre, precio, cantidad);
		productos.push(nuevoProdcuto);
  
		alert("PRODUCTO CARGADO CON EXITO");
		flagIngresarProducto = false;
	  }
	}
  };
  
  
  /************************** FUNCIONES MANIPULAR PRODUCTO ***************************** */
  
  //array de comparacion
  let arrModificar = ['nombre','precio','stock']
  
  const seleccionCarga = (seleccion,arrModificar,respuesta) => {
	
	let nuevo;
	if (respuesta == 2 || respuesta == 3) {
		nuevo = Number(prompt(`Ingrese el nuevo ${arrModificar[respuesta-1]} para el producto ${seleccion}`));
	} else {
		nuevo = prompt(`Ingrese el nuevo ${arrModificar[respuesta-1]} para el producto ${seleccion}`);
	}

	productos.forEach((item) => {
		
		if (item[arrModificar[0]] == seleccion) item[arrModificar[respuesta-1]] = nuevo;
	  });
  
	alert(`El ${arrModificar[respuesta-1]} se ha modificado con exito`);
	flagManipularProducto = false;
	
  }
  
  const manipularProducto = (seleccionManipular) => {
	 
	while (flagManipularProducto) {
  
	  if (seleccionManipular == 2) {

		//Le indica que seleccione el nombre del producto a mdificar y luego se fija si existe en el array
		const seleccion = prompt("Ingrese el nombre del producto que quiere modificar");
		const existe = productos.some((item) => item.nombre == seleccion);
	  
		//si existe le pide que ingrese por telcado que desea modificar de ese articulo, si no existe le pide
		//nuevamente el ingreso correcto
		let respuesta;
	  
		if (existe) {
		  respuesta = Number(prompt("Seleccione en forma numerica que desea modificar:\n1 - Nombre\n2 - Precio\n3 - Stock"));
		} else if (seleccion == null) {
		  return;
		} else {
		  alert("EL NOMBRE INGRESADO NO EXISTE COMO PRODUCTO");
		  flagManipularProducto = false;
		  break
		}
	  
		//Verifica la respuesta del usuario y en base a eso ejecuta la intruccion indicada
		if (respuesta > 3) {
		  alert("SELECCION DE PROPIEDAD INCORRECTA");
		} else {
		  seleccionCarga(seleccion,arrModificar, respuesta);
		}
	  } else {
		const seleccion = prompt("Ingrese el nombre del producto que quiere Eliminar");
		const existe = productos.some((item) => item.nombre == seleccion);
	  
		if (existe) {
  
		  const lugar = productos.findIndex((item) => item.nombre == seleccion);
  
		  productos.splice(lugar, 1);
  
		  alert("EL PRODUCTO SE ELIMINO EN FORMA EXITOSA");
		  acumuladorId--;
		  flagManipularProducto = false;
		  break
  
		} else {
		  alert("EL NOMBRE INGRESADO NO EXISTE COMO PRODUCTO");
		  flagManipularProducto = false;
		}
	  }
	}
  };  
 
 /************************** FUNCION LISTAR PRODUCTO ***************************** */

  const listarProducto = () => {
	let listaProductos = [];
	for (const i of productos) {
	  listaProductos.push(`Nombre: ${i.nombre}  -- Precio: ${i.precio} -- Cantidad: ${i.stock} \n`);
	}
	alert(`La lista de productos actual es: \n ${listaProductos}`);
	return;
  };

  /************************** PRIMERA EJECUCION ***************************** */
  
  alert("BIENVENIDO A LA GESTION DE CARGA DE PRODUCTOS");
  
  while (flagPrincipal) {
	debugger
	const seleccion = Number(prompt("A Continuacion, seleccione en forma numerica, que desea realizar \n 1 - Agregar un Producto \n 2 - Modificar un Producto \n 3 - Eliminar un Producto \n 4 - Listar los Productos \n 5 - Salir"));
	
	if (seleccion < 1 || seleccion > 5 || isNaN(seleccion)) {
	  alert("Se ingreso una opcion invalida");
	} else {
	  switch (seleccion) {
		case 1:
		  ingresarProducto();
		  break;
		case 2:
		  flagManipularProducto = true;
		  manipularProducto(seleccion);
		  break;
		case 3:
		  flagManipularProducto = true;
		  manipularProducto(seleccion);
		  break;
		case 4:
		  listarProducto();
		  break;
		default:
			alert("FIN DEL PROGRAMA");
			flagPrincipal = false
		  break;
	  }
	}
  } 