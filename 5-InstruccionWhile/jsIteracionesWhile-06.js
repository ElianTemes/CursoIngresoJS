function mostrar()
{
	let num = 0;
	let i = 0;

	while(i < 5){
		num += parseInt(prompt('Ingrese un numero:'));
		i++;
	}
	
	txtIdSuma.value = num;
	txtIdPromedio.value=num/5;

}//FIN DE LA FUNCIÓN