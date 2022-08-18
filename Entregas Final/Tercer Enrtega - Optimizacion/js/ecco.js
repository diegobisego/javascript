//busca el array en localStorage y carga el template

let productos = JSON.parse(localStorage.getItem('productos'));

//realizo el creado del template
const divProduct = document.querySelector('#div-product');
const temp = document.querySelector('#temp-product');
const ftListEcco = temp.content.querySelector('#ftListEcco');
const spPrecio = temp.content.querySelector('#spanPrecio')


productos.forEach(elem => {
    
    let prodClone = ftListEcco.cloneNode(ftListEcco,true)
    prodClone.children[1].innerText = elem.tipo
    prodClone.children[2].children[0].innerText = elem.precio


    divProduct.appendChild(prodClone)
});
