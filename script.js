document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js only if the element exists
    const typedElement = document.getElementById('typed-text');
    if (typedElement) {
        const typed = new Typed('#typed-text', {
            strings: ['Full Stack Developer', 'Web3 Enthusiast', 'Problem Solver'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const html = document.documentElement;
    const darkModeIcon = darkModeToggle.querySelector('i');

    darkModeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        darkModeIcon.classList.toggle('fa-sun');
        darkModeIcon.classList.toggle('fa-moon');
    });

    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = menuToggle.querySelector('i');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    });

    // About modal
    const aboutBtn = document.getElementById('about-btn');
    const aboutLink = document.getElementById('about-link');
    const aboutLinkMobile = document.getElementById('about-link-mobile');
    const modal = document.getElementById('about-modal');
    const modalClose = modal.querySelector('.modal-close');

    function openModal() {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // Only add event listener if about button exists (on home page)
    if (aboutBtn) {
        aboutBtn.addEventListener('click', openModal);
    }

    // These elements exist on both pages
    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    aboutLinkMobile.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
        mobileMenu.classList.remove('active');
    });

    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.mobile-menu') && !e.target.closest('.menu-toggle')) {
            mobileMenu.classList.remove('active');
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                mobileMenu.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    });

    // Form submission (only on home page)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add your form submission logic here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});