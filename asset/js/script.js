//Caso 1

const imagen = document.querySelector('.img_1')

let accionClick = Boolean;

accionClick = false;

imagen.addEventListener('click', function() {
    if (!accionClick){
        imagen.style.border = '2px solid red';
    }else{
        imagen.style.border = '';
    }
    accionClick = !accionClick;
})


// Caso 2

let val1 = document.querySelector('#input1')
let val2 = document.querySelector('#input2')
let val3 = document.querySelector('#input3')
const btn_1 = document.querySelector('.btn_1')
const msj = document.querySelector('#msj')

const valor1 = val1.value
const valor2 = val2.value
const valor3 = val3.value

let resultado = Number
resultado = 0

btn_1.addEventListener('click', () => {
    const valor1 = Number(val1.value)
    const valor2 = Number(val2.value)
    const valor3 = Number(val3.value)
    resultado = valor1 + valor2 + valor3
    if(valor1 < 0 || valor2 <0 || valor3 <0){
        msj.innerHTML = 'Por favor ingrese números validos'
    }else if(resultado <= 10){
        msj.innerHTML = 'Levas ' + resultado + ' Stickers'
    }else{
        msj.innerHTML = 'Llevas demasiados stickers!!'
    }
})


// Caso 3

let n_1 = document.querySelector('#num1')
let n_2 = document.querySelector('#num2')
let n_3 = document.querySelector('#num3')
const btn_2 = document.querySelector('.btn_2')
const msj2 = document.querySelector('#msj2')

const numero1 = n_1.value
const numero2 = n_2.value
const numero3 = n_3.value

btn_2.addEventListener('click', () => {
    const numero1 = Number(n_1.value)
    const numero2 = Number(n_2.value)
    const numero3 = Number(n_3.value)
    if(numero1 == 9 && numero2 == 1 && numero3 == 1){
       msj2.innerHTML = 'Password 1 es Correcto'
    }else if((numero1 == 7 && numero2 == 1 && numero3 == 4)){
        msj2.innerHTML = 'Password 2 es Correcto'
    }else{
        msj2.innerHTML = 'Password Incorrecto'
    }
})