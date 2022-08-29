
//evito el reinicio de la pagina
const form = document.querySelector('#form');
form.addEventListener('submit', (e) =>{
  e.preventDefault()
})  


  /************************** ARRAYS ADICIONALES ***************************** */

//Carga el select tamaño/peso de productos desd el array
let tamTipo = ['G','Kg','L','Medianos','Grandes Color','Grandes Blancos'];
const idUM = document.querySelector('#idUM')


for (const i of tamTipo) {
  const option = document.createElement('option');
  idUM.appendChild(option)
  option.innerHTML = i
  option.setAttribute('value',tamTipo[i])
}



  /************************** FETCH GET ***************************** */


let productos = [];

//Metodo GET para FETCH de productos, para luego comparar contenido
fetch('http://localhost:5000/Productos')
  .then((res) => res.json())
  .then((data) => {
    productos.push(...data); 
});


  /************************** DOM Y EVENTO AGREGAR ***************************** */
 
//recupero el boton cargar producto
const boton = document.querySelector('#btn-carga');

//traigo por dom todos los textbox y select
let tipoProducto = document.querySelector('#inTipo');
let tipoTamPeso = document.querySelector('#idUM');
let precio = document.querySelector('#inPrecio');
let stock = document.querySelector('#inStock');

//evento de boton
boton.addEventListener('click', () => { 
  debugger
  
  //traigo los textos de los select
  const selTipoTamPeso = tipoTamPeso.options[tipoTamPeso.selectedIndex].text;

  //Verifico si el array esta vacio, se llena
  if (productos == "") {
    PostProducto(tipoProducto,selTipoTamPeso,precio,stock)
    return 
  }
  
  //verifico que no cargue 2 veces el mismo producto  
  for (const key in productos) {
    if (productos[key].tipo == tipoProducto.value && productos[key].tamanio == selTipoTamPeso) {
      alertCarga(2)
      return     
    }
  }

  PostProducto(tipoProducto,selTipoTamPeso,precio,stock);  
});

  /************************** FUNCIONES ADICIONALES ***************************** */
 
  const alertCarga = (tipo) => {
    debugger
    if (tipo == 1) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Producto cargado con Exito',
        showConfirmButton: false,
        timer: 2000
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Producto duplicado',
        text: 'El producto ya se encuentra cargado!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  }


const PostProducto = (tipoProducto,selTipoTamPeso,precio,stock) => {
  debugger

  fetch('http://localhost:5000/Productos', {
  method: 'POST',
  headers: {
    'content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    tipo: tipoProducto.value,
    tamanio: selTipoTamPeso,
    precio: precio.value,
    stock: stock.value

  })
})
  .then((resp) => resp.json())
  .then((data) => {
    alertCarga(1);
    })
}


