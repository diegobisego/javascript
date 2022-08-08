let objeto = [{
    id:1,
    tipo: 'blsdadsadsdsadasdasdsadsaanco',
    tamanio: '34',
    precio: 324,
    stock: 4553
}]

boton.addEventListener('click', () => {
    
    const divLista = document.querySelector('#lista')
    const temp = document.querySelector('#temp-productos')
    const lsProduct = temp.content.querySelector('#tr-list')
    
    objeto.forEach((elem) => {
        let prodClone = lsProduct.cloneNode(lsProduct,true);
        prodClone.children[0].innerText = elem.tipo
        prodClone.children[1].innerText = elem.tamanio
        prodClone.children[2].innerText = elem.precio
        prodClone.children[3].innerText = elem.stock
    
        divLista.appendChild(prodClone)
    })
})