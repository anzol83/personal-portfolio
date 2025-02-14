document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const html = document.documentElement;
    const darkModeIcon = darkModeToggle.querySelector('i');

    function updateDarkModeIcon() {
        if (html.classList.contains('dark')) {
            darkModeIcon.className = 'fas fa-moon';
        } else {
            darkModeIcon.className = 'fas fa-sun';
        }
    }

    darkModeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        updateDarkModeIcon();
        localStorage.setItem('darkMode', html.classList.contains('dark'));
    });

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
        html.classList.add('dark');
        updateDarkModeIcon();
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuIcon.className = mobileMenu.classList.contains('active') 
            ? 'fas fa-times' 
            : 'fas fa-bars';
    });

    // Typed.js initialization
    if (document.getElementById('typed-text')) {
        new Typed('#typed-text', {
            strings: [
                'Full Stack Developer',
                'Web3 Enthusiast',
                'Problem Solver',
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };

            // Here you would typically send the form data to your server
            console.log('Form submitted:', formData);
            
            // Reset form
            contactForm.reset();
            
            // Show success message (you can customize this)
            alert('Thank you for your message! I will get back to you soon.');
        });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                mobileMenu.classList.remove('active');
                menuIcon.className = 'fas fa-bars';
            }
        });
    });
});