/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	while ( claveIngresada == 'utn750' ){
		alert('La clave es correcta!')
		claveIngresada = 0
	}
	
}//FIN DE LA FUNCIÓN
