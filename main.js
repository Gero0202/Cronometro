const display = document.getElementById("display")
const botones = document.querySelectorAll("button")

let segundosTotales = 0
let cronometro = null

const actualizarDisplay = () => {
    const minutos = Math.floor(segundosTotales / 60)
    const segundos = segundosTotales % 60
    display.innerText = `${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")}`
}

const iniciarCronometro = () =>{
    if(!cronometro){
        cronometro = setInterval(() =>{
            segundosTotales++
            actualizarDisplay()
        }, 1000)
    }
}

const frenarCronometro = () =>{
    clearInterval(cronometro)
    cronometro = null
}

const reiniciarCronometro = () =>{
    frenarCronometro()
    segundosTotales = 0
    actualizarDisplay()
}

botones.forEach((boton) =>{
    boton.addEventListener("click", () =>{
        if(boton.value === "iniciar"){
            iniciarCronometro()
        }else if(boton.value === "frenar"){
            frenarCronometro()
        }else if (boton.value === "reiniciar"){
            reiniciarCronometro()
        }
    })
})

actualizarDisplay()