function mostrar() {

  let edad;
  let estadoCivil;
  edad = parseInt(document.getElementById("txtIdEdad").value, 10);
  estadoCivil = document.getElementById("estadoCivil").value;

  if  (edad >= 18 && estadoCivil == "Soltero" ) {
    alert('Es soltero y no es menor');
  }

} //FIN DE LA FUNCIÓN
