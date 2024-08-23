/* ejercicio de puntaje Crea una variable de puntaje y usa condiciones para mostrar excelente si el puntaje es mayor o igual a 90 bueno si el puntaje está entre 70 y 89 necesita mejorar si el puntaje es menor de 70 */
let puntaje = 100;

if (puntaje >= 90) {
    puntaje = "Excelente";
} else if (puntaje >= 70 && puntaje < 89) {
    puntaje = "Bueno";
} else {
    puntaje = "Necesita mejorar";
}

console.log(puntaje);
