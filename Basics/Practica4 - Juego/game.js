
let datosJuego;
let escenaActual = "bosque";

fetch("game.json")
  .then(response => response.json())
  .then(data => {
    datosJuego = data;
    mostrarEscena(escenaActual);
  })
  .catch(error => {
    console.error("Error al cargar el juego:", error);
  });

function mostrarEscena(escena) {
  const historia = document.getElementById("historia");
  const opciones = document.getElementById("opciones");

  const datosEscena = datosJuego[escena];

  historia.textContent = datosEscena.texto;
  opciones.innerHTML = "";

  datosEscena.opciones.forEach(opcion => {
    const boton = document.createElement("button");
    boton.textContent = opcion.texto;
    boton.onclick = () => {
      escenaActual = opcion.siguiente;
      mostrarEscena(escenaActual);
    };
    opciones.appendChild(boton);
  });

  if (datosEscena.opciones.length === 0) {
    const reiniciar = document.createElement("button");
    reiniciar.textContent = "Reiniciar";
    reiniciar.onclick = () => {
      escenaActual = "bosque";
      mostrarEscena(escenaActual);
    };
    opciones.appendChild(reiniciar);
  }
}
