document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show success message
    document.getElementById('success-message').style.display = 'block';

    // Clear the form fields
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});