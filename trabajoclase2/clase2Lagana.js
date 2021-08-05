let hola = prompt("Ingrese texto aquí. ")
let numero = prompt("Ingrese número aquí.")

numero= parseInt(numero)


// No utilizo .toLowerCase ya que el trabajo solicita que sea IGUAL a "Hola" en su consigna. es por  eso que solicito que sea estrictamente igual (===)1 


if (hola === "Hola") {
        alert("Hola!")
} else {
        console.log("No ingreso la palabra Hola")
}

if (numero > 1000) {
        alert("Número ingresado es mayor a 1000")
}
else if (numero >= 10 && numero <= 50) {
        alert("El número ingresado esta entre 10 y 50")
}
else{
        console.log("El número ingresado no debe mostrar alerta.")
}