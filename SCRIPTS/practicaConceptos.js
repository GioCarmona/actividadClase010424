const edadInput = document.getElementById("edadInput");
/*console.log(edadInput);*/
/*Se puede hacer mediante constantes y se traen con ID - const button = document.getElementById("boton");
console.log(boton)*/
const mensaje = document.getElementById("mensaje");

function verificarEdad(){
    //Tambien se puede llamar por eventos con "function"
    //cada que le de click al boton arroje un mensaje de "Hola"
    //console-console.log(("Hola"));
    let edad = edadInput.value;
    if (edad >= 18) {
        //console.log("Eres mayor de edad")
        mensaje.textContent = "Eres mayor de edad";        
    }else{
        //console.log("No eres mayor de edad")
        mensaje.textContent = "No eres mayor de edad";
    }
    //console.log(edad)    
}




