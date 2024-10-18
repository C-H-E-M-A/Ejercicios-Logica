//Validación de entrada: Pide al usuario que ingrese un número y verifica si es
//realmente un número. Si no lo es, muestra un mensaje de error.


let numero=prompt("Ingrese un numero")


if(!isNaN(numero)){
    console.log("El numero ingresado "+numero+ " es un numero");
}else{
    console.log("Error el valor "+numero+ " no es un numero")
}