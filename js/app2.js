//Variables
let numero = null;

let miNumero = document.querySelector('#numero').value;

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

    //inputNumero.addEventListener('input', validarNumero);
    
    inputNumero.addEventListener('input', (e) => {
        
        //console.log(e); // Mucha información...
        //console.log( e.type ); // Te dira sobre que elemento estamos trabajando...
        //console.log(e.target); // el input completo...
        //console.log(e.target.value) // lo que el usuario escribe...
       
        let miNumero = parseInt(e.target.value);

        if(Number.isInteger(miNumero) && !Number.isNaN(miNumero) && miNumero > 0 && miNumero <= 100){
            validarInput();
            inputNumero.classList.add('valid');
        }else{
            invalidarInput();
            inputNumero.classList.add('invalid');
        }
        
    });
    
    btnEnviar.addEventListener('submit', validarNumero);
}

//Funciones
function IniciarApp(){
    numero = Math.floor(Math.random()*100)+1;
    console.log(numero);
    invalidarInput();
}

function validarInput(){
    btnEnviar.disabled = false;
    inputNumero.classList.add('valid');
    btnEnviar.classList.add('opacity_1');
}

function invalidarInput(){
    btnEnviar.disabled = true;
    btnEnviar.classList.add('opacity_50');
    inputNumero.focus();
}

function validarNumero(e){
    e.preventDefault();

   console.log(miNumero);
    if(Number.isInteger(miNumero) && !Number.isNaN(miNumero) && miNumero > 0 && miNumero <= 100){
        validarInput();
        inputNumero.classList.add('valid');
        console.log('Si');
    }else{
        invalidarInput();
        inputNumero.classList.add('invalid');
        console.log('No');
    }

    /* Validación 2
    if(typeof miNumero === 'number' && miNumero !== NaN && miNumero > 0 && miNumero <= 100){
        console.log('Es un número');
        btnEnviar.disabled = false;
    }else{
        console.log('El campo está vacío, no es un número o es mayor de 100'); 
    }
    */
}