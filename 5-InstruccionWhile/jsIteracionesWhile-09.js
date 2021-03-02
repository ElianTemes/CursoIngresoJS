/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let numeroIngresado = 0;
	let numeroMaximo = 0;
	let numeroMinimo = 0;
	let flag = 0;
	let seguir = 's';

	do{
		numeroIngresado = parseInt(prompt('Ingrese un numero'));
		if(flag == 0){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			flag = flag + 1;
		}
	    if( numeroIngresado >= numeroMaximo){
		  numeroMaximo = numeroIngresado;
		}
		else if (numeroIngresado <= numeroMinimo){
	      numeroMinimo = numeroIngresado;
		}
	  seguir = prompt("desea continuar? s/n");
	}
	while(seguir == "s" || seguir == 'S');

	document.getElementById('txtIdMaximo').value = numeroMaximo;
	document.getElementById('txtIdMinimo').value = numeroMinimo;

}//FIN DE LA FUNCIÓN