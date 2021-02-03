/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar () 						//Tambien lei que hay que separar los parentesis del nombre de la funcion
{
	let num1; 							//Reservo los espacios de memoria para el Input del usuario
	let num2;
	let resultado;
	
	num1 = document.getElementById('txtIdNumeroUno').value;	//Tomo por ID y defino las variables 
	num2 = document.getElementById('txtIdNumeroDos').value;	//Fallo que tuve, parseInt no re-define la variable por lo cual hay que asignar con =
	num1 = parseInt ( num1, 10 );
	num2 = parseInt ( num2, 10 );
	resultado = num1 + num2;

	alert('La suma es: ' + ( resultado ));

	document.getElementById('txtIdNumeroUno').value = ''; 	//Tratando de tomar la costumbre de limpiar la caja de texto
	document.getElementById('txtIdNumeroDos').value = '';		//Leyendo reglas de identacion para JS estuve viendo que se recomienda usar ''
} 
//Preguntar por identacion en este caso, todo en una misma linea? o las definiciones de variables se identan?
