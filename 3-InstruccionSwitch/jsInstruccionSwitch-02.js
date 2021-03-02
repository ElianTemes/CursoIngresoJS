function mostrar() {

  //tomo el mes
  let mesDelAnio = document.getElementById("txtIdMes").value;

  switch (mesDelAnio) {
    case "Julio":
      alert("Abrigate que hace frio!");
      break;
    case "Agosto":
      alert("Abrigate que hace frio!");
      break;
    default:
      alert("Falta para el invierno.");
      break;
    case 'Septiembre':
    case 'Octubre':
    case 'Noviembre':
    case 'Diciembre':
      alert('Ya pasamos el frio, ahora calor!');
      break;
  }
} //FIN DE LA FUNCIÓN
