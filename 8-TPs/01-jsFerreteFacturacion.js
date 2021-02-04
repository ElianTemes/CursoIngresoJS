/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   
    let prod1; 
    let prod2; 
    let prod3;
    let resultadoSum;

    prod1 = document.getElementById('txtIdPrecioUno').value;
    prod2 = document.getElementById('txtIdPrecioDos').value;
    prod3 = document.getElementById('txtIdPrecioTres').value;
    prod1 = parseInt(prod1, 10);
    prod2 = parseInt(prod2, 10);
    prod3 = parseInt(prod3, 10);

    resultadoSum = prod1 + prod2 + prod3; 

    alert(`El resultado de la suma es: ${resultadoSum}`)

    document.getElementById('txtIdPrecioUno').value = ''
    document.getElementById('txtIdPrecioDos').value = ''
    document.getElementById('txtIdPrecioTres').value = ''

}
function Promedio () 
{   
    let prod1; 
    let prod2; 
    let prod3; 
    let resultadoProm;

    prod1 = document.getElementById('txtIdPrecioUno').value;
    prod2 = document.getElementById('txtIdPrecioDos').value;
    prod3 = document.getElementById('txtIdPrecioTres').value;
    prod1 = parseInt(prod1, 10);
    prod2 = parseInt(prod2, 10);
    prod3 = parseInt(prod3, 10);

    resultadoProm = (prod1 + prod2 + prod3) / 3; 

    alert(`El promedio es: ${resultadoProm}`)

    document.getElementById('txtIdPrecioUno').value = ''
    document.getElementById('txtIdPrecioDos').value = ''
    document.getElementById('txtIdPrecioTres').value = ''
	
}
function PrecioFinal () 
{   
    let prod1; 
    let prod2; 
    let prod3;
    let prodAll; 
    let iva;
    let resultadoFin;

    prod1 = document.getElementById('txtIdPrecioUno').value;
    prod2 = document.getElementById('txtIdPrecioDos').value;
    prod3 = document.getElementById('txtIdPrecioTres').value;
    prod1 = parseInt(prod1, 10);
    prod2 = parseInt(prod2, 10);
    prod3 = parseInt(prod3, 10);

    prodAll = prod1 + prod2 + prod3;
    iva = prodAll / 100 * 21; 
    resultadoFin = iva + prodAll;

    alert(`El precio final con IVA es: ${resultadoFin}`)

    document.getElementById('txtIdPrecioUno').value = ''
    document.getElementById('txtIdPrecioDos').value = ''
    document.getElementById('txtIdPrecioTres').value = ''
	
}