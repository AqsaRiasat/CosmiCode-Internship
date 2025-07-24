const form = document.getElementById("userForm");
const savedDataDiv = document.getElementById("savedData");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const formData = { name, email, message };

  localStorage.setItem("formData", JSON.stringify(formData));

  displaySavedData();
});

function displaySavedData() {
  const saved = localStorage.getItem("formData");
  if (saved) {
    const data = JSON.parse(saved);
    savedDataDiv.innerHTML = `
      <h3>Saved Data:</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `;
  }
}

window.onload = displaySavedData;
