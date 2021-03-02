/*	
	1) Creo las variables necesarias
	2) las inicializo
	3) --Inicio una repetitiva para pedir numeros hasta que el usuario quiera--
	4) sumo los negativos
	4.1) acumulo los negativos
	5) sumo los positivos
	5.1) acumulo los positivos
	6) acumulo los ceros
	7) acumulo los numeros pares
	8) acumulo los numeros impares
	9) promedio positivos
	10) promedio negativos
	11) restar positivos y negativos
	12) mostrar todos los resultados
	

*/

function mostrar()
{
	let num = 0;
	let numPos = 0;
	let contPos = 0;
	let numNeg = 0;
	let contNeg = 0;
	let contPar = 0;
	let contCero = 0;
	let promedioPos = 0;
	let promedioNeg = 0;
	let resta;
	let continuar = 's';

	do{
		num = parseInt(prompt('Ingrese un numero:'));
			if(num > 0){
				numPos += num;
				contPos++;
			}
			else if(num == 0){
				contCero ++;
			}
			else {
				numNeg += num;
				contNeg ++;
			}
			if(num % 2 == 0){
				contPar ++;
			}
			continuar = prompt('Desea continuar?');
	}
	while(continuar == 's' || continuar == 'S');

	if(isNaN(num)){
		alert('Error, no ingreso un numero');
		num = 'Error';
		numPos = 'Error';
		numNeg = 'Error';
		contPar = 'Error';
		contCero = 'Error';
		contPos = 'Error';
		contNeg = 'Error';
		promedioPos = 'Error';
		promedioNeg = 'Error';
	}

	if(acumPos > 0){
	promedioPos = numPos / contPos;
	}
	if(acumNeg > 0){
		promedioNeg = numNeg / contNeg;
	}
	resta = numPos - numNeg;

	console.log('suma de los numeros positivos' + numPos);
	console.log('suma de los numeros negativos' + numNeg);
	console.log('cantidad de numeros positivos' + contPos);
	console.log('cantidad de numeros negativos' + contNeg);
	console.log('cantidad de ceros' + contCero);
	console.log('cantidad de numeros pares' + contPar);
	console.log('promedio positivos' + promedioPos);
	console.log('promedio negativos' + promedioNeg);
	console.log('resultado de la diferencia' + resta);

}