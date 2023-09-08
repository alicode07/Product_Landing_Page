// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 100, // Adjust the offset as needed
            behavior: 'smooth',
        });
    });
});

// Form submission and validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput = this.querySelector('input[type="text"]');
    const emailInput = this.querySelector('input[type="email"]');
    const messageInput = this.querySelector('textarea');

    // Simple validation
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert('Please fill in all fields.');
        return;
    }

    // You can add code here to send the form data to your server or perform other actions.
    // For this example, we'll just reset the form.
    this.reset();
});
