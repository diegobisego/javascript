debugger
let textoSaludo = "¿Querés ser parte de nuestra comunidad amantes de las tipografías? Contestá la siguiente trivia con un si o no y unite al club, ¿Comenzamos?"
alert (textoSaludo)


let contadorRespCorrect = 1
let contadorRespIncorret = 1
let custionario = 0


const respuesta2 = (parametro) => { 
    debugger
    if (parametro === "no") {
    contadorRespCorrect++
    } else {
    contadorRespIncorret++
    }
}

const respuesta1= (parametro) => {
debugger
    if (parametro === "si") {
        contadorRespCorrect++
        } else  {
        contadorRespIncorret++
        }
}

const cuestionario = () => {
debugger
        let primeraPregunta = prompt ("¿Roboto es una tipografia con serifas?")
        respuesta2(primeraPregunta);
    
        let segundaPregunta = prompt ("¿Es Comic Sans una de las fuentes mas usadas en impresion editorial?")
        respuesta2(segundaPregunta);
    
        let terceraPregunta = prompt ("¿Una fuente Sans Serif es lo mismo que una fuente palo seco?")
        respuesta1(terceraPregunta);
        
        let cuartaPregunta = prompt ("¿Futura fue una tipografia diseñada por un tipografo amelán?")
        respuesta1(cuartaPregunta);
        
}

cuestionario();

if ( contadorRespIncorret > 1 && contadorRespIncorret <= 5) {
    
    const resp = confirm("¡Algunas de tus respuestas son incorrectas! intenta de nuevo el cuestionario")
    custionario++
    if (resp) {
            cuestionario()
    }else {
            alert('Gracias por participar!')
    }       
        
} else if (contadorRespCorrect == 5) {
    alert ("¡Felicidades haz respondido correctamente el cuestionario! Ya sos parte de nuestro club. Es momento de buscar tus tipografías")
        
}

if (custionario === 2  ) {
    debugger
    alert ("has agotado el numero de intentos")
} 