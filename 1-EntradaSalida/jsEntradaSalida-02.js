/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar() // Funcion mostrar, creada por el profesor, el codigo va dentro del bloque cerrado por llaves
{
	let userInput; //Const es una variable de solo lectura, solo se puede guardar algo al declarar y despues no se puede modificar
	userInput = prompt ("Ingrese su nombre:"); // Declaro la variable userInput con lo que ingrese el usuario por prompt, la funcion prompt al cerrar funciona de manera equivalente a poner userInput = "nombre"
	alert(userInput);
}

