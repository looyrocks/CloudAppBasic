
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
*/

// Fetch JSON data from external file

fetch('datos.json')
 // .then(response => response.json())
.then(
    function(response) { 
      return response.json(); 
    }
    )

.then(function(users) { 

    var list = document.getElementById("userList"); 
    
    //alert("Datos cargados:", users); 

    alert(JSON.stringify(users, null, 2));

    users.forEach(function(user) 
      { var li = document.createElement("li"); 
        li.textContent = user.name + " (Age: " + user.age + ")"; 
        list.appendChild(li); });
      
    })

 /*   
  .then(users => {
    const list = document.getElementById("userList");

    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (Age: ${user.age})`;
      list.appendChild(li);
    });
  })
*/

/*
En JavaScript, catch es un método que se usa en las promesas 
para manejar errores. 
Cuando trabajas con fetch, async/await o cualquier operación asíncrona, catch te permite capturar excepciones o fallos en la ejecución.
*/

.catch(function(error) {
    console.error("Error loading JSON:", error);
});


//.catch(error => console.error("Error loading JSON:", error));

