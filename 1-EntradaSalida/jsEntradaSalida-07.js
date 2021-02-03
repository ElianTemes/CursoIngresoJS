/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar ()
{	
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById('txtIdNumeroUno').value;
	num2 = document.getElementById('txtIdNumeroDos').value;
	num1 = parseInt( num1, 10 );
	num2 = parseInt( num2, 10 );
	resultado = num1 + num2;

	alert('El resultado de la suma es: ' + ( resultado ));
	
	document.getElementById('txtIdNumeroUno').value = ' '; 
	document.getElementById('txtIdNumeroDos').value = ' '; 
}

function restar ()
{	
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById('txtIdNumeroUno').value;
	num2 = document.getElementById('txtIdNumeroDos').value;
	num1 = parseInt( num1, 10 );
	num2 = parseInt( num2, 10 );
	resultado = num1 - num2;

	alert('El resultado de la resta es: ' + ( resultado ));
	
	document.getElementById('txtIdNumeroUno').value = ' '; 
	document.getElementById('txtIdNumeroDos').value = ' '; 
}

function multiplicar ()
{ 	
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById('txtIdNumeroUno').value;
	num2 = document.getElementById('txtIdNumeroDos').value;
	num1 = parseInt( num1, 10 );
	num2 = parseInt( num2, 10 );
	resultado = num1 * num2;

	alert('El resultado de la multiplicacion es: ' + ( resultado ));
	
	document.getElementById('txtIdNumeroUno').value = ''; 
	document.getElementById('txtIdNumeroDos').value = ''; 
	
}

function dividir ()
{	
	let num1;
	let num2;
	let resultado;

	num1 = document.getElementById('txtIdNumeroUno').value;
	num2 = document.getElementById('txtIdNumeroDos').value;
	num1 = parseInt( num1, 10 );
	num2 = parseInt( num2, 10 );
	resultado = num1 / num2;

	alert('El resultado de la division es: ' + ( resultado ));
	
	document.getElementById('txtIdNumeroUno').value = ''; 
	document.getElementById('txtIdNumeroDos').value = ''; 
	
}

