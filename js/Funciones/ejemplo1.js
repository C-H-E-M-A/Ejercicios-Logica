function saludar(){
    console.log("Hola mundo")
}
//Llamar funcion
saludar();



function rechazar(){
    console.log("No puedes entrar ")
}
function aceptar(){
    console.log("Si puedes entrar")
}

let edad=21;


if(edad>=18){
    aceptar();
}else{
    rechazar();
}


let calificacion=10;
function beca(){
    console.log("Te deposito 12000 par tus chicles");
    console.log("Te depositaron $300");
    console.log("No pagas inscripcion ");

};
while(calificacion>=8 || calificacion ===10){
    console.log("Tu califiacacion es de: "+calificacion)
    beca();
    calificacion--;

}

let nombre=prompt("Ingresa tu nombre");

function saludar(/*Funcion*/nombres){
    console.log("Hola "+nombres)
}
saludar(nombre);

/**/
let nume1=parseFloat(prompt("INgrese el primer numero"));
let nume2=parseFloat(prompt("ingrese el segundo numero a sumar"));
let resultado;

function sumar(nume1,nume2){
    resultado=nume1+nume2;
    console.log("El resultado de la suma es :"+resultado)
}
sumar(nume1,nume2);


let nume1=parseFloat(prompt("Ingrese el primer numero"));
let nume2=parseFloat(prompt("Ingrese el segundo numero"));
let nume3=parseFloat(prompt("Ingrese el tercer numero"));
let nume4=parseFloat(prompt("Ingrese el cuarto numero"));
let nume5=parseFloat(prompt("Ingrese el quinto numero"));