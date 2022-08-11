/************************** CLASE ***************************** */

class Producto {
  constructor(id, nombre, precio, cantidad) {
    (this.id = id),
      (this.nombre = nombre),
      (this.precio = precio),
      (this.cantidad = cantidad);
  }
}

/************************** ARRAYS ***************************** */

let productos = [
  new Producto(1, "Aceite", 200, 500),
  new Producto(2, "Aceitunas", 300, 200),
  new Producto(3, "Vinagre", 100, 50),
];

let seleccion = [1,2,3,4,5];

/************************** VARIABLES ***************************** */
let acumuladorId = 3;
let flagPrincipal = true;
let flagVolver = true;



/************************** FUNCION AGREGAR PRODUCTO ***************************** */
const ingresarProducto = () => {
  debugger
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


/************************** FUNCION MANIPULAR PRODUCTO ***************************** */


let respuestasModificar = ['nombre','precio','stock']

const seleccionCarga = (seleccion,prop,respuesta) => {
  debugger
  const nuevo = prompt(`Ingrese el nuevo ${prop[respuesta-1]} para el producto ${seleccion}`);
  productos.forEach((item) => {
      if (item.prop[respuesta-1] == seleccion) item.prop[respuesta-1] = nuevo;
    });

  alert(`El ${prop} se ha modificado con exito`);
  flagManipularProducto = false;
}

const manipularProducto = (seleccionManipular) => {
  debugger

  let flagManipularProducto = true;

  while (flagManipularProducto) {

    if (seleccionManipular == 2) {
      //Le indica que seleccione el nombre del producto a mdificar y luego se fija si existe en el array
      const seleccion = prompt("Ingrese el nombre del producto que quiere modificar");
      const existe = productos.some((item) => item.nombre == seleccion);
    
      //si existe le pide que ingrese por telcado que desea modificar de ese articulo, si no existe le pide
      //nuevamente el ingreso correcto
      let respuesta;
    
      if (existe) {
        respuesta = Number(prompt("Ingrese que desea modificar:\n1) Nombre\n2) Precio\n3) Stock"));
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
        seleccionCarga(seleccion,respuestasModificar, respuesta);
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


















//volver menu principal
const volver = (fn, sel) => {
  const respuesta = confirm(
    "Confirme si desea volver a realizar el mismo procedimiento, \nen caso contrario cancele para volver al menu principal"
  );

  seleccionFinal(respuesta, fn, sel);
};





//realiza proceso de seleccion final segun la respueta del usuario
const seleccionFinal = (bool, fn, sel) => {
  if (bool) {
    fn(sel);
  } else {
    return;
  }
};

//lista productos cagados en el sistema
const listarProducto = () => {
  let listaProductos = [];
  for (const i of productos) {
    listaProductos.push(`Nombre: ${i.nombre}  -- Precio: ${i.precio} -- Cantidad: ${i.cantidad} \n`);
  }
  alert(`La lista de productos actual es: \n ${listaProductos}`);
  return;
};





//gestion de carga exitosa REVISAR ESTO
const cargaExitosa = (seleccion, respuesta, seleccionManipular) => {
    debugger
  switch (respuesta) {
    case 1:
        seleccionCarga(seleccion,'nombre',seleccionManipular);
      break;

    case 2:
        seleccionCarga(seleccion,'precio',seleccionManipular);
      break;

    case 3:
        seleccionCarga(seleccion,'stock',seleccionManipular);
      break;

    default:
      break;
  }
};

//modifica productos cargados en el sistema


/************************** PRIMERA EJECUCION ***************************** */

alert("BIENVENIDO A LA GESTION DE CARGA DE PRODUCTOS");

while (flagPrincipal) {
  debugger
  const seleccion = Number(prompt("A Continuacion, seleccione en numero, que desea realizar \n 1) Agregar un Producto \n 2) Modificar un Producto \n 3) Eliminar un Producto \n 4) Listar los Productos \n 5) Salir"));
  
  if (seleccion < 1 || seleccion > 5 || isNaN(seleccion)) {
    alert("Se ingreso una opcion invalida");
    break
  } else {
    switch (seleccion) {
      case 1:
        ingresarProducto();
        break;
      case 2:
        manipularProducto(seleccion);
        break;
      case 3:
        manipularProducto(seleccion);
        break;
      case 4:
        listarProducto();
        break;
      default:
        break;
    }
  }
}



alert("FIN DEL PROGRAMA");
