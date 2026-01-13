// Fetch JSON data from external file
fetch('datos.json')
  .then(response => response.json())
  .then(users => {
    const list = document.getElementById("userList");

    users.forEach(user => {
      const li = document.createElement("li");
      li.textContent = `${user.name} (Age: ${user.age})`;
      list.appendChild(li);
    });
  })
  .catch(error => console.error("Error loading JSON:", error));
