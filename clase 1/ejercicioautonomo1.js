/*Pasos para Completar la Actividad:
Definir Variables:
Variables para contar cuántos números son mayores que 5.
Usar un Ciclo para Imprimir Números:
Usar un ciclo for para imprimir los números del 1 al 10.
Contar Números Mayores que 5:
Usar una condicional if dentro del ciclo para contar cuántos números son mayores que 5.
Mostrar el Resultado:
Imprimir el conteo de números mayores que 5.*/

let conteo = 0;

for (let i = 1; i <= 10; i++) {
    console.log(i);

    if (i > 5) {
        conteo++;
    }
}

console.log("Números mayores que 5: " + conteo);
