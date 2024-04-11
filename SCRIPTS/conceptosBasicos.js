// comentarios en javascript //
console.log("Hola, esto es una prueba");
//Conceptos básicos en JS
//1. Tipos de variables
//2. Manejo del DOM
//3. Condicionales
//4. Ciclos

// VARIABLES - Contenedores de infomacion
// HAY 3 TIPOS DE VARIABLE
// VAR - Ya no se usa
// LET -  Es una variable que puede cambiar en el tiempo
// CONST - Una variable que no puede cambiar en el tiempo

// TIPOS DE DATOS
// El signo = asigna valores
// Numericos - LET
let numero = 7;
// Cadena de caracteres - texto - string - siempre de comillas
let texto = "Prueba"
// Booleanos - dato que puede ser verdadero o falso
let esVerdadero = true;
let esFalso = false;
// Arreglos - arrays - permiten almacenar varios datos al mismo tiempo en una misma variable
let arregloNombres = ["Luisa", "Paula", "Lucila", "Gio"];
let arregloNumeros = [1, 3, 5, 7];
// Objetos - "Representación de elementos de la vida real, pero en nuestro código"
// - Atributos
// - Metodos: Acciones que pueden hacer los objetos. 
// () Para ejecutar acciones - invocar funciones
// {} Para declarar objetos 
// [] Para declarar arreglos
const celular = {
    color: "texto",
    ancho: 350,
    alto: 500,
    modelo: "Galaxy A70",
    // Un mensaje que indica o representa una acción.
    enviarMensajes: function(){
        //Corchetes al lado de paréntesis establecen la acción a realizar
        console.log("Mensaje enviado");
    },
    // El método -> las acciones -> Directamente una operación
    sumar: function(){
        console.log(5+4);
    },

    buscarObjeto: function(){
        console.log("Le muestra lo que esta buscando");
    }
}