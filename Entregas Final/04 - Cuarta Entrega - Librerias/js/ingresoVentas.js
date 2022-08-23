/************* SE CARGAN LOS PRODUCTOS ACTIVOS EN EL SISTEMA ******************/ 

let productos = JSON.parse(localStorage.getItem('productos'));
const idVtaProd = document.querySelector('#idVtaProd')


for (const i of productos) {
  const option = document.createElement('option');
  idVtaProd.appendChild(option)
  option.innerHTML = i.tipo
  option.setAttribute('value',i.tipo)
}


/************* PRECIO DEL PRODUCTO SEGUN LA SELECCION ******************/ 

