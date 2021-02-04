/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;

    largo = document.getElementById('txtIdLargo').value;
    ancho = document.getElementById('txtIdAncho').value;
    perimetro = ( largo * 2 ) + ( ancho * 2 );
    alambre = perimetro * 3;

    alert(`Se necesitan ${alambre}mt de alambre`);

    document.getElementById('txtIdLargo').value = '';
    document.getElementById('txtIdAncho').value = '';
}
function Circulo () 
{
    let radio;
    let circunferencia;
    let alambre;

    radio = document.getElementById('txtIdRadio').value;
    circunferencia = ( radio * 2 ) * 3.14;
    alambre = circunferencia * 3;
    
    alert(`Se necesitan ${alambre}mt de alambre`);

    document.getElementById('txtIdRadio').value = '';

}
function Materiales () 
{
    let largo = parseInt(document.getElementById('txtIdLargo').value);
    let ancho = parseInt(document.getElementById('txtIdAncho').value);
    let cal = 3 * (largo * ancho);
    let cemento = 2 * (largo * ancho);

    alert(`Se necesitan ${cemento} bolsas de cemento y ${cal} bolsas de cal para todo el contrapiso`);

    document.getElementById('txtIdLargo').value = '';
    document.getElementById('txtIdAncho').value = '';
    
}