
  document.addEventListener("DOMContentLoaded", function() {

  const ingreso = document.getElementById("numero");
  const button = document.getElementById("showBtn");

  //Funcion para mostrar el texto reusable en la interacción
  function mostrarTexto() {
    //Ventana Emergente - Pop-Up
    let digit = ingreso.value;
   // alert(digit);
    // Lo mostramos en el div resultado
    resultado.innerText = "El número ingresado es: " + digit;
      let resto = digit%2; //modulo
        if (resto === 0){
          resultado.innerText = digit + " es par";
          //resultado.innerHTML += "<br>" + digit+" es par";
        } 
        else{
          resultado.innerText = digit + " es impar";
          //resultado.innerHTML += "<br>" + digit+" es impar";
        }
  }

  // Asignamos la función al evento click del botón
    button.addEventListener("click", function() {
      mostrarTexto();
    });
  })