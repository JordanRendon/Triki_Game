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

    for (let i = 0; i < condiciones.length; i++){
        let condicion = condiciones[i]
        let a = celdas[condicion[0]]
        let b = celdas[condicion[1]]
        let c = celdas[condicion[2]]
        // console.log(a)
        // console.log(b)
        // console.log(c)

        if (a =='' || b == '' || c ==''){
            continue;
        }
        if (a==b && b==c){
            resultado.innerHTML= `player ${a} Won😍😎😎 `
            botones.forEach((btn)=>{btn.disabled=true})
        }
    
    }
   
}
const reset=() =>{
celdas = ['','','','','','','','','']
botones.forEach(element => {
    element.value =''
    element.disabled = false
})

jugadorActual = 'X'
resultado.innerHTML = `Player ${jugadorActual} Turn`
}
document.querySelector('#reset').addEventListener('click',()=>{
    reset()
})

botones.forEach((boton,indice)=>{
    boton.addEventListener('click',()=>{triki(boton,indice)})
})