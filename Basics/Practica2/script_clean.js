fetch('datos.json')
.then(
    function(response) { 
      return response.json(); 
    }
    )

.then(function(users) { 
    alert("Datos cargados:", users); 
  })

.catch(function(error) {
    console.error("Error loading JSON:", error);
    alert("No se pudo cargar la información. Intenta más tarde.");
});
