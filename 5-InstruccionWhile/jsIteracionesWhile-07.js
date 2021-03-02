function mostrar(){

	let contador = 0;
	let acumulador = 0;
	let respuesta = 0;

	while(respuesta != "n" && respuesta != "N"){
		acumulador += parseInt(prompt('Ingrese un numero que quiera sumar'));
		contador ++;
		respuesta = prompt('Quiere ingresar otro numero? y/n');
	}

	document.getElementById('txtIdSuma').value = acumulador;
	document.getElementById('txtIdPromedio').value = acumulador/contador;

} //FIN DE LA FUNCIÓN