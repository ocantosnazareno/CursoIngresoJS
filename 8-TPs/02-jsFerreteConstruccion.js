/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;				// b * h – largo * ancho
	var ancho;
	var rectanguloAlambrado;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	rectanguloAlambrado = (largo * ancho) * 3
	alert("La cantidad de alambre a comprar para el rectangulo es:"+rectanguloAlambrado+" .")
}
function Circulo () 
{
	var radio;
	var circuloAlambre;

	radio = txtIdRadio.value;
	radio = parseInt(radio);
	circuloAlambre = 2 * 3.14159 * radio 		// alternativa: math.pi

	alert("La cantidad de alambre a comprar para el circulo es es: "+circuloAlambre+" .")
}
function Materiales () 
{
	var largo;
	var ancho;
	var calculoBolsas;

	largo = txtIdLargo.value;
	ancho = txtIdAncho.value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	calculoBolsas = largo * 2 + ancho * 3;

	alert("Usted necesita "+calculoBolsas+ " bolsas.");

}