/************************** CLASE ***************************** */
//clase
class Producto {
    constructor(id, tipo, tamanio, precio,stock) {
        (this.id = id),
        (this.tamanio = tamanio),
        (this.tipo = tipo),
        (this.precio = precio),
        (this.stock = stock);
    }
    
    // getters y setters

    // getTipo= () => {
    //   return this.tipo
    // }

    // setTipo = (t) => {
    //   this.tipo = t;
    // }

    // getTamanio = () => {
    //   return this.tamanio
    // }

    // setTamanio = (t) => {
    //   this.tamanio = t;
    // }

    // getPrecio= () => {
    //   return this.precio
    // }

    // setPrecio = (p) => {
    //   this.precio = n;
    // }

    // getStock = () => {
    //   return this.stock
    // }

    // setStock = (s) => {
    //   this.stock = s;
    // }

 
  }
  debugger
  /************************** ARRAYS DESDE STORAGE ***************************** */

//recupero del local por el cambio de pagina a lista de precios
let productos = localStorage.getItem('productos');
let contador = localStorage.getItem('contador')

//veridfico si existe contador y array, sino los cargo desde el local
if (productos == null) {  
  productos = [];
  contador = 0
} else {
  productos = JSON.parse(localStorage.getItem('productos'));
  contador = JSON.parse(localStorage.getItem('contador'));
}  
 


  /************************** DOM ***************************** */
 
//recupero el boton cargar producto
const boton = document.querySelector('#btn-carga');

//evento de boton
boton.addEventListener('click', () => {
  
  //evito el reinicio de la pagina
  const form = document.querySelector('#form');
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
  })  


  //traigo por dom todos los textbox y select
  const tipoProducto = document.querySelector('#selTipo');
  const tipoTamPeso = document.querySelector('#selTamPeso');
  const precio = Number(document.querySelector('#inPrecio').value);
  const stock = Number(document.querySelector('#inStock').value);

  //traigo los textos de los select
  const selTipoProducto = tipoProducto.options[tipoProducto.selectedIndex].text;
  const selTipoTamPeso = tipoTamPeso.options[tipoTamPeso.selectedIndex].text;

  //Verifico si el array esta vacio, se llena
  if (productos == "") {
    nuevoProducto(selTipoProducto,selTipoTamPeso,precio,stock)
    return 
  }
  
  //verifico que no cargue 2 veces el mismo producto, sino lo cargo
  
  for (const key in productos) {
    if (productos[key].tipo == selTipoProducto && productos[key].tamanio == selTipoTamPeso) {
      mensajeCarga('El Producto que desea cargar ya se encuentra en la lista!', 'danger')
      setTimeout(() => div.parentNode.removeChild(div),2000)
      form.reset()
      return            
    }
  }
  nuevoProducto(selTipoProducto,selTipoTamPeso,precio,stock);
});


  /************************** FUNCIONES ADICIONALES ***************************** */
 


  const nuevoProducto = (selTipoProducto,selTipoTamPeso,precio,stock) => {
    debugger
    //contador de ID
    contador++

    //creo y apencheo el producto al array
    const nuevoProducto = new Producto(contador,selTipoProducto,selTipoTamPeso,precio,stock)
    productos.push(nuevoProducto);  
  
    //Cargo el nuevo array al local junto con el contador
    localStorage.setItem('productos',JSON.stringify(productos));
    localStorage.setItem('contador',contador);
  
    //reseteo el formulario
    form.reset()
  
    //muestro mensaje de exito de carga que se cierra en 2 segundos
    mensajeCarga('Producto cargado con exito!', 'success')
    setTimeout(() => div.parentNode.removeChild(div),2000) 
    return
  }

//creacion y declaracion de funcion para mensaje de exito
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const div = document.createElement('div')

const mensajeCarga = (mensaje, tipo) => {  
  div.innerHTML = '<div class="alert alert-' + tipo + ' alert-dismissible" role="alert">' + mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  alertPlaceholder.append(div)
}


