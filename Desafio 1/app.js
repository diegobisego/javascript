/* PEDIDOS PARA DISTRIBUIDORA DE ALIMENTOS
- Se realiza un script para realizar pedidos mediante opciones seleccionadas
*/


/************************** ERRORES ***************************** */ 

//Error al contestar mal tipo de gestion
const errorRespuestaTipoGestion = (seleccion) => {
    debugger
    while (seleccion < 1 || seleccion > 3 || isNaN(seleccion)) {
        alert('Ha ingresado una respuesta erronea, por favor ingrese nuevamente una opcion');
        seleccion = Number(prompt('A Continuacion seleccione en numero que desea realizar: \n 1) Comprar \n 2) Pagar \n 3) Sugerencias'));
    }

    seleccionProducto(seleccion)
}

//Error al contestar mal tipo de gestion
const errorRespuestaTipoProducto = () => {
debugger
    let seleccion = 0;

    while (seleccion < 1 || seleccion > 3 || isNaN(seleccion)) {
        alert('Ha ingresado una respuesta erronea, por favor ingrese nuevamente una opcion');
        seleccion = Number(prompt('Seleccione el tipo de producto \n 1) Aceite \n 2) Aceitunas \n 3) Huevos'));  
          
    }
    seleccionProducto(seleccion);
}

/************************** GENERAL ***************************** */ 

//Proceso de pedido
const procesoPedido = () => {
    debugger
    let cantidad = Number(prompt('Ingrese la cantidad a comprar'));

    while (isNaN(cantidad) || cantidad < 0) {
        alert('Debe ingresar un numero entero, ingrese la cantidad a comprar');
        cantidad = Number(prompt('Ingrese la cantidad a comprar'));
    }

    alert(`Se esta procesando su pedido... Pedido realizado con exito!`);
}


//seleccion de producto 
const seleccionProducto = () => {
    debugger
    let seleccion = Number(prompt('Seleccione el tipo de producto \n 1) Aceite \n 2) Aceitunas \n 3) Huevos'));  

    if (seleccion < 1 || seleccion > 3 || isNaN(seleccion)) {
        errorRespuestaTipoProducto()
    } else {
        procesoPedido()
    }
    
}

//Agrega credito a la cuenta

const agregarCredito = () => {
    let credito = Number(prompt('Ingrese en forma numerica el credito a cargar en su cuenta'));
    while (isNaN(credito)) {
        alert('No ha ingresado un valor valida')
        credito = Number(prompt('Ingrese en forma numerica el credito a cargar en su cuenta'));
    }

    alert(`Proceso realizado con exito! Se han cargado en su cuenta ${credito} puntos de credito`);
}

const agregarComentario = () => {
    let comentario = prompt('Ingrese el comentario que nos desea dejar!');
    alert('Se ha guardado su comentario con exito! \n Comentario: \n' + comentario);
}


//seleccion tipo de gestion 
const tipoGestion = (seleccion) => {
    debugger
    if (seleccion < 1 || seleccion > 3 || isNaN(seleccion)) {

        errorRespuestaTipoGestion(seleccion);
        
    } else {

        switch (seleccion) {
            case 1:
                seleccionProducto();
                break;
            case 2:
                agregarCredito();
                break;
            case 3:
                agregarComentario();
                break;                   
        }  
    }
    
}


/************************** Principal ***************************** */ 
const programa = () => {
    const seleccion = Number(prompt('A Continuacion, seleccione en numero lo que desea realizar: \n 1) Comprar \n 2) Agregar Credito \n 3) Sugerencias'))
    tipoGestion(seleccion);
    
}



/************************** EJECUCIONES ***************************** */ 

alert('BIENVENIDO AL PORTAL DE AUTOGESTION')
programa()