document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var form = event.target;
    var url = form.getAttribute('data-url');
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Send the form data to the server using the Fetch API
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(function(response) {
        // Handle the response from the server
        if (response.ok) {
            // Form submitted successfully
            alert('Form submitted successfully!');
            form.reset();
        } else {
            // Handle error
            throw new Error('Form submission failed.');
        }
    })
    .catch(function(error) {
        // Handle error
        console.error(error);
        alert('Form submission failed.');
    });
});