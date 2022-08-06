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

const form = document.querySelector('#form');

form.addEventListener('submit', (e) =>{
  e.preventDefault()
})



  /************************** DOM ***************************** */
 

const boton = document.querySelector('#btn-carga');

boton.addEventListener('click', () => {
  const tipoProducto = document.querySelector('#selTipo');
  const tipoTamPeso = document.querySelector('#selTamPeso');
  const precio = Number(document.querySelector('#inPrecio').value);
  const stock = Number(document.querySelector('#inStock').value);

  const selTipoProducto = tipoProducto.options[tipoProducto.selectedIndex].text;
  const selTipoTamPeso = tipoTamPeso.options[tipoTamPeso.selectedIndex].text;
  contador++

  const nuevoProducto = new Producto(contador,selTipoProducto,selTipoTamPeso,precio,stock)
  productos.push(nuevoProducto);

})


    
    




