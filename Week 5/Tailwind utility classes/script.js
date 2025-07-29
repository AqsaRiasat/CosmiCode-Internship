// Show success message on button click
const btn = document.querySelector('#start-btn');
const message = document.querySelector('#message');

btn.addEventListener('click', () => {
  message.classList.remove('hidden');
  message.classList.add('animate-bounce');
});
