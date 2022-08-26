const form = document.querySelector('#form');
form.addEventListener('submit', (e) =>{
  e.preventDefault()
})  

  /************************** ARRAYS CIUDADES ***************************** */

// ciudades
let ciudades = ['Villa Maria','Villa Nueva','Cordoba Capital'];
const idCiudad = document.querySelector('#idCiudadCliente')


for (const i of ciudades) {
  const option = document.createElement('option');
  idCiudad.appendChild(option)
  option.innerHTML = i
  option.setAttribute('value',ciudades[i])
}


  /************************** ARRAYS FORMA DE PAGO ***************************** */

//Carga el select tipo de pago
let tipoPagoArr = ['Contado Efectivo','Transferencia','Cheque'];

//template forma de pago
const tipoPago = document.querySelector('#tipoPago')
const tempTipoPAgo = document.querySelector('#tempTipoPAgo')
const divTipoPago = tempTipoPAgo.content.querySelector('#divTipoPago')
debugger

tipoPagoArr.forEach((elem,index) => {
    debugger
    console.log(elem)
    let prodClone = divTipoPago.cloneNode(divTipoPago,true);
    prodClone.children[0].setAttribute('id',index)
    prodClone.children[1].innerText = elem;
    if (index == 0) {
        prodClone.children[0].setAttribute('checked','true')
    }    


    tipoPago.appendChild(prodClone)
})

