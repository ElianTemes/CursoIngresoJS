function mostrar() {
  let edad;

  edad = parseInt(document.getElementById("txtIdEdad").value, 10);

  if (edad >= 18) {
    alert("El usuario es mayor de edad");
  } else if (edad < 13) {
    alert("El usuario es menor de edad");
  } else {
    alert("El usuario es adolescente");
  }
} //FIN DE LA FUNCIÓN
