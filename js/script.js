//Perfil en sitio de clases de inglés

let clave = "1988";
let validador = false;

//Login
for (let i = 2; i >= 0; i--) {
  let ingresoClave = prompt("Ingresa tu clave");
  if (clave == ingresoClave) {
    alert("INGRESO EXITOSO ¡BIENVENIDO!");
    validador = true;
    break;
  } else {
    alert("Clave incorrecta. Te quedan " + i + " intentos");
  }
}

if (validador) {
  let curso = "Inglés. Nivel avanzado. Adulto";
  let curso2 = "Clases de conversación";
  let nombre = "Federico";
  let apellido = "Ceravolo";
  let fecNac = "24/02/1988";
  let edad = "35";
  let email = "fede.cera@gmail.com";
  let opcion = prompt(
    "Seleccioná una opción: \n1-Ver Perfil \n2-Mis Cursos \n3-Cerrar Sesión"
  );
  while (opcion != 3) {
      switch (opcion) {
        case "1":
          verPerfil(nombre, apellido, fecNac, edad, email);
          break;
        case "2":
          cursos(curso,curso2)
          break;
      }
      opcion = prompt(
          "Seleccioná una opción: \n1-Ver Perfil \n2-Mis Cursos \n3-Cerrar Sesión"
        );
    }
  alert("SESIÓN FINALIZADA")

  function verPerfil() {
    alert(
      "Nombre: " +
        nombre +
        "\nApellido: " +
        apellido +
        "\nFecha de Nacimiento: " +
        fecNac +
        "\nEdad: " +
        edad +
        "\nCorreo electrónico: " +
        email
    );
  }
  function cursos(){
    alert("Cursos activos: \nA) " + curso + "\nB)" + curso2);
  }
}
