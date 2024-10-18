let radio=parseFloat(prompt("ingrese el valor de radio"));
let P=3.1416;

function areac(radio,P){
    area=P*(radio**2);
    console.log("El area del circulo por el radio asignado es de :"+area);

}
areac(radio,P);