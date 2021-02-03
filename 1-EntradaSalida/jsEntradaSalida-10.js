/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let resultadoImporte;

	importe = document.getElementById('txtIdImporte').value;
	importe = parseInt(importe, 10);
	resultadoImporte = importe - importe / 100 * 25 ;

	document.getElementById('txtIdResultado').value = resultadoImporte;
	
	document.getElementById('txtIdImporte').value = ''; 
}
