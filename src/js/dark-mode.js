const themeToggleBtn = document.getElementById('theme-toggle-btn');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
  const isLightMode = body.classList.contains('light-mode');

  if (isLightMode) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    themeToggleBtn.textContent = 'Light';
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    themeToggleBtn.textContent = 'Dark';
  }
});
