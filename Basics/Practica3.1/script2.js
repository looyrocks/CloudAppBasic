
  document.addEventListener("DOMContentLoaded", function() {

  const ingreso = document.getElementById("numero");
  const button = document.getElementById("showBtn");

  //Funcion para mostrar el texto reusable en la interacción
  function mostrarTexto() {
    //Ventana Emergente - Pop-Up
    let digit = ingreso.value;
    //alert(digit);
    // Lo mostramos en el div resultado
    resultado.innerText = "El número ingresado es: " + digit;

      let resto = digit%2; //modulo
        if (resto === 0){
          resultado.innerHTML += "<br>" + digit+" es par";

          resultado.innerHTML += "<br> La cuenta hasta el número:"

          for (let i = 1; i <= digit; i++) {
              resultado.innerHTML += "<br>" + i;
          }

        } 
        else{
          resultado.innerHTML += "<br>" + digit+" es impar";

          resultado.innerHTML += "<br> La cuenta hasta el número:"
          for (let i = 1; i <= digit; i++) {
              resultado.innerHTML += "<br>" + i;
          }

        }
  }

  // Asignamos la función al evento click del botón
    button.addEventListener("click", function() {
      mostrarTexto();
    });
  })