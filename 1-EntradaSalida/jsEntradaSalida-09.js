/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultadoImporte;
	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo, 10);
	resultadoImporte = sueldo / 100 * 10 + sueldo;
	txtIdResultado.value = resultadoImporte;
	txtIdSueldo.value = ' '; 
}
