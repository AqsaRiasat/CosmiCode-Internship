// script.js
function openModal() {
  document.getElementById('demoModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('demoModal').classList.add('hidden');
}

function toggleMenu() {
  const links = document.getElementById('nav-links');
  links.classList.toggle('hidden');
}
