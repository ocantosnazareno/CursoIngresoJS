/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/

// parseInt 


function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = txtIdNumeroUno.value;
	segundoNumero = txtIdNumeroDos.value;

	primerNumero = parseInt(primerNumero);
	segundoNumero = parseInt(segundoNumero);

	suma = primerNumero + segundoNumero;

	alert(suma);
}

//  object HTMLInputElement: falta ID value.

// function sumar()
// {
// 	var primerNumero;
// 	var segundoNumero;
// 	var suma;

// 	primerNumero = txtIdNumeroUno.value;
// 	segundoNumero = txtIdNumeroDos.value;

// 	suma = parseInt(primerNumero, segundoNumero);

// 	alert(suma);
// }

// resultado = parseInt(num1) + parseInt(num2);