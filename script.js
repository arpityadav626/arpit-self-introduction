let count = 0;
const button = document.getElementById('counter-btn');

button.addEventListener('click', () => {
  count++;
  button.textContent = `Clicks: ${count} 🚀`;
});