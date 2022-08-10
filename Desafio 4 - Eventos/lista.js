
//recupero el array desde el storage
let productos = JSON.parse(localStorage.getItem('productos'));

//realizo el creado del template
const divLista = document.querySelector('#lista')
const temp = document.querySelector('#temp-productos')
const lsProduct = temp.content.querySelector('#tr-list')

productos.forEach((elem) => {
    let prodClone = lsProduct.cloneNode(lsProduct,true);
    prodClone.children[0].innerText = elem.tipo
    prodClone.children[1].innerText = elem.tamanio
    prodClone.children[2].innerText = '$ ' + elem.precio
    prodClone.children[3].innerText = elem.stock

    divLista.appendChild(prodClone)
})


//remover fila
const deleteRow = (btn) => {
    const row = btn.parentNode.parentNode;
    let tipo = row.children[0].innerText
    let tamanio = row.children[1].innerText
    row.parentNode.removeChild(row);

    //busca por nombre de producto dentro del array y lo elimina
    for (const key in productos) {
        if (productos[key].tipo == tipo && productos[key].tamanio == tamanio) {
            productos.splice(key,1)            
        }
    }

    //lo vuelve a subir al storage
    localStorage.setItem('productos',JSON.stringify(productos));
  }