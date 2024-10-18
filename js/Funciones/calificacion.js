let nume1=parseFloat(prompt("Ingrese el primer numero"));
let nume2=parseFloat(prompt("Ingrese el segundo numero"));
let nume3=parseFloat(prompt("Ingrese el tercer numero"));
let nume4=parseFloat(prompt("Ingrese el cuarto numero"));
let nume5=parseFloat(prompt("Ingrese el quinto numero"));
let resultado;

function cali(nume1,nume2,nume3,nume4,nume5){
    resultado=(nume1+nume2+nume3+nume4+nume5)/5
    console.log("Tu calificacion es de: "+resultado)
}
cali(nume1,nume2,nume3,nume4,nume5);