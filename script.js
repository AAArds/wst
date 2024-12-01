let button = document.querySelector(".bars")
let menu = document.querySelector("ul")
let btn = document.querySelector("#close")

button.addEventListener("click",function(){
    menu.classList.add("active")
})

btn.addEventListener("click",function(){
    menu.classList.remove("active")
})

// Get form elements
const contactForm = document.querySelector('.contact-form');
const formGroups = document.querySelectorAll('.form-group');

// Create input fields with validation
formGroups[0].innerHTML = `
    <input type="text" id="name" placeholder="Your Name" required>
    <span class="error-message"></span>
`;

formGroups[1].innerHTML = `
    <input type="email" id="email" placeholder="Your Email" required>
    <span class="error-message"></span>
`;

formGroups[2].innerHTML = `
    <input type="text" id="subject" placeholder="Subject" required>
    <span class="error-message"></span>
`;

formGroups[3].innerHTML = `
    <textarea id="message" placeholder="Your Message" required></textarea>
    <span class="error-message"></span>
`;

// Form validation and submission handler
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    let isValid = true;

    // Reset error messages
    document.querySelectorAll('.error-message').forEach(error => {
        error.textContent = '';
    });

    // Validate name
    if (!name.value.trim()) {
        showError(name, 'Name is required');
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showError(email, 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email');
        isValid = false;
    }

    // Validate subject
    if (!subject.value.trim()) {
        showError(subject, 'Subject is required');
        isValid = false;
    }

    // Validate message
    if (!message.value.trim()) {
        showError(message, 'Message is required');
        isValid = false;
    }

    if (isValid) {
        // Here you would typically send the data to a server
        // For now, we'll just show a success message
        const formData = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        };
        
        console.log('Form data:', formData);
        showSuccessMessage();
        contactForm.reset();
    }
});

// Helper function to show error messages
function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    errorSpan.style.color = '#ff6b6b';
    errorSpan.style.fontSize = '12px';
    errorSpan.style.marginTop = '5px';
    input.style.borderColor = '#ff6b6b';
}

// Helper function to show success message
function showSuccessMessage() {
    const successMessage = document.createElement('div');
    successMessage.textContent = 'Message sent successfully!';
    successMessage.style.backgroundColor = '#4BB543';
    successMessage.style.color = 'white';
    successMessage.style.padding = '15px';
    successMessage.style.borderRadius = '8px';
    successMessage.style.marginTop = '15px';
    successMessage.style.textAlign = 'center';
    
    contactForm.appendChild(successMessage);
    
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

// Add input event listeners to remove error styling on new input
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', function() {
        this.style.borderColor = '';
        const errorSpan = this.nextElementSibling;
        errorSpan.textContent = '';
    });
});
