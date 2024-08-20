/*Crea un arreglo llamando colores con al menos 4 colores e inscribe en la consola el primer y último color del arreglo Agrega otro color al arreglo, elimina el primer color, y muestra cuántos colores hay en el arreglo.*/

const colores = ["celeste", "azul", "rosado", "rojo"];

console.log("El primer color es:", colores[0]);

console.log("El último color es:", colores[colores.length - 1]);

colores.push("morado");

colores.shift();

console.log("El arreglo de colores ahora es:", colores);

console.log("El número de colores en el arreglo es:", colores.length);
