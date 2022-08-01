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

//carga de objetos literales
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
// let carrito = []
// let comentarios = []
// let usuarios = []


/************************** FUNCIONES ***************************** */ 

//volver menu principal
const volver = (fn, sel) => {
    
    const respuesta = confirm('Confirme si desea volver a realizar el mismo procedimiento, \nen caso contrario cancele para volver al menu principal')

    seleccionFinal(respuesta,fn,sel)
}

//seleccion tipo de gestion 
const tipoGestion = () => {

    //consulta que tipo de gestion quiere realizar y luego lo verifica mediante un switch
    const seleccion = Number(prompt('A Continuacion, seleccione en numero, que desea realizar \n 1) Agregar un Producto \n 2) Modificar un Producto \n 3) Eliminar un Producto \n 4) Listar los Productos \n 5) Salir'))
    
    if (seleccion < 1 || seleccion > 5 || isNaN(seleccion)) {

        alert('Se ingreso una opcion invalida');
        tipoGestion();
        
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

//ingresa un nuevo producto
const ingresarProducto = () => {
    const nombre = prompt('Ingrese el nombre del producto');
    if(nombre == null){
        tipoGestion()
    }
    const precio = Number(prompt('ingrese el precio del producto'));
    const cantidad = Number(prompt('Ingrese el stock del producto'));

    let existe;

    console.log(nombre)
    //verifica que tanto precio como cantidad sean ingresos correctos
        if (isNaN(precio) || isNaN(cantidad) || nombre == "") {
            alert('HA INGRESADO DATOS INVALIDOS')
            ingresarProducto()
        } else {
            existe = productos.some(item => item.nombre == nombre)
        }
           

        if (existe) {
            alert('EL PRODUCTO QUE QUIERE CARGAR YA SE ENCUENTRA EN LA BASE DE DATOS')
            tipoGestion()
        } else {
            //acumulador de ID de item
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
}  

//realiza proceso de seleccion final segun la respueta del usuario
const seleccionFinal = (bool,fn,sel) => {
    
    if (bool) {
        fn(sel);
    } else {
        tipoGestion();
    }
}

//lista productos cagados en el sistema
const listarProducto = () => {
    
    let listaProductos = []
    for (const i of productos) {
        listaProductos.push(`Nombre: ${i.nombre}  -- Precio: ${i.precio} -- Cantidad: ${i.cantidad} \n`);
    }
    alert(`La lista de productos actual es: \n ${listaProductos}`)
    tipoGestion()
}

//gestion de carga exitosa
const cargaExitosa = (seleccion,respuesta,seleccionManipular) => {
    
    switch (respuesta) {
        case 1:
            const nombre = prompt(`Ingrese el nuevo nombre para el producto ${seleccion}`);
            productos.forEach((item) => {
                if (item.nombre == seleccion) item.nombre = nombre
            })
            alert('EL NOMBRE SE HA MODIFICADO CON EXITO')
            volver(manipularProducto,seleccionManipular)
            break;
        case 2:
            const precio = Number(prompt(`Ingrese el nuevo precio del producto ${seleccion}` ))
            productos.forEach((item) => {
                if (item.nombre == seleccion) item.precio = precio
            })
            alert('EL PRECIO SE HA MODIFICADO CON EXITO')
            volver(manipularProducto,seleccionManipular)
            break;
        case 3:
            const stock = Number(prompt(`Ingrese el nuevo stock del producto ${seleccion}` ))
            productos.forEach((item) => {
                if (item.nombre == seleccion) item.cantidad = stock
            })
            alert('EL STOCK SE HA MODIFICADO CON EXITO')
            volver(manipularProducto,seleccionManipular)
            break;    
        default:
            break;
    }
}

//modifica productos cargados en el sistema
const manipularProducto = (seleccionManipular) => {
    
    if (seleccionManipular == 2) {
            //Le indica que seleccione el nombre del producto a mdificar y luego se fija si existe en el array
            const seleccion = prompt('Ingrese el nombre del producto que quiere modificar');
   
            const existe = productos.some(item => item.nombre == seleccion)
 
            //si existe le pide que ingrese por telcado que desea modificar de ese articulo, si no existe le pide 
            //nuevamente el ingreso correcto
            let respuesta;

            if (existe) {
                respuesta = Number(prompt('Ingrese que desea modificar:\n1) Nombre\n2) Precio\n3) Stock'));
            } else if (seleccion == null) {
                tipoGestion()
                return
            } else {
                alert('EL NOMBRE INGRESADO NO EXISTE COMO PRODUCTO')
                manipularProducto(seleccionManipular)
                return
            }   
            
            
            //Verifica la respuesta del usuario y en base a eso ejecuta la intruccion indicada
            if (respuesta > 3) {
                alert('SELECCION DE PROPIEDAD INCORRECTA')
                manipularProducto(seleccionManipular)
                return
            } else {
                cargaExitosa(seleccion,respuesta,seleccionManipular)
            }
        } else {

            const seleccion = prompt('Ingrese el nombre del producto que quiere Eliminar');
            const existe = productos.some(item => item.nombre == seleccion)
        
            if (existe) {
                const lugar = productos.findIndex(item => item.nombre == seleccion);
                productos.splice(lugar,1)
                alert('EL PRODUCTO SE ELIMINO EN FORMA EXITOSA')
                acumuladorId--
                volver(manipularProducto,seleccionManipular)
            } else {
                alert('EL NOMBRE INGRESADO NO EXISTE COMO PRODUCTO')
                tipoGestion()
            }   
            
        }
}
    
/************************** EJECUCION ***************************** */ 

alert('BIENVENIDO A LA GESTION DE CARGA DE PRODUCTOS')
tipoGestion();
alert('FIN DEL PROGRAMA');