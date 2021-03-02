/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numIngresado;
	numIngresado = prompt("ingrese un número entre 0 y 9.");
	
	if(numIngresado < 0 || numIngresado > 9){
		alert('El numero ingresado no esta dentro del rango 0 a 9');
	}

	while (numIngresado >=0 && numIngresado <= 9){
		document.getElementById('txtIdNumero').value = numIngresado;
		numIngresado = -1;
	}

	
}//FIN DE LA FUNCIÓN