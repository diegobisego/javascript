

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

  const divLista = document.querySelector('#lista')
  const temp = document.querySelector('#temp-productos')
  const lsProduct = temp.content.querySelector('#tr-list')

  let prodClone
  
  productos.forEach((elem) => {
      prodClone = lsProduct.cloneNode(lsProduct,true);
      prodClone.children[0].innerText = elem.tipo
      prodClone.children[1].innerText = elem.tamanio
      prodClone.children[2].innerText = elem.precio
      prodClone.children[3].innerText = elem.stock
  
      
  })

  divLista.appendChild(prodClone)

});

// let objeto = [{
//     id:1,
//     tipo: 'blsdadsadsdsadasdasdsadsaanco',
//     tamanio: '34',
//     precio: 324,
//     stock: 4553
// }]

// const cambio = document.querySelector('#cambio-listar-productos')


// cambio.addEventListener('click', () => {
//     debugger
//     const divLista = document.querySelector('#lista')
//     const temp = document.querySelector('#temp-productos')
//     const lsProduct = temp.content.querySelector('#tr-list')
    
//     objeto.forEach((elem) => {
//         let prodClone = lsProduct.cloneNode(lsProduct,true);
//         prodClone.children[0].innerText = elem.tipo
//         prodClone.children[1].innerText = elem.tamanio
//         prodClone.children[2].innerText = elem.precio
//         prodClone.children[3].innerText = elem.stock
    
//         divLista.appendChild(prodClone)
//     })
// })