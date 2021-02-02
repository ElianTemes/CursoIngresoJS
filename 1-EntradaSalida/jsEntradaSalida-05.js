/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let nombreIngresado;
	nombreIngresado = txtIdNombre.value;
	let edadIngresada;
	edadIngresada = txtIdEdad.value; 
	alert("Usted se llama " +(nombreIngresado) +" Y tiene " +(edadIngresada) +" años");
}

