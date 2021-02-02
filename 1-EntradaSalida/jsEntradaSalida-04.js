/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
   	
function mostrar()
{	
	let nombre; //Reservo espacio en memoria para el input del usuario
	nombre = prompt ("Ingrese su nombre:"); //Pido el input al usuario y lo guardo en el espacio de memoria reservado
	document.getElementById("txtIdNombre").value = nombre; // recordar usar "" para el ID
}

