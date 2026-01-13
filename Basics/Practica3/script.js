// Fetch JSON data and populate dropdown
fetch('data.json')
  .then(response => response.json())
  .then(users => {
    const select = document.getElementById("userSelect");
    const output = document.getElementById("output");
    const button = document.getElementById("showBtn");

    // Populate dropdown with user names
    users.forEach((user, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = user.name;
      select.appendChild(option);
    });

    // Add button click event
    button.addEventListener("click", () => {
      const selectedIndex = select.value;
      const user = users[selectedIndex];
      output.textContent = `${user.name} is ${user.age} years old and lives in ${user.city}.`;
    });
  })
  .catch(error => console.error("Error loading JSON:", error));
