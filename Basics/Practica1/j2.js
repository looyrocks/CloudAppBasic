document.addEventListener("DOMContentLoaded", function() {
   // Obtenemos referencias a los elementos  
  const boton = document.getElementById("btnMostrar");
  const textbox = document.getElementById("miTexto");
  const resultado = document.getElementById("resultado");

//Funcion para mostrar el texto reusable en la interacción
  function mostrarTexto() {
    //Ventana Emergente - Pop-Up
    let texto = textbox.value;
    alert(texto);
    // Lo mostramos en el div resultado
    resultado.innerText = "Texto ingresado: " + texto;
  }

  // Asignamos la función al evento click del botón
    boton.addEventListener("click", function() {
      mostrarTexto();
    });

    // Evento al presionar CTRL + M
    document.addEventListener("keydown", function(event) {
    // Verifica si se mantiene presionado CTRL y la tecla es "m" o "M"
      if (event.ctrlKey && event.key.toLowerCase() === "m") {
      mostrarTexto();
    }
  });
});


