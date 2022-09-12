let nombreTrabajor = prompt("Ingrese el nombre del trabajador"); 
let cantidadDeHoras = parseFloat(prompt("Ingrese la cantidad de horas trabajadas"));
let tarifaPorHora = parseFloat(prompt("Ingrese la tarifa por hora"));
let sueldo = (cantidadDeHoras * tarifaPorHora);

document.write(`Trabajador: ${nombreTrabajor} su pago es: ${sueldo}`)



