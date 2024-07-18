let nombre;

do{
    nombre = prompt("Ingrese su nombre y apellido");
} while (nombre === "" || Number(nombre));
alert("Hola, " + nombre + ". ¡Bienvenido!")
console.log(nombre)


function calcularPropina() {
    
    let totalCuenta = parseFloat(prompt("Ingrese el total en pesos de la cuenta:"));

    
    if (isNaN(totalCuenta) || totalCuenta <= 0) {
        alert("Por favor, ingrese un total de cuenta válido.");
        return;
    }

    
    let porcentajePropina = parseFloat(prompt("Ingrese el porcentaje de propina a dar deseado:"));

    
    if (isNaN(porcentajePropina) || porcentajePropina < 0) {
        alert("Por favor, ingrese un porcentaje de propina válido.");
        return;
    }


    let propina = totalCuenta * (porcentajePropina / 100);
    return propina;
}


let propinaCalculada = calcularPropina();


if (propinaCalculada !== undefined) {
    alert("El total de la propina es: $" + propinaCalculada.toFixed(2));
}