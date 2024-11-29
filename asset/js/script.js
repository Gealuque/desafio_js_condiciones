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
    console.log(valor1)
    console.log(valor2)
    console.log(valor3)
    console.log(resultado)
    if(valor1 < 0 || valor2 <0 || valor3 <0){
        msj.innerHTML = 'Por favor ingrese números validos'
    }else if(resultado <= 10){
        msj.innerHTML = 'Levas ' + resultado + ' Stickers'
    }else{
        msj.innerHTML = 'Llevas demasiados stickers!!'
    }
})


/*
btn_1.addEventListener('click', function(){
    if(resultado < 0){
        alert('Coloque números validos')
    }else if(resultado => 0 && resultado <= 10){
       alert('Levas' + resultado + 'stickers')
    }else if (resultado >= 10){
        alert('Levas demasiados stickers')
    }
})*/