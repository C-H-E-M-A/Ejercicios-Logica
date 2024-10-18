//Comparaciones: Escribe un programa que compare dos números y diga cuál
//es mayor o si son iguales.

let numero1=prompt("Ingrese el primer numero:");
let numero2=prompt("Ingrese el segundo numero :");
if(numero1==numero2){
    console.log("El numero " + numero1 + " Es igual que el numero " + numero2 )
}else if(numero1>=numero2){
    console.log("El numero " + numero1 + " Es mayor que el numero " + numero2 )
}else{
    console.log("El numero " + numero1 + " Es menor que el numero " + numero2 )
}