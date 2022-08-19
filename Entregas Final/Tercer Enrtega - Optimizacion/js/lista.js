
//recupero el array desde el storage
let productos = JSON.parse(localStorage.getItem('productos'));


//realizo el creado del template
const divLista = document.querySelector('#lista')
const temp = document.querySelector('#temp-productos')
const lsProduct = temp.content.querySelector('#tr-list')

productos.forEach((elem) => {
    
    let prodClone = lsProduct.cloneNode(lsProduct,true);
    prodClone.children[0].innerText = elem.id
    prodClone.children[1].innerText = elem.tipo
    prodClone.children[2].innerText = elem.tamanio
    prodClone.children[3].innerText = '$ ' + elem.precio
    prodClone.children[4].innerText = elem.stock
    prodClone.children[5].innerHTML = `<button class="btn btn-danger">Eliminar</button>`   
    
    let btn = prodClone.querySelector("button");    

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
              const index = productos.findIndex(item => item.id == elem.id);
              const parent = btn.parentNode.parentNode
            
              productos.splice(index,1)
              parent.parentNode.removeChild(parent)
              localStorage.setItem('productos',JSON.stringify(productos))

              Swal.fire('¡Producto Eliminado!', '', 'success')

            } else if (result.isDenied) {
              Swal.fire('No se elimino el producto', '', 'info')
            }
          })
    })

    divLista.appendChild(prodClone)
});





const eliminarDelCarrito = (idProducto) => {
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
		  confirmButton: 'btn btn-success',
		  cancelButton: 'btn btn-danger'
		},
		buttonsStyling: false
	  })
	  
	  swalWithBootstrapButtons.fire({
		title: 'Estas seguro que deseas eliminar este producto?',
		icon: 'warning',
		showCancelButton: true,
		confirmButtonText: 'si,eliminar!',
		cancelButtonText: 'No, cancelar!',
		reverseButtons: true
	  }).then((result) => {
		if (result.isConfirmed) {
		  swalWithBootstrapButtons.fire(
			'El producto ha sido eliminado.',
			'success'
		  )
		} else if (
		  /* Read more about handling dismissals below */
		  result.dismiss === Swal.DismissReason.cancel
		) {
		  swalWithBootstrapButtons.fire(
			'Cancelled',
			'Your imaginary file is safe :)',
			'error'
		  )
		}
	  })
	const item = carrito.find((producto) => producto.id === idProducto);
	const indice = carrito.indexOf(item); //Busca el elemento q yo le pase y nos devuelve su indice.
	carrito.splice(indice, 1); //Le pasamos el indice de mi elemento ITEM y borramos
	actualizarCarrito(); //Llamamos a la funcion de actualizar cada vez que se modifica el carrito
   
};