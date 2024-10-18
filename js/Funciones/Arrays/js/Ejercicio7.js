//Eliminar duplicados
//Dado un arreglo de números, retorna un nuevo arreglo con los valores únicos (sin
//duplicados).

let numeros=[1,1,2,3,4,5,6,6,8,4,5,];
const unico=[new set (numeros)];

console.log(unico);