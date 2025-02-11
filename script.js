// Dark mode toggle functionality
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('darkmode');
    darkModeToggle.textContent = body.classList.contains('darkmode') ? '🌙' : '☀️';
});

// Newsletter form handling
const newsletterForm = document.getElementById('newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    console.log('Newsletter subscription:', email);
    e.target.reset();
    alert('Thanks for subscribing!');
});