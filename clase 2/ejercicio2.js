/*Crear una función de saludo, crea una función llamada Bienvenida, que tome un nombre y devuelva un mensaje de bienvenida.
Crea una función de suma, llamada suma,  con tres números, que tome tres números y devuelva su suma.*/
function Bienvenida(nombre) {
    return "¡Bienvenido/a, " + nombre + "!";
}

function suma(a, b, c) {
    return a + b + c;
}

console.log(Bienvenida("Maria Jose"));
console.log(suma(3, 5, 7));
