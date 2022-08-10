
debugger
/************************** CLASE ***************************** */

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
  
  /************************** ARRAYS DESDE STORAGE ***************************** */

let productos = localStorage.getItem('productos');
let contador = localStorage.getItem('contador')

if (productos == null) {
  productos = [];
  contador = 0
} else {
  productos = JSON.parse(localStorage.getItem('productos'));
  contador = JSON.parse(localStorage.getItem('contador'));
}  
 


  /************************** DOM ***************************** */
 

const boton = document.querySelector('#btn-carga');

boton.addEventListener('click', () => {
  const form = document.querySelector('#form');
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
  })
    
  const tipoProducto = document.querySelector('#selTipo');
  const tipoTamPeso = document.querySelector('#selTamPeso');
  const precio = Number(document.querySelector('#inPrecio').value);
  const stock = Number(document.querySelector('#inStock').value);

  const selTipoProducto = tipoProducto.options[tipoProducto.selectedIndex].text;
  const selTipoTamPeso = tipoTamPeso.options[tipoTamPeso.selectedIndex].text;
  contador++
  
  const nuevoProducto = new Producto(contador,selTipoProducto,selTipoTamPeso,precio,stock)
  productos.push(nuevoProducto);  

  localStorage.setItem('productos',JSON.stringify(productos));
  localStorage.setItem('contador',contador);

  //reseteo el formulario
  form.reset()

  //muestro mensaje de exito de carga que se cierra en 2 segundos
  mensajeCarga('Producto cargado con exito!', 'success')
  setTimeout(() => div.parentNode.removeChild(div),2000) 

});


  /************************** FUNCIONES ADICIONALES ***************************** */
 

//creacion y declaracion de funcion para mensaje de exito
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const div = document.createElement('div')

const mensajeCarga = (mensaje, tipo) => {  
  div.innerHTML = '<div class="alert alert-' + tipo + ' alert-dismissible" role="alert">' + mensaje + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
  alertPlaceholder.append(div)
}


