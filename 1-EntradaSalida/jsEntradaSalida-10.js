/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var numeroSueldo; 
	var numeroDivisor;
	var miAlerta;

	numeroSueldo = txtIdImporte.value;
	numeroSueldo = parseInt(numeroSueldo);

	miAlerta = numeroSueldo * 0.25;
	alert(miAlerta); // alert, no console.log, ese es para la consola

	numeroDivisor = numeroSueldo * 0.75;
	txtIdResultado.value = numeroDivisor; // va a la izquierda el txtidresultado.value, porque al objeto le asigno el numero
}


