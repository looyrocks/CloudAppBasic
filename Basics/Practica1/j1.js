// Esperamos a que el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos referencias a los elementos
  const boton = document.getElementById("btnMostrar");
  const textbox = document.getElementById("miTexto");
  //const resultado = document.getElementById("resultado");

  // Asignamos la función al evento click del botón
  boton.addEventListener("click", function() {
    // Tomamos el valor del textbox
    let texto = textbox.value;

    // Lo mostramos en el div resultado
    
    alert(texto);
    //resultado.innerText = "Texto ingresado: " + texto;
  });

// Evento al presionar CTRL + M
document.addEventListener("keydown", function(event) {
  // Verifica si se mantiene presionado CTRL y la tecla es "m" o "M"
  if (event.ctrlKey && event.key.toLowerCase() === "m") {
    let texto = textbox.value;
    alert(texto);
    //resultado.innerText = "Texto ingresado: " + texto;
  }
});


});
