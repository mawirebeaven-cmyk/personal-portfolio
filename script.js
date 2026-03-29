// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const body = document.body;

// Check for saved theme preference or detect system preference
const currentTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme on page load
if (currentTheme === 'light') {
  body.classList.add('light-mode');
  themeToggle.textContent = '🌙 Dark Mode';
} else {
  body.classList.remove('light-mode');
  themeToggle.textContent = '☀️ Light Mode';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  const isLightMode = body.classList.contains('light-mode');
  localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
  
  // Update button text
  themeToggle.textContent = isLightMode ? '🌙 Dark Mode' : '☀️ Light Mode';
});
