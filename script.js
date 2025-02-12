// Dark mode functionality
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const html = document.documentElement;

    // Set dark mode by default
    html.classList.add('dark');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('darkMode', 'true');

    darkModeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        const isDark = html.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
        darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Mobile menu functionality
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-bars');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuToggle.querySelector('i').classList.add('fa-bars');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });

    // Typing effect
    new Typed('#typed-text', {
        strings: [
            'Full Stack Developer',
            'Problem Solver',
            'Tech Enthusiast'
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        cursorChar: '|'
    });

    // Modal functionality
    const modal = document.getElementById('about-modal');
    const aboutBtn = document.getElementById('about-btn');
    const aboutLink = document.getElementById('about-link');
    const aboutLinkMobile = document.getElementById('about-link-mobile');
    const closeBtn = document.querySelector('.modal-close');

    function openModal() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    aboutBtn.addEventListener('click', openModal);
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
    aboutLinkMobile.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
        mobileMenu.classList.remove('active');
        menuToggle.querySelector('i').classList.add('fa-bars');
        menuToggle.querySelector('i').classList.remove('fa-times');
    });
    closeBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            const mailtoBody = `Name: ${name}\nEmail: ${email}\n\n${message}`;
            window.location.href = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
        });
    }
});