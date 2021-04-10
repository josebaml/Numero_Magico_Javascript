/*
1 - Crear un número aleatorio entre 1 y 100.
2 - Esperar la cargar de la página y deshabilitar el botón de enviar.
3 - Esperar el evento en el que el usuario introduce un número y comprobar con la primera validación (cliente) y habilitar botón. 
4 - botón enviar y validar con javascript el valor del campo introducido, si es correcto comienza el juego.
*/

//Variables
let numMagico = null;

let intentos = null;

const btnEnviar = document.querySelector('#enviar');

const inputNumero = document.querySelector('#numero');

const salida = document.querySelector('#salida');

//Eventos
eventListeners();
function eventListeners(){
    /*
    //El evento DOMContentLoaded es disparado cuando el documento HTML ha sido completamente cargado y parseado, 
    sin esperar hojas de estilo, images y subframes para  finalizar la carga. Un evento muy diferente - load - debería 
    ser usado solo para detectar una carga completa de la página. Es un error increíblemente popular usar load 
    cuando DOMContentLoaded sería mucho más apropiado
    */
    document.addEventListener('DOMContentLoaded', IniciarApp);
    
    btnEnviar.addEventListener('click', validarNumero);
}

//Funciones
function IniciarApp(){
    numMagico = Math.floor(Math.random()*100)+1;
    console.log(numMagico);
    inputNumero.focus();
    intentos = 1;
}

function validarNumero(e){
    e.preventDefault();

    let miNumero = parseInt(inputNumero.value);

     if(Number.isInteger(miNumero) && !Number.isNaN(miNumero) && miNumero > 0 && miNumero <= 100){
         
        compruebaNumero(miNumero)
     }else{

        mensajeError('El valor introducido no es correcto, intentalo de nuevo');
     }
}

// Comprueba si el número es mayor o menor
function compruebaNumero(numero){

    if(numero > numMagico){
        mensajeNumero('El valor introducido es mayor que el número mágico', intentos);
        intentos++;
    }else if(numero < numMagico){
        mensajeNumero('El valor introducido es menor que el número mágico', intentos);
        intentos++;
    }else{
        mensajeNumero('El valor introducido es el número mágico, enhorabuena!!!');
        IniciarApp();
    }

    if(intentos > 6){
        mensajeError('No has conseguido adivinar el número mágico. Puedes volver a intentarlo');
        IniciarApp();
    }
    
}

// Genera un aviso de error para que introduzca un valor válido
function mensajeError(texto){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = texto;
    mensajeError.classList.add('invalid');
    salida.appendChild(mensajeError);
    deshabilitarBoton(btnEnviar);
    deshabilitarBoton(inputNumero);
    setTimeout(() =>  {
        mensajeError.remove();

        inputNumero.value = '';
        inputNumero.focus();
        habilitarBoton(btnEnviar);
        habilitarBoton(inputNumero);

   }, 3000);
}

function mensajeNumero(texto, intentos = 0){

    const mensajeNumero = document.createElement('p');

    if(intentos === 0)
        mensajeNumero.textContent = `${texto}`;
    else
        mensajeNumero.textContent = `${texto} llevas ${intentos} intentos`;
    mensajeNumero.classList.add('valid');
    salida.appendChild(mensajeNumero);
    deshabilitarBoton(btnEnviar);
    deshabilitarBoton(inputNumero);

    setTimeout(() =>  {
        mensajeNumero.remove();

        inputNumero.value = '';
        inputNumero.focus();
        habilitarBoton(btnEnviar);
        habilitarBoton(inputNumero);

   }, 3000);

}

function habilitarBoton(boton){
    boton.disabled = false;
    boton.classList.remove('opacity_50');
    boton.classList.add('opacity_1');
}

function deshabilitarBoton(boton){
    boton.disabled = true;
    boton.classList.remove('opacity_1');
    boton.classList.add('opacity_50');
}