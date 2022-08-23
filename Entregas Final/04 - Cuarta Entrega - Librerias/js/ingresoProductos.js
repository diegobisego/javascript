
//evito el reinicio de la pagina
const form = document.querySelector('#form');
form.addEventListener('submit', (e) =>{
  e.preventDefault()
})  


  /************************** ARRAYS ADICIONALES ***************************** */

//Carga el select tamaño/peso de productos desd el array
let tamTipo = ['800 Gms.','1 Kg.','2 Kgs.','5 kgs.','1 Lt.','2 Lts.','5 Lts.','10 Lts.','20 Lts.',
              'Medianos','Grandes Color','Grandes Blancos'];
const selTamPeso = document.querySelector('#selTamPeso')


for (const i of tamTipo) {
  const option = document.createElement('option');
  selTamPeso.appendChild(option)
  option.innerHTML = i
  option.setAttribute('value',tamTipo[i])
}



  /************************** ARRAYS DESDE STORAGE ***************************** */

//recupero del local por el cambio de pagina a lista de precios
let productos = JSON.parse(localStorage.getItem('productos')) || [];
let contador = JSON.parse(localStorage.getItem('contador')) || 0;



  /************************** DOM ***************************** */
 
//recupero el boton cargar producto
const boton = document.querySelector('#btn-carga');

//traigo por dom todos los textbox y select
let tipoProducto = document.querySelector('#inTipo');
let tipoTamPeso = document.querySelector('#selTamPeso');
let precio = document.querySelector('#inPrecio');
let stock = document.querySelector('#inStock');




//evento de boton
boton.addEventListener('click', () => { 
  
  //traigo los textos de los select
  const selTipoTamPeso = tipoTamPeso.options[tipoTamPeso.selectedIndex].text;

  //Verifico si el array esta vacio, se llena
  if (productos == "") {
    nuevoProducto(tipoProducto,selTipoTamPeso,precio,stock)
    liProductos.classList.toggle('not-active')
    liListaProductos.classList.toggle('not-active') 
    return 
  }
  
  //verifico que no cargue 2 veces el mismo producto, sino lo cargo  
  for (const key in productos) {
    if (productos[key].tipo == tipoProducto && productos[key].tamanio == selTipoTamPeso) {
      mensajeCarga('El Producto que desea cargar ya se encuentra en la lista!', 'danger')
      setTimeout(() => div.parentNode.removeChild(div),2000)
      form.reset()
      return            
    }
  }

  nuevoProducto(tipoProducto,selTipoTamPeso,precio,stock);
});


  /************************** FUNCIONES ADICIONALES ***************************** */
 


const nuevoProducto = (tipoProducto,selTipoTamPeso,precio,stock) => {
      
  //contador de ID
  contador++
  //creo y apencheo el producto al array
  const nuevoProducto = new Producto(contador,tipoProducto.value,selTipoTamPeso,precio.value,stock.value)
  productos.push(nuevoProducto);  

  //Cargo el nuevo array al local junto con el contador
  localStorage.setItem('productos',JSON.stringify(productos));
  localStorage.setItem('contador',contador);

  //reseteo el formulario
  form.reset()

  setTimeout(() => div.parentNode.removeChild(div),2000)
  
  //sweet carga de producto ok
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Producto cargado con Exito',
    showConfirmButton: false,
    timer: 2000
  })
  return
}


