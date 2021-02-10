function mostrar()
{
	let edad;
	
	edad = parseInt(document.getElementById('txtIdEdad').value, 10);
	if (edad >= 18){
		alert('El usuario es mayor de edad');
	}
}