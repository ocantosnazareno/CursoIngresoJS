/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var datoNombre;

	datoNombre = prompt("Ingrese su nombre");

	txtIdNombre.value = datoNombre;

	alert("ok");
}

// readonly=solo lecturas
