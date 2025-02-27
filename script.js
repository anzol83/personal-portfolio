document.addEventListener("DOMContentLoaded", function () {
    // Dark mode toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    if (darkModeToggle) {
        const html = document.documentElement;
        const darkModeIcon = darkModeToggle.querySelector("i");

        function updateDarkModeIcon() {
            darkModeIcon.className = html.classList.contains("dark")
                ? "fa-regular fa-lightbulb"
                : "fas fa-moon";
        }

        darkModeToggle.addEventListener("click", () => {
            html.classList.toggle("dark");
            updateDarkModeIcon();
            localStorage.setItem("darkMode", html.classList.contains("dark"));
        });

        // Check for saved dark mode preference
        const savedDarkMode = localStorage.getItem("darkMode");
        if (savedDarkMode === "true") {
            html.classList.add("dark");
            updateDarkModeIcon();
        }
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById("menu-toggle");
    if (menuToggle) {
        const mobileMenu = document.querySelector(".mobile-menu");
        const menuIcon = menuToggle.querySelector("i");

        menuToggle.addEventListener("click", () => {
            const isActive = mobileMenu.classList.toggle("active");
            menuIcon.className = isActive ? "fas fa-times" : "fas fa-bars";
        });
    }

    // Typed.js initialization
    const typed = new Typed("#typed-text", {
        strings: ["Full Stack Developer", "Web3 Enthusiast"],
        typeSpeed: 50,
        backSpeed: 40,
        loop: true,
    });

    // Initialize EmailJS properly
    emailjs.init("qAk6ZIdIAmAwu1GUm");

    // Contact form submission
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get form data
            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value,
            };

            // Check if form is valid
            if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                alert("Please fill in all fields.");
                return;
            }

            // Send email using EmailJS
            emailjs
                .send("service_hj13f0r", "template_8z6cg1c", formData)
                .then(function (response) {
                    console.log("Email sent successfully!", response);
                    alert("Thank you for your message! I will get back to you soon.");

                    // Reset form after successful submission
                    contactForm.reset();
                })
                .catch(function (error) {
                    console.error("Failed to send email:", error);
                    alert("Oops! Something went wrong. Please try again later.");
                });
        });
    }

    // Go to top button
    const goTopBtn = document.getElementById("goTopBtn");
    if (goTopBtn) {
        // Show the button when user scrolls down
        window.addEventListener("scroll", () => {
            goTopBtn.style.display = window.scrollY > 200 ? "flex" : "none";
        });

        // Scroll to top when button is clicked
        goTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});