/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	nombreIngresado = document.getElementById("txtIdNombre").value; //Document le pide algo al archivo html, en este caso con la funcion .getElementById, nosotros solicitamos un elemento por medio de su identificacion unica, y el .value es porque nos interesa su valor, no el recuadro de texto en si
	alert(nombreIngresado);
	document.getElementById("txtIdNombre").value = ""; //Con esto volvemos a solicitar el valor del elemento que pedimos, pero le asignamos un espacio en blanco, lo cual limpia el input anterior

}


