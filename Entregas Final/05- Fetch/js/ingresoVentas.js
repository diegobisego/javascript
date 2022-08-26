const form = document.querySelector('#form');
form.addEventListener('submit', (e) =>{
  e.preventDefault()
});

const formVentas = document.querySelector('#formVentas');
formVentas.addEventListener('submit', (e) =>{
  e.preventDefault()
});

/************* VARIABLES ******************/ 
let productos = JSON.parse(localStorage.getItem('productos'));
//template
const tVentas = document.querySelector('#tVentas'); //primero
const tempDetalleVenta = document.querySelector('#tempDetalleVenta');//segundo
const trTemp = tempDetalleVenta.content.querySelector('#trTemp');


//ventas
const idVtaProd = document.querySelector('#idVtaProd')
const btnagregarListaVenta = document.querySelector('#btnagregarListaVenta');
const precioUnitario = document.querySelector('#inPrecUni')
const cantidad = document.querySelector('#inCantidadVenta')

/************* SE CARGAN LOS PRODUCTOS ACTIVOS EN EL SISTEMA ******************/ 

for (const i of productos) {
  const option = document.createElement('option');
  idVtaProd.appendChild(option)
  option.innerHTML = i.tipo
  option.setAttribute('value',i.tipo)
}


/************* PRECIO DEL PRODUCTO SEGUN LA SELECCION ******************/ 

idVtaProd.addEventListener('change', () => {
  const seleccion = idVtaProd.options[idVtaProd.selectedIndex].text;
  
  productos.find(element => {
      element.tipo == seleccion ? precioUnitario.value = element.precio : null
  });

})

/************* SE AGREGA VENTA A LA LISTA ******************/ 

let listaProducto = [];
let contador = 0;

btnagregarListaVenta.addEventListener('click', () => {
  const producto = idVtaProd.options[idVtaProd.selectedIndex].text;
  const cant = Number(cantidad.value);
  const precio = Number(precioUnitario.value);
  contador++

  const prodClone = trTemp.cloneNode(trTemp,true)
  prodClone.children[0].innerText = contador
  prodClone.children[1].innerText = producto
  prodClone.children[2].innerText = cant
  prodClone.children[3].innerText = precio

  //evento para eliminar el producto
  const nuevoProdcuto = new ProductoVenta(contador,producto,cant,precio)
  listaProducto.push(nuevoProdcuto)

  let btn = prodClone.querySelector("#btnEliminar");    

    //evento para eliminar el producto
  btn.addEventListener('click', () => {
      //sweetAlert
      Swal.fire({
          title: '¿Desea eliminar el producto?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Eliminar',
          denyButtonText: `Volver`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            const index = listaProducto.findIndex(item => item.id == contador);
            console.log(index)
            const parent = btn.parentNode.parentNode
          
            listaProducto.splice(index,1)
            parent.parentNode.removeChild(parent)
            Swal.fire('¡Producto Eliminado!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('No se elimino el producto', '', 'info')
          }
      })
  })

  tVentas.appendChild(prodClone)

  console.log(nuevoProdcuto)

})


