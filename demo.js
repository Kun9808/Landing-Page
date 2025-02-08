// Example of form submission handling
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // You can add further validation or submit the form data to a server here
    alert(`You signed up with email: ${email}`);
});
