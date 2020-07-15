/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var numeroSueldo; 
	var numeroDivisor;
	var miAlerta;

	numeroSueldo = txtIdSueldo.value;
	numeroSueldo = parseInt(numeroSueldo);

	miAlerta = numeroSueldo * 0.1;
	alert(miAlerta); // alert, no console.log, ese es para la consola

	numeroDivisor = numeroSueldo * 1.1;
	txtIdResultado.value = numeroDivisor; // va a la izquierda el txtidresultado.value, porque al objeto le asigno el numero
}