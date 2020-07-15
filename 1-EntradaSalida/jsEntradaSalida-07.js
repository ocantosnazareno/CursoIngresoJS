/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()						// llamar variables diferente a la función, para evitar sobreescribir. variables no suelen usar verbos.
{	
	var primerNumero;
	var segundoNumero;											// ¿Hay un problema de scopes? 

	primerNumero = txtIdNumeroUno.value;
	segundoNumero = txtIdNumeroDos.value;


	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	var suma;
	suma = primerNumero + segundoNumero;
	alert(suma);	
}

function restar()
{	
	var primerNumero;
	var segundoNumero;											// Acá no se necesita parseInt (no hay ambiguedad como suma/concatenación, pero lo pongo para asegurarme)

	primerNumero = txtIdNumeroUno.value;
	segundoNumero = txtIdNumeroDos.value;


	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	var resta;
	resta = primerNumero - segundoNumero;				// ¿la indentación está bien?
	alert(resta);	
}

function multiplicar()
{	
	var primerNumero;
	var segundoNumero;											

	primerNumero = txtIdNumeroUno.value;
	segundoNumero = txtIdNumeroDos.value;


	primerNumero = parseInt(primerNumero)
	segundoNumero = parseInt(segundoNumero)
	
	var multiplicacion;
	multiplicacion = primerNumero * segundoNumero;
	alert(multiplicacion);	
}

function division()
{	
	var primerNumero;
	var segundoNumero;										

	primerNumero = txtIdNumeroUno.value;
	segundoNumero = txtIdNumeroDos.value;


	primerNumero = parseInt(primerNumero)
	segundoNumero = parseInt(segundoNumero)
	
	var division;
	division = primerNumero / segundoNumero;
	alert(division);	
}