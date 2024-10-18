/*Palíndromos: Pide al usuario ingresar una palabra y determina si es un
palíndromo (se lee igual al derecho y al revés). */


let palabra=prompt("Ingrese un palabra para saber si una palabra polindromo ")
let palabrainvertida=palabra.split("").reverse().join("");

if (palabra=== palabrainvertida){
    console.log("La palabra " +palabrainvertida+" es una palabra polidromo");
} else {
    console.log("La palabra "+palabrainvertida+" no es una palabra polidromo")
}