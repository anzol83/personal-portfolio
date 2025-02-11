// Get the dark mode toggle button
const toggleButton = document.getElementById('dark-mode-toggle');

// Check if dark mode is already in local storage (to remember the user's choice)
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('darkmode');
  toggleButton.textContent = '🌙'; // Change to moon icon for dark mode
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  document.body.classList.toggle('darkmode');
  
  // Change the icon depending on the mode
  if (document.body.classList.contains('darkmode')) {
    toggleButton.textContent = '🌙'; // Moon icon for dark mode
    localStorage.setItem('darkMode', 'enabled'); // Store user's preference
  } else {
    toggleButton.textContent = '☀️'; // Sun icon for light mode
    localStorage.removeItem('darkMode'); // Remove dark mode preference
  }
});
