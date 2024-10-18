let horas=prompt("Ingrese el numero de horas se servicio de estacionamiento ")



if(horas<=.5){
    console.log("Su total es de $0,00 ")
}else if (horas>.5&&horas<2){
    console.log("Su total es de : $"+horas*10)
} else if (horas>=2&&horas<=3){
    console.log("Su total es de : $"+horas*25)

}else{
    console.log("Su total es de : $"+horas*30)
}