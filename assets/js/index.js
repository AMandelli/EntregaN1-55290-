// CALCULO DE ACTUALIZACION DE ALQUILERES 

let alquiler = parseInt(prompt("Ingrese monto actual de alquiler que desee actualizar"));
console.log(alquiler);

const indiceBcra = 2.14;
console.log(indiceBcra);

let actualizacion = alquiler * indiceBcra;
console.log(actualizacion);

console.log("El monto actualizado es $" + actualizacion);
alert("El monto actualizado es $" + actualizacion);

let nuevoCalculo;
    
nuevoCalculo = prompt("¿Desea relizar un nuevo calculo?");
console.log(nuevoCalculo);
    
let nuevoMonto;

if(nuevoCalculo == "si"){
    nuevoMonto = parseInt(prompt("Ingrese el monto"));
    console.log(nuevoMonto);
    console.log(indiceBcra);
    actualizacion = nuevoMonto * indiceBcra;
    console.log(actualizacion);
    console.log("El monto actualizado es $" + actualizacion);
    alert("El monto actualizado es $" + actualizacion);
    alert("Gracias por utilizar nuestros servicios!");
       
}else if(nuevoCalculo == "no"){
    alert("Gracias por utilizar nuestros servicios!");
}else{
    alert("Funcion no disponible");
}

console.log("¡Gracias por utilizar nuestros servicios!"); 


// JUEGO DE ADIVINANSA 

alert("Ahora te invito a jugar un juego. Tenes que adivinar el numero correcto!");

let juego = parseInt(prompt("Ingrese un numero del 1 al 10"));
console.log(juego);

while(juego !=7){
    alert("El numero ingresado no es el correcto... sigue participando");

    juego = parseInt(prompt("Ingrese un numero del 1 al 10"));
}
alert("FELICIDADES!! adivinaste el numero correcto");
console.log("FELICIDADES!! adivinaste el numero correcto");
console.log("Gracias por utilizar nuestro sitio web :D");
document.write("Gracias por utilizar nuestro sitio web :D"); 


// CALCULADORA 

function calculadora(primerNumero, segundoNumero, operacion){
    switch (operacion){
        case "+":
            return primerNumero + segundoNumero;
        case "-":
            return primerNumero - segundoNumero;    
        case "*":
            return primerNumero * segundoNumero;
        case "/":
            return primerNumero / segundoNumero;
        default:
        return 0;        
    }
}
        
console.log(calculadora(5, 5, "+"));
console.log(calculadora(5, 5, "-"));
console.log(calculadora(5, 5, "*"));
console.log(calculadora(5, 5, "/"));



