let celdas = ['','','','','','','','','']
let jugadorActual = 'X'
let resultado = document.querySelector('.result')
let botones = document.querySelectorAll('.btn')


let condiciones =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
]

// Desde aca empieza la logica
// console.log(botones)

const triki = (element,i) => {
    element.value =jugadorActual
    element.disabled = true
    celdas[i] =jugadorActual
    jugadorActual = jugadorActual == 'X' ? 'O' : 'X';

    resultado.innerHTML = `player ${jugadorActual} turn`
}




botones.forEach((boton,indice)=>{
    boton.addEventListener('click',()=>{triki(boton,indice)})
})