document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Stop form from submitting

  // Clear all error messages
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmError").textContent = "";

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  let isValid = true;

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Password length
  if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Confirm password
  if (confirmPassword !== password) {
    document.getElementById("confirmError").textContent = "Passwords do not match.";
    isValid = false;
  }

  // If valid, you can submit or show success
  if (isValid) {
    alert("Form submitted successfully!");
    // Optionally reset form here
    // document.getElementById("registerForm").reset();
  }
});
