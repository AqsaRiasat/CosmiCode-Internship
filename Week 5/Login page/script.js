// Simple login validation demo
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const alertBox = document.getElementById('loginAlert');

  // Dummy login check
  if (email.value === 'test@example.com' && password.value === 'password') {
    alert('Login successful!');
    alertBox.classList.add('d-none');
  } else {
    alertBox.classList.remove('d-none');
  }

  // Show Bootstrap validation styles
  this.classList.add('was-validated');
});
