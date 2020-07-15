/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividiendo; 
	var numeroDivisor;
	var resto;

	numeroDividiendo = txtIdNumeroDividendo.value;
	numeroDivisor = txtIdNumeroDivisor.value;

	numeroDividiendo = parseInt(numeroDividiendo);
	numeroDivisor = parseInt(numeroDivisor);

	resto = numeroDividiendo % numeroDivisor;

	alert("El resto es "+resto+" .");
}
