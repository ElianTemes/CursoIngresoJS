/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numPos = 0;
	let numNeg = 1;
	let num = 0;
	let continuar = 's';

	while(continuar == 's' || continuar == 'S'){
		num = parseInt(prompt('Ingrese un numero positivo o negativo:'));
			if(num >= 0){
				numPos += num;
			}
			else{
				numNeg *= num;
			}
		continuar = prompt('Quiere agregar otro numero? s/n');
	}

	document.getElementById('txtIdSuma').value = numPos;
	document.getElementById('txtIdProducto').value = numNeg;

}//FIN DE LA FUNCIÓN