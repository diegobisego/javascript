
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

        const index = productos.findIndex(item => item.id == elem.id);
        const parent = btn.parentNode.parentNode
        
        productos.splice(index,1)
        parent.parentNode.removeChild(parent)

        localStorage.setItem('productos',JSON.stringify(productos))
    })

    divLista.appendChild(prodClone)
})


//remover fila

// btnRemover.addEventListener('click', () => {
      
//     const parent = btnRemover.parentNode.parentNode
//     // indice = Number(parent.children[0].innerText)

//     for (const key in productos) {
//         if (key == parent.rowIndex-1) {
//             productos.splice(key,1)
//             parent.parentNode.removeChild(parent)           
//         }
//     }

//     localStorage.setItem('productos',JSON.stringify(productos));
// })