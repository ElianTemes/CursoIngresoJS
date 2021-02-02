/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar () 						//Tambien lei que hay que separar los parentesis del nombre de la funcion
{
	let num1; 							//Reservo los espacios de memoria para el Input del usuario
	let num2;
	
	num1 = txtIdNumeroUno.value;	//Tomo por ID y defino las variables 
	num2 = txtIdNumeroDos.value;	//Fallo que tuve, parseInt no re-define la variable por lo cual hay que asignar con =
	num1 = parseInt ( num1, 10 );
	num2 = parseInt ( num2, 10 );
	alert('La suma es: ' + (num1 + num2));
	txtIdNumeroUno.value = ' '; 	//Tratando de tomar la costumbre de limpiar la caja de texto
	txtIdNumeroDos.value = ' ';		//Leyendo reglas de identacion para JS estuve viendo que se recomienda usar ''
} 
//Preguntar por identacion en este caso, todo en una misma linea? o las definiciones de variables se identan?
