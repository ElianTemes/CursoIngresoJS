/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let num1;
	let num2;

	num1 = document.getElementById('txtIdNumeroDividendo').value;
	num2 = document.getElementById('txtIdNumeroDivisor').value;
	num1 = parseInt( num1, 10 );
	num2 = parseInt( num2, 10 );

	alert('El resto de la division es: ' + ( num1 % num2 ));
	
	document.getElementById('txtIdNumeroDividendo').value = ''; 
	document.getElementById('txtIdNumeroDivisor').value = ''; 
	
}
