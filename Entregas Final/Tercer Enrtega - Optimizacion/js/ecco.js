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
//recupero el array desde el storage
// let productos = JSON.parse(localStorage.getItem('productos'));

// //realizo el creado del template
// const divLista = document.querySelector('#lista')
// const temp = document.querySelector('#temp-productos')
// const lsProduct = temp.content.querySelector('#tr-list')

// productos.forEach((elem) => {
//     let prodClone = lsProduct.cloneNode(lsProduct,true);
//     prodClone.children[0].innerText = elem.id
//     prodClone.children[1].innerText = elem.tipo
//     prodClone.children[2].innerText = elem.tamanio
//     prodClone.children[3].innerText = '$ ' + elem.precio
//     prodClone.children[4].innerText = elem.stock
//     prodClone.children[5].innerHTML = `<button class="btn btn-danger">Eliminar</button>`   
    
//     let btn = prodClone.querySelector("button");    

//     //evento para eliminar el producto
//     btn.addEventListener('click', () => {

//         const index = productos.findIndex(item => item.id == elem.id);
//         const parent = btn.parentNode.parentNode
        
//         productos.splice(index,1)
//         parent.parentNode.removeChild(parent)

//         localStorage.setItem('productos',JSON.stringify(productos))
//     })