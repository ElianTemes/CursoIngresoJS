/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar ()
{	
	let num1;
	let num2;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;
	num1 = parseInt( num1, 10 );
	num2 = parseInt( num2, 10 );

	alert('El resultado de la suma es: ' + ( num1 + num2 ));
	
	txtIdNumeroUno.value = ' '; 
	txtIdNumeroDos.value = ' '; 
}

function restar ()
{	
	let num1;
	let num2;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;
	num1 = parseInt( num1, 10 );
	num2 = parseInt( num2, 10 );

	alert('El resultado de la resta es: ' + ( num1 - num2 ));
	
	txtIdNumeroUno.value = ' '; 
	txtIdNumeroDos.value = ' '; 
}

function multiplicar ()
{ 	
	let num1;
	let num2;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;
	num1 = parseInt( num1, 10 );
	num2 = parseInt( num2, 10 );

	alert('El resultado de la multiplicacion es: ' + ( num1 * num2 ));
	
	txtIdNumeroUno.value = ' '; 
	txtIdNumeroDos.value = ' '; 
	
}

function dividir ()
{	
	let num1;
	let num2;

	num1 = txtIdNumeroUno.value;
	num2 = txtIdNumeroDos.value;
	num1 = parseInt( num1, 10 );
	num2 = parseInt( num2, 10 );

	alert('El resultado de la division es: ' + ( num1 / num2 ));
	
	txtIdNumeroUno.value = ' '; 
	txtIdNumeroDos.value = ' '; 
	
}

