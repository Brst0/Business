// Example JavaScript to handle the contact form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for reaching out! We will get back to you soon.');
        // Optionally, send this data to your backend server for further processing
    } else {
        alert('Please fill in all fields.');
    }
});
