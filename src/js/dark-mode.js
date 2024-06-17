const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function toggleTheme() {
  if (body.getAttribute('data-theme') === 'dark') {
    body.setAttribute('data-theme', 'light');
    body.style.backgroundColor = '#f0f0f0';
  } else {
    body.setAttribute('data-theme', 'dark');
    body.style.backgroundColor = '#333';
  }
}

themeToggle.addEventListener('click', toggleTheme);
