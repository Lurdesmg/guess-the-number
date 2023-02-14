'use strict'

// Variables
const yourNumber = document.querySelector('.js_number');
const button = document.querySelector('.js_button');
const track = document.querySelector('.js_track');
const tryNumber = document.querySelector('.js_try');
const randomNumber = getRandomNumber(100);
let count = 0;
console.log(randomNumber);

// funciones
function number() {
    const numberChoose = parseInt(yourNumber.value);
    return numberChoose
}

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function numberThink () {
    if (number()> randomNumber) {
        track.value = 'Demasiado alto';
    }
    else if (number()< randomNumber){
        track.value = 'Demasiado bajo';
    }
    else if (number() === randomNumber) {
        track.value = 'Has ganado campeona!!'
    }
    else {
        track.value = 'El número debe estar entre 1 y 100.'
    }
    counter();
}

function counter() {
    //const counter = parseInt(count.value);
    count = count + 1;
    tryNumber.innerHTML = `El número de intentos es: ${count + 1}`;
    //return counter
}


function handleClick(event) {
    event.preventDefault();
    numberThink();
    counter();
}


// evento
button.addEventListener('click' , handleClick);