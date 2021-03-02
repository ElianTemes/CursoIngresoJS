/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	if(sexoIngresado != 'f' && sexoIngresado != 'm'){
		alert('El sexo ingresado es invalido.');
	}

	while(sexoIngresado == 'f' || sexoIngresado == 'm'){
		document.getElementById('txtIdSexo').value = sexoIngresado;
		sexoIngresado = 0;
	}	

}//FIN DE LA FUNCIÓN