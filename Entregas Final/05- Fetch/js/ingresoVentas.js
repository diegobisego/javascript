const form = document.querySelector('#form');
form.addEventListener('submit', (e) =>{
  e.preventDefault()
});

const formVentas = document.querySelector('#formVentas');
formVentas.addEventListener('submit', (e) =>{
  e.preventDefault()
});

/************* FETCH ******************/ 

let productos = [];

//Metodo GET para FETCH de productos, para luego comparar contenido
fetch('http://localhost:5000/productos')
  .then((res) => res.json())
  .then((data) => {
    productos.push(...data);
    cargaProductos() 
});


//template para lista de venta
const tVentas = document.querySelector('#tVentas'); //primero
const tempDetalleVenta = document.querySelector('#tempDetalleVenta');//segundo
const trTemp = tempDetalleVenta.content.querySelector('#trTemp');


//ventas
const idVtaProd = document.querySelector('#idVtaProd')
const btnagregarListaVenta = document.querySelector('#btnagregarListaVenta');
const precioUnitario = document.querySelector('#inPrecUni')
const cantidad = document.querySelector('#inCantidadVenta')

/************* SE CARGAN LOS PRODUCTOS ACTIVOS EN EL SISTEMA ******************/ 

const cargaProductos = () => {
  for (const i in productos) {
    const option = document.createElement('option');
    idVtaProd.appendChild(option)
    option.innerHTML = productos[i].tipo
    option.setAttribute('value',i)
  }
}

/************* SELECT CLIENTES******************/ 





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
let total = 0;
console.log(total)

btnagregarListaVenta.addEventListener('click', () => {
  const producto = idVtaProd.options[idVtaProd.selectedIndex].text;
  const cant = Number(cantidad.value);
  const precio = Number(precioUnitario.value);
  contador++

  const prodClone = trTemp.cloneNode(trTemp,true)
  prodClone.children[0].innerText = contador
  prodClone.children[1].innerText = producto
  prodClone.children[2].innerText = cant
  prodClone.children[3].innerText = precio * cant

  total += precio * cant

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
          if (result.isConfirmed) {
            const index = listaProducto.findIndex(item => item.id == contador);
            const parent = btn.parentNode.parentNode
            total  -= precio * cant
            idTotalVenta.innerHTML = total

            listaProducto.splice(index,1)
            parent.parentNode.removeChild(parent)
            Swal.fire('¡Producto Eliminado!', '', 'success')
          } else if (result.isDenied) {
            Swal.fire('No se elimino el producto', '', 'info')
          }
      })
  })

  tVentas.appendChild(prodClone)
  idTotalVenta.innerHTML = total
  form.reset()
})






/************* FINALIZAR VENTA ******************/ 

const btnFinalizarVenta = document.querySelector('#btnFinalizarVenta');

btnFinalizarVenta.addEventListener('click', () => {



})


