'use strict'

// DOM
const inputNumber = document.querySelector('.js_number');
const inputTryBtn = document.querySelector('.js_button');
const inputResetBtn = document.querySelector('.js_btnReset');
const clueElement = document.querySelector('.js_track');
const tryElement = document.querySelector('.js_try');

// Var solo del js
// cambiamos de const a let, para que cuando le demos al reset podamos reasignar un nuevo valor. 
let randomNumber = getRandomNumber(100);
console.log(randomNumber);
let counter = 0;

// funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

// Esta función nos aseguramos de que no sea string!!
function convertNumber() {
    const numberChoose = parseInt(inputNumber.value);
    return numberChoose
}

function checkNumber() {
    //esta variable la creamos para no estar llamando todo el rato a la función --> de esta manera la llamamos una sola vez y tenemos el resultado de esa llamada en una variable local!!
    const selectedNumber = convertNumber();
    if (selectedNumber === '') {
        writeClue('Esta vacio');
    } else if (isNaN(selectedNumber)) { // por si en el input hemos puesto type text en vez de number y meten texto!!
        writeClue('Debe introducir un numero');
    }
    else if (selectedNumber < 1 || selectedNumber > 100) {
        writeClue('El numero debe ser entre 1 y 100');
    }
    else if (selectedNumber > randomNumber) {
        writeClue('Es demasiado alto');
    } 
    else if (selectedNumber < randomNumber) {
        writeClue('Es demasiado bajo');
    } 
    else {
        writeClue('¡¡Has ganado!!');
    }
}

// funcion para darle el mensaje en los condicionales y no estar poniendo todo el rato innerHTML!
function writeClue(msj) {
    clueElement.innerHTML = msj;
}

// funcion para incrementar el contador de las veces que intentamos averiguar el Nº
function incrementCounter() {
    counter++;
    tryElement.innerHTML = counter;
}

// funcion para Resetear el contador.
function resetCounter() {
    tryElement.innerHTML = 0;
    counter = 0;
}

// funcion del boton prueba
function handleClick(event) {
    event.preventDefault();
    checkNumber();
    incrementCounter();
}

// función para lanzar la prueba pulsando Enter --> event.key === 'Enter' lo vemos con un c.log, mirando las propiedades del evento --> console.log(event); tambien nos valdría --> event.code === 'Enter' || event.keyCode === 13
function handleKeyUp(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        checkNumber();
        incrementCounter();
    }
}

// función para resetear el juego a cero en todos los campos --> como vendria por defecto!!
function handleReset(event) {
    event.preventDefault();
    inputNumber.value = '';
    writeClue('Pista: Escribe el número y dale a Prueba');
    resetCounter();
    randomNumber = getRandomNumber(100);
    console.log(randomNumber);
}


// evento
inputTryBtn.addEventListener('click' , handleClick);
inputNumber.addEventListener('keyup' , handleKeyUp);
inputResetBtn.addEventListener('click' , handleReset);

