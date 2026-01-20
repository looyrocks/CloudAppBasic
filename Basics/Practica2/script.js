
/*
ESTRUCTURA

fetch("data.json") 

.then(function(response) { 
return response.json(); 
}) 

.then(function(data) { 
console.log("Datos cargados:", data); 
}) 

.catch(function(error) { 
console.error("Error al cargar JSON:", error); 
});

fetch()Hace la petición HTTP
1er .then()Recibe la respuesta cruda
response.json()Convierte JSON → objeto JS
2do .then()Recibe los datos listos
.catch()Maneja errores

*/

// Fetch JSON data from external file

fetch('datos.json')
.then(
    function(response) { 
      return response.json(); 
    }
    )
 // .then(response => response.json())
 /*sirve para convertir la respuesta HTTP en un objeto JavaScript.*/

.then(function(users) { 
    alert("Datos cargados:", users); 
    //alert(JSON.stringify(users, null, 2));
    //alert(JSON.stringify(users [0], null, 2));
    //alert(JSON.stringify(users [0], ["age"], 16));
  })
  /*
  users[0] → el objeto que quieres convertir a texto.
  null → no se filtra ninguna propiedad.
   2 → se usa una indentación de 2 espacios para que el JSON sea más legible.
 */
/////////////////////////////////////////////////////////////////////
/*
En JavaScript, catch es un método que se usa en las promesas 
para manejar errores. 
Cuando trabajas con fetch, async/await o cualquier operación asíncrona, catch te permite capturar excepciones o fallos en la ejecución.
*/


.catch(function(error) {
    console.error("Error loading JSON:", error);
    alert("No se pudo cargar la información. Intenta más tarde.");
});


//.catch(error => console.error("Error loading JSON:", error));

