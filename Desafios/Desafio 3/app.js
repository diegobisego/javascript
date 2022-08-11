

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

    getTipo= () => {
      return this.tipo
    }

    setTipo = (t) => {
      this.tipo = t;
    }

    getTamanio = () => {
      return this.tamanio
    }

    setTamanio = (t) => {
      this.tamanio = t;
    }

    getPrecio= () => {
      return this.precio
    }

    setPrecio = (p) => {
      this.precio = n;
    }

    getStock = () => {
      return this.stock
    }

    setStock = (s) => {
      this.stock = s;
    }

 
  }
  
  /************************** ARRAYS ***************************** */
  
let productos = [];
let contador = 0

  /************************** DOM ***************************** */
 
//obtengo el boton de agregar producto
const boton = document.querySelector('#btn-carga');


//funcion click para agregar prodcuto
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

  //contador de ID
  contador++;

  //creo y apencheo el producto al array
  const nuevoProducto = new Producto(contador,selTipoProducto,selTipoTamPeso,precio,stock);
  productos.push(nuevoProducto);

  //realizo el creado del template
  const divLista = document.querySelector('#lista');
  const temp = document.querySelector('#temp-productos');
  const lsProduct = temp.content.querySelector('#tr-list');

  let prodClone
  
  productos.forEach((elem) => {
      prodClone = lsProduct.cloneNode(lsProduct,true)
      prodClone.children[0].innerText = elem.tipo
      prodClone.children[1].innerText = elem.tamanio
      prodClone.children[2].innerText = '$ ' + elem.precio
      prodClone.children[3].innerText = elem.stock      
  });

  divLista.appendChild(prodClone);

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


//remover fila
const deleteRow = (btn) => {
  const row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}