const pantalla = document.querySelector(".pantalla")
const botones = document.querySelectorAll(".btn")


botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        const botonPresionado = boton.textContent;


//borrar todo
        if(boton.id === "C"){
            pantalla.textContent = "0"
            return;
        }


//borrar ultimo digito
        if(boton.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Syntax Error"){ //cuando llegue a 1 digito, la pantalla reproducira el 0
                pantalla.textContent = "0"
            }else{
                pantalla.textContent = pantalla.textContent.slice(0, -1); // sino, seguira borrando.
            }
            return; //el return queda fuera para no ejecutar las siguientes funciones. (no deja que la flecha aparezca en pantalla)
        }

//resolver operacion
        if(boton.id === "Igual"){
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = "Syntax Error"
            }
            return;
        }
//no repite el cero en pantalla pero acumula los demas numeros
        if(pantalla.textContent === "0" || pantalla.textContent === "Syntax Error"){
            pantalla.textContent = botonPresionado;
        }else{
            pantalla.textContent += botonPresionado;
        }
    })
})