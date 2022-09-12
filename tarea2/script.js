let alumno = prompt("Ingrese un Alumno");
// Se uso float por ser notas de un alumno que pueden tener decimales :D
let nota1 = parseFloat(prompt("Ingrese la primera nota"));
let nota2 = parseFloat(prompt("Ingresa la segunda nota"));
let promedio = (nota1+nota2)/2;

    document.write(`Alumno: ${alumno} su promedio es ${promedio}`)
