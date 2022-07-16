let producto1 = prompt('Ingrese el producto 1');
let producto2 = prompt('Ingrese el producto 2');
let producto3 = prompt('Ingrese el producto 3');
let producto4 = prompt('Ingrese el producto 4');

if (producto1 != '' && producto2 != '' && producto3 != '' && producto4 != '') {
    alert(`La lista de productos es \n *${producto1}\n *${producto2}\n *${producto3}\n *${producto4}`);
} else {
    alert('ERROR');
}
 
