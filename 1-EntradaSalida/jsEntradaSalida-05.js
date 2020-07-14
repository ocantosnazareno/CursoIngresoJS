/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var datoNombre;
	var datoEdad;

	datoNombre = txtIdNombre.value;

	datoEdad = txtIdEdad.value;

	alert("Usted se llama "+ datoNombre + " y tiene " + datoEdad + " años.");
}

// sacar los ID value del html, no mirarlo en la consola y volverlo a escribir.