/*Ejercicio 1: Crea una variable puntaje y usa condicionales para mostrar:
"Excelente" si el puntaje es mayor o igual a 90.
"Bueno" si el puntaje está entre 70 y 89.
"Necesita mejorar" si el puntaje es menor de 70.
Ejercicio 2: Crea una variable hora y usa condicionales para mostrar:
"Buenos días" si la hora está entre 6 y 12.
"Buenas tardes" si la hora está entre 12 y 18.
"Buenas noches" si la hora está entre 18 y 6.
*/
let hora = 14;

if (hora >= 6 && hora < 12) {
    hora = "Buenos días";
} else if (hora >= 12 && hora < 18) {
    hora = "Buenas tardes";
} else {
    hora = "Buenas noches";
}


console.log(hora);
