const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const lamp = document.getElementById('lamp')

function isLampQuebrada(){
    return lamp.src.indexOf('quebrada') > -1
}


function lampLigada(){

    if(!isLampQuebrada()){
        lamp.src = '/img/ligada.jpg'
    }
}

function lampDesligada(){
    if(!isLampQuebrada()){
        lamp.src = '/img/desligada.jpg'
    }
}

function lampQuebrada(){
    lamp.src = '/img/quebrada.jpg'
}

ligar.addEventListener('click' , lampLigada)
desligar.addEventListener('click' , lampDesligada)
lamp.addEventListener('mouseover' , lampLigada)
lamp.addEventListener('mouseleave' , lampDesligada)
lamp.addEventListener('dblclick' , lampQuebrada)