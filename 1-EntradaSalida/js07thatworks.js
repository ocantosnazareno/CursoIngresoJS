/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var primerNumero;
var segundoNumero;											

primerNumero = txtIdNumeroUno.value;						 
segundoNumero = txtIdNumeroDos.value;


primerNumero = parseInt(primerNumero)
segundoNumero = parseInt(segundoNumero)

function sumar()
{	
	var sumar;
	sumar = primerNumero + segundoNumero;
	alert(sumar);	
}

function restar()
{	
	var restar;
	restar = primerNumero - segundoNumero;
	alert(restar);	
}

function multiplicar()
{	
	var multiplicar;
	multiplicar = primerNumero * segundoNumero;
	alert(multiplicar);	
}

function dividir()
{	
	var dividir;
	dividir = primerNumero / segundoNumero;
	alert(dividir);	
}