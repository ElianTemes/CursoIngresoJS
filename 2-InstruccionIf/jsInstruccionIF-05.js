function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById('txtIdEdad').value,10);

	if( edad < 13 || edad > 17){

		alert('El usuario no es un adolescente');

	}


}